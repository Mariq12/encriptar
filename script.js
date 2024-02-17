/*function encryptText() {
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
*/
/*function decryptText() {
  const textInput = document.getElementById("text-input").value.toLowerCase();
  let result = decrypt(textInput);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
}*/

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

function encryptText() {
  let textInput = document.getElementById("text-input").value;

  // Verificar si hay tildes en el texto
  if(/[áéíóúü]/.test(textInput)) {
    if (confirm("Se han detectado tildes en el texto. ¿Desea modificar el texto para eliminarlas?")) {
      // Eliminar las tildes del texto
      textInput = textInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      document.getElementById("text-input").value = textInput; // Cambiar el texto del cuadro de texto

      alert("Se han eliminado las tildes del texto.");
    } else {
      return; // Salir de la función si el usuario no desea modificar el texto
    }
  }

  // Verificar si hay mayúsculas en el texto
  if(/[A-Z]/.test(textInput)) {
    if (confirm("Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?")) {
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
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}

/*
function encryptText() {
  let textInput = document.getElementById("text-input").value;

  // Verificar si hay tildes en el texto
  if(/[áéíóúü]/.test(textInput)) {
    if (confirm("Se han detectado tildes en el texto. ¿Desea modificar el texto para eliminarlas?")) {
      alert("Se eliminarán las tildes del texto.");
    } else {
      return; // Salir de la función si el usuario no desea modificar el texto
    }
  }

  // Verificar si hay mayúsculas en el texto
  if(/[A-Z]/.test(textInput)) {
    if (confirm("Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?")) {
      alert("Se convertirán las mayúsculas a minúsculas.");
      textInput = textInput.toLowerCase();
      document.getElementById("text-input").value = textInput;
    } else {
      return;
    }
  }

  // Reemplazar tildes por caracteres sin tilde y convertir a minúsculas
  textInput = textInput
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // Realizar la encriptación con el texto sin tildes y en minúsculas
  let result = encrypt(textInput);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}
*/

/*
function encryptText() {
  let textInput = document.getElementById("text-input").value;

  // Reemplazar tildes por caracteres sin tilde y convertir a minúsculas
  textInput = textInput
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  document.getElementById("text-input").value = textInput;

  // Verificar si hay tildes en el texto
  if(/[áéíóúü]/.test(textInput)) {
    if (confirm("Se han detectado tildes en el texto. ¿Desea modificar el texto para eliminarlas?")) {
      // Realizar la encriptación con el texto sin tildes
      let result = encrypt(textInput);
      document.getElementById("result").value = result;

      // Mostrar el resultado y ocultar la imagen y los textos
      mostrarResultado();
      // Habilitar el botón Desencriptar
      habilitarDesencriptar(true);
      // Mostrar u ocultar el botón de copiar
      mostrarOcultarBotonCopiar();

      return; // Salir de la función después de encriptar el texto sin tildes
    } else {
      return; // Salir de la función si el usuario no desea modificar el texto
    }
  }

  // Verificar si hay mayúsculas en el texto
  if(/[A-Z]/.test(textInput)) {
    if (confirm("Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?")) {
      document.getElementById("text-input").value = textInput.toLowerCase();
    } else {
      return;
    }
  }

  // Encriptar el texto original (sin modificar)
  let result = encrypt(textInput);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}
*/
/*
function encryptText() {
  const textInput = document.getElementById("text-input").value;

  // Verificar si hay tildes en el texto
  if(/[ÁÉÍÓÚÜáéíóúü]/.test(textInput)) {
    if (confirm("Se han detectado tildes en el texto. ¿Desea modificar el texto para eliminarlas?")) {
      // Reemplazar tildes por caracteres sin tilde
      const textWithoutAccents = textInput
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // Realizar la encriptación con el texto sin tildes
      let result = encrypt(textWithoutAccents.toLowerCase());
      document.getElementById("result").value = result;

      // Mostrar el resultado y ocultar la imagen y los textos
      mostrarResultado();
      // Habilitar el botón Desencriptar
      habilitarDesencriptar(true);
      // Mostrar u ocultar el botón de copiar
      mostrarOcultarBotonCopiar();

      return; // Salir de la función después de encriptar el texto sin tildes
    } else {
      return; // Salir de la función si el usuario no desea modificar el texto
    }
  }

  // Verificar si hay mayúsculas en el texto
  if(/[A-Z]/.test(textInput)) {
    if (confirm("Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?")) {
      document.getElementById("text-input").value = textInput.toLowerCase();
    } else {
      return;
    }
  }

  // Encriptar el texto original (sin modificar)
  let result = encrypt(textInput.toLowerCase());
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}
*/
/*function encryptText() {
  const textInput = document.getElementById("text-input").value;

  // Reemplazar tildes por caracteres sin tilde
  const textWithoutAccents = textInput
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Verificar si hay mayúsculas en el texto sin tildes
  if(/[A-Z]/.test(textWithoutAccents)) {
    if (confirm("Se han detectado mayúsculas en el texto. ¿Desea modificar el texto para convertirlo a minúsculas?")) {
      document.getElementById("text-input").value = textWithoutAccents.toLowerCase();
    } else {
      return;
    }
  }

  let result = encrypt(textWithoutAccents.toLowerCase());
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}*/

/*function encryptText() {
  const textInput = document.getElementById("text-input").value;

  // Verificar si hay mayúsculas o tildes
  if(/[A-ZÁÉÍÓÚÜ]/.test(textInput) || /[áéíóúü]/.test(textInput)) {
    if (confirm("Se han detectado mayúsculas o tildes en el texto. ¿Desea modificar el texto para eliminarlas?")) {
      // Reemplazar tildes por caracteres sin tilde y convertir a minúsculas
      const textWithoutAccents = textInput
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      document.getElementById("text-input").value = textWithoutAccents;
    } else {
      return;
    }
  }

  let result = encrypt(textInput.toLowerCase());
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}*/



/*function encryptText() {
  const textInput = document.getElementById("text-input").value;

  // Verificar si hay mayúsculas o tildes
  if(/[A-ZÁÉÍÓÚÜ]/.test(textInput) || /[áéíóúü]/.test(textInput)) {
    alert("No se permiten mayúsculas o tildes en el texto.");
    return;
  }

  // Reemplazar tildes por caracteres sin tilde y convertir a minúsculas
  const textWithoutAccents = textInput
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  let result = encrypt(textWithoutAccents);
  document.getElementById("result").value = result;

  // Mostrar el resultado y ocultar la imagen y los textos
  mostrarResultado();
  // Habilitar el botón Desencriptar
  habilitarDesencriptar(true);
  // Mostrar u ocultar el botón de copiar
  mostrarOcultarBotonCopiar();
}*/
