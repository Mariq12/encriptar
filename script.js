function encryptText() {
  const textInput = document.getElementById("text-input").value.toLowerCase();
  let result = encrypt(textInput);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}

function decryptText() {
  const textInput = document.getElementById("text-input").value.toLowerCase();
  let result = decrypt(textInput);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
}

function habilitarDesencriptar(habilitar) {
  const desencriptarButton = document.getElementById("desencriptar");
  desencriptarButton.disabled = !habilitar;
}

function mostrarOcultarBotonCopiar() {
  const copiarButton = document.getElementById("copy-button");
  const resultTextArea = document.getElementById("result");

  if (resultTextArea.value.trim() === "") {
    // El campo de resultado está vacío, oculta el botón de copiar
    copiarButton.style.display = "none";
  } else {
    // El campo de resultado no está vacío, muestra el botón de copiar
    copiarButton.style.display = "block";
  }
}

function encrypt(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function decrypt(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copyToClipboard() {
  const resultTextArea = document.getElementById("result");
  resultTextArea.select();
  document.execCommand("copy");
}

function mostrarResultado() {
  // Ocultar la imagen y los textos
  document.getElementById("no-result-img").style.display = "none";
  document.getElementById("no-result-text").style.display = "none";
  document.getElementById("no-result-text-h4").style.display = "none";
  // Mostrar u ocultar el botón de copiar
  const copiarButton = document.getElementById("copy-button");
  copiarButton.style.display =
    document.getElementById("result").value.trim() === "" ? "none" : "block";
}
