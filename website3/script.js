// Fade-in sections as they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  // Order button placeholder action
  const orderBtn = document.getElementById('order-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert("This is a sample site — wire this button up to your real checkout flow.");
    });
  }
});
