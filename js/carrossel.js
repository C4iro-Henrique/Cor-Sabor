"use strict"
let IndexSlide = 1;
let Timer;
let tempo=2000;


//pra começar a rodar
mostraSlides(IndexSlide);
Timer = setInterval(function(){pulaSlides(1)},tempo);

var slideshowContainer = document.getElementsByClassName("slides__dentro")[0];
//pause
slideshowContainer.addEventListener('mouseenter',pause);
//resume
slideshowContainer.addEventListener('mouseleave',resume);

//botoes
document.querySelector(".antes").onclick=function(){pulaSlides(-1);}
document.querySelector(".depois").onclick=function(){pulaSlides(1);}

var dotsclick = document.getElementsByClassName("dot");
for (let j = 0; j < dotsclick.length; j++) {
  dotsclick[j].onclick=function(){ atualSlides(j+1);}
}
//funcão para o funcionamento dos botoes antes e depois + contador
function pulaSlides(n){
  clearInterval(Timer);
  if(n<1){
    mostraSlides(IndexSlide -= 1);
  }
  else{
    mostraSlides(IndexSlide += 1);
  }
  if(n==-1){
    Timer = setInterval(function(){pulaSlides(n+2)},tempo);
  }
  else{
    Timer = setInterval(function(){pulaSlides(n+1)},tempo);
  }
}

//funcão para os dots
function atualSlides(n){
  clearInterval(Timer);
  mostraSlides(IndexSlide=n);
  Timer = setInterval(function(){pulaSlides(n)},tempo);
}

//função para mostrar os slides e colocar uma cor nos dots
function mostraSlides(n){
  let i;
  var slides = document.getElementsByClassName("slides__div");
  var dots = document.getElementsByClassName("dot");
  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for ( i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  }
  if(n>slides.length){IndexSlide = 1;}
  if(n<1){IndexSlide = slides.length;}
  slides[IndexSlide-1].style.display = "block";
  dots[IndexSlide-1].className += "active";

}

 function pause(){
   clearInterval(Timer);
}
 function resume(){
   clearInterval(Timer);
  Timer = setInterval(function(){pulaSlides(IndexSlide)},tempo);
}
