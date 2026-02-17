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

/* Função de abrir um details por vez  */
  const details = document.querySelectorAll('.mini-menu');

  details.forEach((target) => {
    target.addEventListener('toggle', () => {
      if (target.open) {
        details.forEach((detail) => {
          if (detail !== target) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });


  /* Hamburguer */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  
  // Troca o ícone de Bars para X (Times)
  if (navMenu.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
    hamburger.style.transform = "rotate(90deg)";
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    hamburger.style.transform = "rotate(0deg)";
  }
});


/* Tela de loading */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  
  // Pequeno delay para a animação de progresso completar visualmente
  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 2000); 
});