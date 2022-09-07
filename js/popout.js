function abrirPopout(element){
    var popout = document.querySelector(`[data-pop=${element}]`);
    popout.classList.toggle('descer');

}

var btbotao = document.querySelectorAll("[data-botao]");
btbotao.forEach(element => {
    element.addEventListener("click", () => {abrirPopout(element.dataset.botao)});

})