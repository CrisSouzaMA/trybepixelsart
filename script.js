window.onlad = function () {
  let addBlack = document.querySelector('#black');
  addBlack.classList.add('selected');
}

function createBox() {

  let boxLine = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    let line = document.createElement('div');
    for (let index = 0; index < 5; index += 1) {
      let pix = document.createElement('div');
      pix.classList.add('pixel');
      line.appendChild(pix);
    }
    boxLine.appendChild(line);
  }
}
createBox();

// Requisito feito com ajuda do Bê, da Priscila, do Brunão, da Fabiana e da Camila
let allColors = document.querySelectorAll('.color');
allColors[0].style.backgroundColor = 'black';
allColors[1].style.backgroundColor = 'chartreuse';
allColors[2].style.backgroundColor = 'yellow';
allColors[3].style.backgroundColor = 'palevioletred';

for (let index = 0; index < allColors.length; index += 1) {
  allColors[index].addEventListener("click", function (event) {
    //descobrir quem tem a  class selector no momento
    let corAtual = document.querySelector('.selected');
    //remove class selector de quem tem 
    corAtual.classList.remove('selected');
    //adicionar em quem foi clicado
    event.target.classList.add('selected');
  });

}

//Verifica se ao carregar a página deve ser possível pintar os pixels de preto
allColors[0].classList.add('selected');

//Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor
let pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener("click", function () {
    let pixelsSec = document.querySelector('.selected').style.backgroundColor;
    //verificar se pinta um pixel 
    pixels[index].style.backgroundColor = pixelsSec;
  });
}

//Verifica se o botão tem o id denominado clear-board - feito no HTML
//Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels - feito no HTML
//Verifica se o texto do botão é 'Limpar' - feito no HTML
//Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

/*let butClean = document.querySelector('#clear-board');
let pixClean = document.querySelectorAll('.pixel');

butClean.addEventListener("click", function(event){
 for(let index = 0; index = pixClean.length; index += 1){
  pixClean[index].addEventListener("click", function (){
    pixClean[index].style.backgroundColor = 'white';
  }
  event.target.classList.add('clear');
}*/

//Exercicio feito com ajuda do Brunão
function clearBut() {

let clear = document.querySelector('#clear-board');
let clearPix = document.querySelectorAll('.pixel');
clear.addEventListener('click', function clearPixel(){
  console.log("oi to surtando");
  for (let index = 0; index < clearPix.length; index += 1) {
      clearPix[index].style.backgroundColor = 'white';
    }
  });
}
clearBut();