/* Função de opacidade ao carregar o conteúdo */
function iniciarReveal() {
  const elementos = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
        obs.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.2
  });

  elementos.forEach(el => observer.observe(el));
}

// garante que o DOM carregou
document.addEventListener('DOMContentLoaded', iniciarReveal);
