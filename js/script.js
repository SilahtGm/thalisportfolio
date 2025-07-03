const slide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const tituloEl = document.querySelector('.descricao-projeto h3');
const descricaoEl = document.querySelector('.descricao-projeto p');
const backToTop = document.getElementById('backToTop');

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
  },
  {
    titulo: "📋 Cálculo de Comissão com Bônus - Java ",
    descricao: `Olá a todos, neste projeto que eu desenvolvi para o curso técnico da Etec, utilizando Java.<br>
    O programa realiza o cálculo da comissão de vendas, adicionando um bônus extra quando a meta de quantidade é ultrapassada.<br>
    O usuário informa o valor total vendido e a quantidade de vendas realizadas, e o sistema retorna o valor da comissão com ou sem bônus.<br>
    Esse exercício ajudou a praticar estruturas de controle (if, while), operações matemáticas e interação com o console.<br>
    📌 Tecnologias: Java, NetBeans IDE`,
    imagens: [
      "./img/ExecuçãoDoJava.png",
      "./img/Captura de tela 2025-07-02 231543.png"
    ]
  },
  {
    titulo: "🚀 Sistema Java de pagamento de IPVA.",
    descricao: `Olá a todos, este meu projeto foi desenvolvido durante minhas aulas na ETEC no módulo de Desenvolvimento de Sistemas.
 Utilizei a linguagem Java e a estrutura switch case para criar uma lógica que informa ao usuário a data correta para pagamento do IPVA de acordo com o final da placa do veículo.<br>`,
    imagens: [
      "./img/ExecuçãoDoJavaAgenda7.png"
    ]
  }
];

let projetoIndex = 0;
let slideIndex = 0; // índice da imagem dentro do projeto
let isAnimating = false;

// Função que carrega as imagens no slide para o projeto atual
function carregarImagensProjeto() {
  const imagens = projetos[projetoIndex].imagens;
  slide.innerHTML = imagens
    .map(
      (src, i) =>
        `<img src="${src}" alt="Imagem ${i + 1} do projeto" draggable="false" />`
    )
    .join('');
  slide.style.transform = 'translateX(0)';
  slideIndex = 0;
}

// Atualiza título e descrição do projeto
function carregarDescricaoProjeto() {
  tituloEl.textContent = projetos[projetoIndex].titulo;
  descricaoEl.innerHTML = projetos[projetoIndex].descricao;
}

// Atualiza o slide para a imagem no índice atual
function updateSlide() {
  slide.style.transition = 'transform 0.4s ease-in-out';
  slide.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Navega para próxima imagem no slide
function nextSlide() {
  if (isAnimating) return;
  const totalImgs = projetos[projetoIndex].imagens.length;
  isAnimating = true;
  slideIndex++;
  if (slideIndex >= totalImgs) slideIndex = 0;
  updateSlide();
  setTimeout(() => {
    isAnimating = false;
  }, 400);
}

// Navega para imagem anterior no slide
function prevSlide() {
  if (isAnimating) return;
  const totalImgs = projetos[projetoIndex].imagens.length;
  isAnimating = true;
  slideIndex--;
  if (slideIndex < 0) slideIndex = totalImgs - 1;
  updateSlide();
  setTimeout(() => {
    isAnimating = false;
  }, 400);
}

// Carrega um projeto completo (imagens + descrição)
function carregarProjeto(index) {
  if (index < 0) projetoIndex = projetos.length - 1;
  else if (index >= projetos.length) projetoIndex = 0;
  else projetoIndex = index;

  carregarDescricaoProjeto();
  carregarImagensProjeto();
}

// Eventos dos botões do slide (imagens)
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Eventos dos botões de navegação dos projetos
document.getElementById('next-project').addEventListener('click', () => {
  carregarProjeto(projetoIndex + 1);
});
document.getElementById('prev-project').addEventListener('click', () => {
  carregarProjeto(projetoIndex - 1);
});

// Botão voltar ao topo
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicializa página com o primeiro projeto carregado
carregarProjeto(projetoIndex);
