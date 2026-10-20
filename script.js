const button = document.getElementById("btn");
const input = document.getElementById("value");
const contenedor = document.getElementById("output-card");

function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return calcularFactorial(n - 1) * n;
}

function realizarCalculo() {
  const textValue = input.value.trim();

  if (!textValue) {
    mostrarError("Ingresar un numero");
    return;
  }

  const number = Number(textValue);

  if (isNaN(number) || !Number.isInteger(number)) {
    mostrarError("Debe ingresar un numero entero valido");
    return;
  }

  if (number < 0) {
    mostrarError("Ingresar un numero positivo");
    return;
  }

  const resultado = calcularFactorial(number);
  renderizar(number, resultado);
}

function renderizar(num, resultado) {
  contenedor.innerHTML = `
    <div>
      <p>Numero: ${num}</p>
      <p>Factorial: ${resultado}</p>
    </div>
  `;
}

function mostrarError(mensaje) {
  contenedor.innerHTML = `
  <p>* ${mensaje}</p>
  `;
}

button.addEventListener("click", realizarCalculo);
