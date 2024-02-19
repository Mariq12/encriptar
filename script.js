/*window.onload = function() {
  //toggleCopyButtonVisibility(); // Llamar a la función cuando se carga la página
};*/

function encryptText() {
  let textInput = document.getElementById("text-input").value;

  // Verificar si hay tildes en el texto
  if (/[áéíóúü]/i.test(textInput)) {
    if (
      confirm(
        "Se han detectado tildes en el texto. ¿Desea modificar el texto para eliminarlas?"
      )
    ) {
      // Eliminar las tildes del texto
      textInput = textInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      document.getElementById("text-input").value = textInput; // Cambiar el texto del cuadro de texto

      alert("Se han eliminado las tildes del texto.");
    } else {
      return; // Salir de la función si el usuario no desea modificar el texto
    }
  }

  // Verificar si hay caracteres especiales en el texto
  if (/[^a-zA-Z0-9\s]/.test(textInput)) {
    alert("No deben ser utilizados caracteres especiales.");
    document.getElementById("text-input").value = ""; // Borrar el contenido del cuadro de texto
    return;
  }

  // Verificar si hay mayúsculas en el texto
  if (/[A-Z]/.test(textInput)) {
    if (
      confirm(
        "Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?"
      )
    ) {
      // Convertir mayúsculas a minúsculas
      textInput = textInput.toLowerCase();
      document.getElementById("text-input").value = textInput; // Cambiar el texto del cuadro de texto

      alert("Se han convertido las mayúsculas a minúsculas.");
    } else {
      return;
    }
  }

  // Realizar la encriptación con el texto sin tildes y en minúsculas
  let result = encrypt(textInput.toLowerCase());
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  document.getElementById("resultado").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("no-result-img").style.display = "none";
  document.getElementById("no-result-text").style.display = "none";
  document.getElementById("no-result-text-h4").style.display = "none";

  // Mostrar el botón de copiar
  mostrarOcultarBotonCopiar();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Luego de encriptar, mostrar u ocultar el botón de copiar según el tamaño de la pantalla
  toggleCopyButtonVisibility();
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

/*function copyToClipboard() {
  const resultTextArea = document.getElementById("result");
  resultTextArea.select();
  document.execCommand("copy");
}
// Función para verificar si se aplica la media query
function checkMediaQuery() {
  if (window.matchMedia("(max-width: 768px) and (max-height: 1174px)").matches) {
      document.getElementById("copy-button").style.display = "none";
  } else {
      document.getElementById("copy-button").style.display = "block";
  }
}*/

// Función para verificar si se aplica la media query
/*function checkMediaQuery() {
  const copyButton = document.getElementById("copy-button");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Verificar si la pantalla está en modo completo
  const isFullScreen = screenWidth === window.screen.width && screenHeight === window.screen.height;

  if (isFullScreen || (screenWidth <= 768 && screenHeight <= 1174)) {
      copyButton.style.display = "none";
  } else {
      copyButton.style.display = "block";
  }
}*/


// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.onload = checkMediaQuery;
window.addEventListener("resize", checkMediaQuery);


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
