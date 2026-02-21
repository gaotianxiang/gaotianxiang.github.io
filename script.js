// ========================================
// Navbar scroll effect
// ========================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================================
// Smooth scroll for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========================================
// Scroll reveal animations
// ========================================
function addRevealClasses() {
  // Section headers and descriptions
  document.querySelectorAll('.section-label, .section-title, .section-desc').forEach(el => {
    el.classList.add('reveal');
  });

  // Cards
  document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
    el.classList.add('reveal');
  });

  // Stagger grids
  document.querySelectorAll('.skills-grid, .project-features').forEach(el => {
    el.classList.add('reveal-stagger');
  });
}

function handleReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight * 0.88) {
      el.classList.add('visible');
    }
  });
}

addRevealClasses();
handleReveal(); // initial check
window.addEventListener('scroll', handleReveal, { passive: true });

// ========================================
// Typing effect for code window
// ========================================
const codeEl = document.querySelector('.code-body code');
if (codeEl) {
  const original = codeEl.innerHTML;
  const chars = original.split('');
  codeEl.innerHTML = '';
  codeEl.style.visibility = 'visible';

  let i = 0;
  let inTag = false;
  let buffer = '';

  function typeNext() {
    if (i >= chars.length) return;

    const char = chars[i];

    if (char === '<') inTag = true;
    if (inTag) {
      buffer += char;
      if (char === '>') {
        inTag = false;
        codeEl.innerHTML += buffer;
        buffer = '';
      }
      i++;
      typeNext();
      return;
    }

    codeEl.innerHTML += char;
    i++;
    setTimeout(typeNext, 18);
  }

  // Start typing after a short delay
  setTimeout(typeNext, 800);
}
