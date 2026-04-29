(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Smooth anchor scrolling ─────────────────────
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                var target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                }
            });
        });
    }

    // ── Header scroll state ─────────────────────────
    function initHeaderScroll() {
        var header = document.getElementById('header');
        if (!header) return;

        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.scrollY > 20) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ── Hero image tilt ─────────────────────────────
    function initHeroTilt() {
        var heroImage = document.getElementById('heroImage');
        if (!heroImage || prefersReducedMotion) return;

        var isHoveringImage = false;
        var rafId = null;
        var currentX = 0;
        var currentY = 0;
        var targetX = 0;
        var targetY = 0;

        heroImage.addEventListener('mouseenter', function () {
            isHoveringImage = true;
            // Let CSS :hover handle the flattening
            heroImage.classList.remove('tilting');
            heroImage.style.transform = '';
        });

        heroImage.addEventListener('mouseleave', function () {
            isHoveringImage = false;
            // Snapshot current values before re-enabling tilt
            targetX = 0;
            targetY = 4; // matches the default rotateX(4deg) in CSS
        });

        document.addEventListener('mousemove', function (e) {
            if (isHoveringImage) return;

            var rect = heroImage.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;

            // Map distance from center to rotation (max ~15deg Y, ~8deg X)
            targetX = ((e.clientX - centerX) / (window.innerWidth / 2)) * 15;
            targetY = 4 + ((e.clientY - centerY) / (window.innerHeight / 2)) * 8;
        });

        // Smooth follow loop
        function animate() {
            if (!isHoveringImage) {
                // Lerp towards target
                currentX += (targetX - currentX) * 0.08;
                currentY += (targetY - currentY) * 0.08;

                if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
                    heroImage.classList.add('tilting');
                    heroImage.style.transform =
                        'perspective(1200px) rotateY(' + currentX.toFixed(2) + 'deg) rotateX(' + currentY.toFixed(2) + 'deg)';
                }
            }
            rafId = requestAnimationFrame(animate);
        }

        // Initialize defaults
        currentY = 4;
        targetY = 4;
        rafId = requestAnimationFrame(animate);
    }

    // ── Reveal on scroll ────────────────────────────
    function initRevealAnimations() {
        if (prefersReducedMotion) {
            // Make everything visible immediately
            document.querySelectorAll('.reveal, .reveal-stagger > *').forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('reveal-stagger')) {
                        // Stagger children
                        var children = entry.target.children;
                        Array.prototype.forEach.call(children, function (child, i) {
                            setTimeout(function () {
                                child.classList.add('visible');
                            }, i * 80);
                        });
                    } else {
                        entry.target.classList.add('visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

        document.querySelectorAll('.reveal').forEach(function (el) {
            observer.observe(el);
        });

        document.querySelectorAll('.reveal-stagger').forEach(function (el) {
            observer.observe(el);
        });
    }

    // ── Lightbox for GIFs ───────────────────────────
    function initLightbox() {
        var lightbox = document.getElementById('lightbox');
        var lightboxMedia = document.getElementById('lightboxMedia');
        if (!lightbox || !lightboxMedia) return;

        function openLightbox(src) {
            lightboxMedia.src = src;
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
            // Clear src after transition to stop GIF animation
            setTimeout(function () {
                lightboxMedia.src = '';
            }, 400);
        }

        // Click on any bento card opens lightbox
        document.querySelectorAll('.bento-card').forEach(function (card) {
            card.addEventListener('click', function () {
                var gifSrc = card.getAttribute('data-gif');
                if (gifSrc) openLightbox(gifSrc);
            });

            // Keyboard accessibility
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var gifSrc = card.getAttribute('data-gif');
                    if (gifSrc) openLightbox(gifSrc);
                }
            });
        });

        // Close on background click
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        // Close button
        var closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) {
                closeLightbox();
            }
        });
    }

    // ── Init ────────────────────────────────────────
    function init() {
        initSmoothScroll();
        initHeaderScroll();
        initHeroTilt();
        initRevealAnimations();
        initLightbox();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
