const sections = document.querySelectorAll('.fade-element');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  observer.observe(section);
});
