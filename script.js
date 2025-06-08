// Array com mensagens de sorte
const mensagem = [
  "Você terá um dia cheio de alegrias!",
  "Uma surpresa agradável está a caminho.",
  "Confie no seu instinto.",
  "Novas oportunidades surgirão em breve.",
  "A felicidade está nas pequenas coisas.",
  "Seja corajoso e siga seus sonhos.",
  "Alguém especial pensa em você.",
  "O sucesso está ao seu alcance.",
  "A paciência traz grandes recompensas.",
  "Hoje é um ótimo dia para começar algo novo.",
  "Sua criatividade será sua maior aliada hoje.",
  "Um sorriso inesperado iluminará seu caminho.",
  "Acredite na magia dos recomeços.",
  "Abrace as mudanças, elas trazem crescimento.",
  "Compartilhe sua luz com o mundo.",
  "A resposta que você busca está dentro de você.",
  "Celebre cada pequena vitória.",
  "Grandes ideias florescerão da sua mente.",
  "Permita-se sonhar sem limites.",
  "Sua gentileza fará a diferença na vida de alguém.",
];

// Seleciona elementos do DOM
const coracao = document.getElementById("coracao");
const mensagemDiv = document.getElementById("sorte");
const resetBtn = document.getElementById("resetBtn");

// Função para clicar no coração e mostrar a mensagem
function breakCookie() {
  // Escolhe um índice aleatório baseado no tamanho do array sorte
  const randomIndex = Math.floor(Math.random() * mensagem.length);

  // Pega a mensagem sorteada
  const message = mensagem[randomIndex];

  // Mostra a mensagem na div
  mensagemDiv.textContent = message;

  // Muda a imagem para um coracao vermelho
  coracao.src = "coracao2.png";

  // Esconde a imagem para não clicar mais de uma vez
  coracao.style.pointerEvents = "none";

  // Mostra o botão para resetar o jogo
  resetBtn.style.display = "inline-block";
}

// Função para resetar o jogo para o estado inicial
function resetGame() {
  // Limpa a mensagem
  mensagemDiv.textContent = "";

  // Volta a imagem do coracao rosa
  coracao.src = "coracao.png";

  // Permite clicar novamente no coracao
  coracao.style.pointerEvents = "auto";

  // Esconde o botão de reset
  resetBtn.style.display = "none";
}

// Adiciona o evento de clicar no coracao
coracao.addEventListener("click", breakCookie);

// Adiciona o evento de clique para resetar o jogo
resetBtn.addEventListener("click", resetGame);
