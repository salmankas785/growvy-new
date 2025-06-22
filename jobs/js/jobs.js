// Example JS (optional): Simple hover animation
const cards = document.querySelectorAll('.jobs-cards .card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
