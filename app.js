//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "imagen1", img: "images/imagen1.jpg" },
    { name: "cpp", img: "images/img 2.jpg" },
    { name: "css", img: "images/img 3.jpg" },
    { name: "fortran", img: "images/img 4.jpg" },
    { name: "html", img: "images/img 5.jpg" },
    { name: "python", img: "images/img 6.jpg" },
    { name: "imagen1", img: "images/imagen1.jpg" },
    { name: "cpp", img: "images/img 2.jpg" },
    { name: "css", img: "images/img 3.jpg" },
    { name: "fortran", img: "images/img 4.jpg" },
    { name: "html", img: "images/img 5.jpg" },
    { name: "python", img: "images/img 6.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function verificarPareja() {
  var cards = document.querySelectorAll("img");
  const opcionUnoId = cartasEscogidasId[0];
  const opcionDosId = cartasEscogidasId[1];

  if (opcionUnoId === opcionDosId) {
    cards[opcionUnoId].setAttribute("src", "images/reverso.png");
    cards[opcionDosId].setAttribute("src", "images/reverso.png");
    alert("¡Diste click a la misma imagen!");
  } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
    alert("¡Correcto!");
    cards[opcionUnoId].setAttribute("src", "images/blank.png");
    cards[opcionDosId].setAttribute("src", "images/blank.png");
    cards[opcionUnoId].removeEventListener("Click", voltearCarta);
    cards[opcionDosId].removeEventListener("Click", voltearCarta);
    cartasGanadas.push(cartasEscogidas);
  } else {
    cards[opcionUnoId].setAttribute("src", "images/reverso.png");
    cards[opcionDosId].setAttribute("src", "images/reverso.png");
    alert("¡intenta de nuevo!");
  }
  cartasEscogidas = [];
  cartasEscogidasId = [];

  resultado.textContent = cartasGanadas.length;

  if (cartasGanadas.length === cardAdj.length / 2){
    resultado.textContent = "¡Felicidades, encontraste todos los pares!";
  }
}
  //________________ lecture_03 __________________________________________//
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
