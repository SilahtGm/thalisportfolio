/* Função de opacidade ao carregar o conteúdo */
function iniciarReveal() {
  const elementos = document.querySelectorAll('.reveal');

  const isMobile = window.innerWidth <= 768;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: isMobile ? 0.05 : 0.2,
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px'
  });

  elementos.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', iniciarReveal);

