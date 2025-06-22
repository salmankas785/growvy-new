// ========================
// SCROLL-UP BUTTON
// ========================
const scrollBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========================
// MENU TOGGLE (for mobile)
// ========================
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// ========================
// SMOOTH SCROLL FOR NAV LINKS (Optional Enhancement)
// ========================
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ========================
// OPTIONAL: Auto-close menu on link click (mobile)
// ========================
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('open');
  });
});
