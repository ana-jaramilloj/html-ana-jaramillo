//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "c", img: "images/imagen1.jpg" },
    { name: "cpp", img: "images/img 2.jpg" },
    { name: "css", img: "images/img 3.jpg" },
    { name: "fortran", img: "images/img 4.jpg" },
    { name: "html", img: "images/img 5.jpg" },
    { name: "python", img: "images/img 6.jpg" },
    { name: "c", img: "images/img 7.jpg" },
    { name: "csharp", img: "images/img 8.jpg" }
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

//________________ lecture_03 __________________________________________//
function voltearCarta(){
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