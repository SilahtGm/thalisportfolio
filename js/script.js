const slide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
let isMoving = false;

// Sempre atualiza o número de imagens quando precisar
function getImages() {
  return document.querySelectorAll('.carousel-slide img');
}

function updateSlide() {
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  if (isMoving) return;
  isMoving = true;
  counter++;
  const images = getImages();
  if (counter >= images.length) {
    counter = 0; // loop infinito
  }
  updateSlide();
  setTimeout(() => isMoving = false, 400);
});

prevBtn.addEventListener('click', () => {
  if (isMoving) return;
  isMoving = true;
  counter--;
  const images = getImages();
  if (counter < 0) {
    counter = images.length - 1; // loop infinito
  }
  updateSlide();
  setTimeout(() => isMoving = false, 400);
});

// --------------------------
// PROJETOS
// --------------------------

const projetos = [
  {
    titulo: "🚀 Challenge Swift – Gamificação",
    descricao: `Em maio de 2025, participei do Challenge da FIAP em parceria com a Swift, voltado à criação de uma solução gamificada para engajar colaboradores.
    Eu e meu grupo desenvolvemos o Swift Farmer, um projeto de uma plataforma com trilha de progressão baseada em vendas, ranking de desempenho, recompensas, missões e muito mais. Tudo pensado para impulsionar a motivação, o desempenho e a experiência no ambiente corporativo.
    <br>A entrega envolveu:<br>✔ Diagnóstico do problema
    <br>✔ MER
    <br>✔ Protótipo das telas em Figma
    <br>Nas imagens anexadas, compartilho alguns dashboards que desenvolvemos.`,
    imagens: [
      "./img/Login.jpg",
      "./img/Dash.png",
      "./img/Minha Trilha.png",
      "./img/Recompensas.png",
      "./img/Missões.png"
    ]
  },
  {
    titulo: "🌍 Global Solutions – Projeto Pluvius",
    descricao: `No mês de junho, tive a oportunidade de participar de mais um desafio da FIAP, o Global Solutions. 
 Um desafio em grupo que tinha como objetivo criar soluções tecnológicas para lidar com eventos climáticos extremos.
A nossa proposta foi o "Pluvius", uma plataforma web voltada ao monitoramento climático, com foco em previsões atualizadas, alertas de risco, mapas interativos e dashboards informativos. A solução foi pensada para ajudar tanto a população quanto órgãos públicos a se prepararem melhor diante de situações como enchentes e tempestades.<br>
Nosso projeto contou com:<br>
 ✅ Análise do problema<br>
 ✅ Protótipo visual criado no Figma<br>
 ✅ Dashboard com dados climáticos e alertas<br>
 ✅ Modelagem lógica e física dos dados<br>
Abaixo, apresento algumas telas que desenvolvemos.`,
    imagens: [
      "./img/LoginP.png",
      "./img/InicioP.png",
      "./img/MapaP.png"
    ]
  }
  {
  titulo: "eu Novo Projeto Incrível",
  descricao: `Descreva aqui o que é o projeto, os objetivos, ferramentas usadas, entregas, etc.<br>
✅ Lista de entregas<br>
✅ Link do protótipo se quiser<br>
✅ Qualquer detalhe que valorize o projeto!`,
  imagens: [
    "./img/NovoProjeto1.png",
    "./img/NovoProjeto2.png"
  ]
}
{
  titulo: "💡 Meu Novo Projeto Incrível",
  descricao: `Descreva aqui o que é o projeto, os objetivos, ferramentas usadas, entregas, etc.<br>
✅ Lista de entregas<br>
✅ Link do protótipo se quiser<br>
✅ Qualquer detalhe que valorize o projeto!`,
  imagens: [
    "./img/NovoProjeto1.png",
    "./img/NovoProjeto2.png"
  ]
}

];

let projetoIndex = 0;

const tituloEl = document.querySelector('.descricao-projeto h3');
const descricaoEl = document.querySelector('.descricao-projeto p');

function carregarProjeto(index) {
  const projeto = projetos[index];
  tituloEl.textContent = projeto.titulo;
  descricaoEl.innerHTML = projeto.descricao;

  slide.innerHTML = projeto.imagens.map(src => `<img src="${src}" alt="Imagem do projeto">`).join('');

  counter = 0; // reset do slide
  updateSlide();
}

document.getElementById('next-project').addEventListener('click', () => {
  projetoIndex++;
  if (projetoIndex >= projetos.length) projetoIndex = 0;
  carregarProjeto(projetoIndex);
});

document.getElementById('prev-project').addEventListener('click', () => {
  projetoIndex--;
  if (projetoIndex < 0) projetoIndex = projetos.length - 1;
  carregarProjeto(projetoIndex);
});

carregarProjeto(projetoIndex);

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
