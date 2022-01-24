// Função para o ativar o menu hamburguer ao clickar 
function onClickMenu(){
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Constante para o selector .btnMenu
const btnMenu1 = document.querySelector('.btnMenu1')
const btnMenu2 = document.querySelector('.btnMenu2')
const btnMenu3 = document.querySelector('.btnMenu3')
const btnMenu4 = document.querySelector('.btnMenu4')
const btnMenu5 = document.querySelector('.btnMenu5')

// Evento para fechar o menu após o click nos botões
btnMenu1.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu2.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu3.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu4.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
})

btnMenu5.addEventListener('click', function() {
    document.getElementById("hambuguer").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  })