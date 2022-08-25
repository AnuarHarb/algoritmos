var contenedor = document.querySelector("#contendedor-historia");

function crearHistoria() {
  // variables para la historia strings / number / boolean
  var nombre = prompt("¿Como te llamas?");
  var profesion = prompt("¿A que te decicas?");
  var pais = "Colombia";
  var comidaFavorita = prompt("¿Cuál es tu comida favorita?");
  var numero = Math.trunc(Math.random() * 20);
  var accion = prompt("¿Que haces cuando estas feliz?");

  // Historia
  var historia =
    nombre +
    " era un " +
    profesion +
    " que vivia en " +
    pais +
    ". Era fan de los " +
    comidaFavorita +
    " y un días después de comerse " +
    numero +
    " se puso a " +
    accion;

  // Instrucción que saca un cuadro de texto
  // alert(historia);
  contenedor.innerHTML = historia;
}
