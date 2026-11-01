const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((element) => observer.observe(element));

const copyButton = document.querySelector('[data-copy]');
copyButton?.addEventListener('click', async () => {
  const value = copyButton.dataset.copy;
  await navigator.clipboard.writeText(value);
  const label = copyButton.querySelector('.copy-label');
  label.textContent = 'copied!';
  setTimeout(() => { label.textContent = 'copy'; }, 1800);
});
