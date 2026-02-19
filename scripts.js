// Finlete Investor Dashboard — scripts.js

// Bootstrap is loaded via CDN. Add any custom JS interactions below.

document.addEventListener('DOMContentLoaded', function () {

  // Animate cards on scroll (Intersection Observer)
  const cards = document.querySelectorAll('.athlete-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(card);
  });

  // DealMaker button click handler (replace href with OTP link generation)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // TODO: Call your backend to generate OTP link for this investment
      // e.g. fetch('/api/dealmaker/otp?dealId=XYZ').then(res => window.open(res.url))
      alert('Connecting to DealMaker...');
    });
  });

});
