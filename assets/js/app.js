const botonSumar = document.getElementById("btn-add");
const botonRestar = document.getElementById("btn-subtract");
const botonMultiplicar = document.getElementById("btn-multiply");
const botonDividir = document.getElementById("btn-divide");
const botonResultado = document.getElementById("btn-result");

botonResultado.classList.add("button-disabled");
botonResultado.disabled = true;

const textoResultado = document.getElementById("text-result");
let texto = "";

function presionarBotonNumerico(valor) {
  const tieneIgual = texto.includes("=");
  if (tieneIgual) {
    presionarBotonLimpiar();
  }

  texto = texto + valor;
  textoResultado.innerHTML = texto;
}

function presionarBotonLimpiar() {
  texto = "";
  textoResultado.innerHTML = texto;
  botonSumar.classList.remove("button-disabled");
  botonSumar.disabled = false;
  botonRestar.classList.remove("button-disabled");
  botonRestar.disabled = false;
  botonMultiplicar.classList.remove("button-disabled");
  botonMultiplicar.disabled = false;
  botonDividir.classList.remove("button-disabled");
  botonDividir.disabled = false;
  botonResultado.classList.add("button-disabled");
  botonResultado.disabled = true;
}

function presionarBotonOperacion(valor) {
  texto = texto + " " + valor + " ";
  textoResultado.innerHTML = texto;

  botonSumar.classList.add("button-disabled");
  botonSumar.disabled = true;
  botonRestar.classList.add("button-disabled");
  botonRestar.disabled = true;
  botonMultiplicar.classList.add("button-disabled");
  botonMultiplicar.disabled = true;
  botonDividir.classList.add("button-disabled");
  botonDividir.disabled = true;

  botonResultado.classList.remove("button-disabled");
  botonResultado.disabled = false;
}

function persionarBotonResultado() {
  const listaDatos = texto.split(" ");
  const num2 = parseFloat(listaDatos[2]);
  if (num2) {
    botonResultado.classList.add("button-disabled");
    botonResultado.disabled = true;
    calcularOperacionesMatematicas();
  }
}

function calcularOperacionesMatematicas() {
  // const listaDatos = texto.split(" ");
  // const num1 = Number(listaDatos[0]);
  // const operador = listaDatos[1];
  // const num2 = Number(listaDatos[2]);
  // let resultado = "";
  // switch (operador) {
  //   case "+":
  //     resultado = num1 + num2;
  //     break;
  //   case "-":
  //     resultado = num1 - num2;
  //     break;
  //   case "*":
  //     resultado = num1 * num2;
  //     break;
  //   case "/":
  //     resultado = num1 / num2;
  //     break;
  // }
  // texto = texto + " = " + resultado;
  // textoResultado.innerHTML = texto;
}
