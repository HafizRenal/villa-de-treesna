/* =============================================
   VILLA DE TREESNA — MAIN JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ----- 1. NAVBAR: Scroll effect + active link -----
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinksItems = document.querySelectorAll('.nav-links li a:not(.nav-cta)');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinksItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ----- 2. MOBILE NAV TOGGLE -----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ----- 3. SCROLL ANIMATIONS (Intersection Observer) -----
  const animateElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation for elements in the same parent
          const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
          let delay = 0;
          siblings.forEach((sibling, i) => {
            if (sibling === entry.target) {
              delay = i * 100; // 100ms stagger per sibling
            }
          });

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animateElements.forEach(el => observer.observe(el));

  // ----- 4. SMOOTH SCROLL for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

});

// ----- 5. VILLA CARD: Toggle detail expand -----
function toggleDetail(btn) {
  const expandSection = btn.nextElementSibling;
  const isOpen = expandSection.classList.contains('open');

  // Close all other open details first
  document.querySelectorAll('.villa-detail-expand.open').forEach(el => {
    el.classList.remove('open');
    el.previousElementSibling.classList.remove('active');
  });

  // Toggle current one (if it was closed)
  if (!isOpen) {
    expandSection.classList.add('open');
    btn.classList.add('active');
  }
}
