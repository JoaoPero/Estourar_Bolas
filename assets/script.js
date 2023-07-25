function addBola() {
  //criar o elemento e adicionar a classe
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");

  //definir as posições aleatoriamente
  var x = Math.floor(Math.random() * 500);
  var y = Math.floor(Math.random() * 400);

  //posicionando
  bola.setAttribute("style", "left:" + x + "px; top:" + y + "px;");
  //<div style= "left: 000; top:000"></div>
  console.log(`Posição x-${x} Posição y-${y}`);

  bola.setAttribute("onclick", "estourar(this)");

  //renderizando a bola na tela
  document.body.appendChild(bola);
}

//função que estura as bolas quando clicadas
function estourar(elem) {
  document.body.removeChild(elem);
}

//função que criar as bolas na tela a cada X segundos
function iniciar() {
  setInterval(() => {
    addBola();
  }, 1000);
}
