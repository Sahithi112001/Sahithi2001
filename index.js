/**
 * Portfolio Interactive Controller
 * Candidate: Sahithi Ranavena
 */

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('is-active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Progress Indicator
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progressPercentage = (window.scrollY / totalHeight) * 100;
            scrollProgress.style.width = `${progressPercentage}%`;
        }
    });

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNavLink);
});