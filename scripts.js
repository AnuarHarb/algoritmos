var contenedor = document.querySelector("#contendedor-historia");
const headerInput = document.querySelector("#header-input"); // Input para escribir nombre
const userSpan = document.getElementById("user-span"); // Titulo donde mostrar nombre

function guardarUsuario() {
  const nombreDeUsuario = headerInput.value; // lee el valor del input y lo guarda en una variable
  console.log(nombreDeUsuario); // imprime la variable que guardamos
  userSpan.innerHTML = nombreDeUsuario + " está resolviendo algoritmos"; // Mostrar el nombre en un elemento de html
  // Quitar o añadir clases de css
  userSpan.classList.remove("anonimo");
  userSpan.classList.add("identificado");
}

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
