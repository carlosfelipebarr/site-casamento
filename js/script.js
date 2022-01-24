//  Defindo valores para as medidas de tempo
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//  Formatando a data 
let count_down = new Date('02/05/2022 18:00:00').getTime();
let x = setInterval(() => countDown(), second);

// Contador para criar a contagem regressiva na página 
function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('dias').innerText = Math.floor(diff / day);
  document.getElementById('horas').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutos').innerText = Math.floor(diff % hour / minute);
  document.getElementById('segundos').innerText = Math.floor(diff % minute / second);
}


// Quiz de curiosidades sobre o casal
var perguntas = {};

var questao_1 = document.getElementById('questao-1');
var questao_2 = document.getElementById('questao-2');
var questao_3 = document.getElementById('questao-3');

function storeAnswer(questao_numero, event) {
  if (event.target.type === 'radio') {
    console.log(event.target.value);
    perguntas['questao' + questao_numero] = parseInt(event.target.value);
    console.log(perguntas);
  }
}

questao_1.addEventListener('click', function (event) {
  storeAnswer(1, event)
})
questao_2.addEventListener('click', function (event) {
  storeAnswer(2, event)
})
questao_3.addEventListener('click', function (event) {
  storeAnswer(3, event)
})


// Função para calcular os pontos
function pontosTotais() {
    var total_score = 
    perguntas.questao1 +
    perguntas.questao2 +
    perguntas.questao3;
    return total_score;
}

// Função para os feedbacks dos pontos
function respostaPorPonto() {
  if (pontosTotais() < 6) {
    var score_info = "Talvez você não nos conheça tão bem...";
  } else if (pontosTotais() > 6  && pontosTotais() < 9) {
    var score_info = "Você está por dentro!"
  } else if (pontosTotais() >= 9) {
    var score_info = "Parabéns! Você acertou todas!"
  }

  return score_info;
}

var enviar1 = document.getElementById('enviar1');
var enviar2 = document.getElementById('enviar2');
var enviar3 = document.getElementById('enviar3');

// Função para próxima questão
function nextQuestion(questao_numero) {
  var questao_atual = questao_numero - 1;
  var questao_numero = questao_numero.toString();
  var questao_atual = questao_atual.toString();

  var el = document.getElementById('questao-' + questao_numero);
  var el2 = document.getElementById('questao-' + questao_atual);

  el.style.display = "block";
  el2.style.display = "none";
}

enviar1.addEventListener('click', function () {
  nextQuestion(2);
  growProgressBar('75%');
})
enviar2.addEventListener('click', function () {
  nextQuestion(3);
  growProgressBar('100%');
})
enviar3.addEventListener('click', function () {
  nextQuestion(4);
})
enviar3.addEventListener('click', function () {
  document.getElementById("pontosTotais").innerHTML = pontosTotais();
  document.getElementById("resultadosTotais").innerHTML = respostaPorPonto();
})

// Função para barra de progresso
function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}

// Função de aúdio 
const buttonAudio = document.getElementById('coracao-play')
buttonAudio.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.currentTime = 0;  
  audio.play()
})


// Criando a variavel mybutton pegando o id do button no html
var btnTop = document.getElementById("btn-top");

// Quando rolar a página 25px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};


// Função para quando a tela rolar
function scrollFunction() {
  // Se a tela descer 25px então:
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    btnTop.style.display = "block";
    
    // Se não então:
  } else {
    btnTop.style.display = "none";
  }
}

// Quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
