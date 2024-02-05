function encryptText() {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    let result = encrypt(textInput);
    document.getElementById('result').value = result;
    
    // Mostrar el resultado y ocultar la imagen y los textos
    mostrarResultado();
}

function decryptText() {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    let result = decrypt(textInput);
    document.getElementById('result').value = result;
    
    // Mostrar el resultado y ocultar la imagen y los textos
    mostrarResultado();
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const resultTextArea = document.getElementById('result');
    resultTextArea.select();
    document.execCommand('copy');
}

function mostrarResultado() {
    // Ocultar la imagen y los textos
    document.getElementById("no-result-img").style.display = "none";
    document.getElementById("no-result-text").style.display = "none";
    document.getElementById("no-result-text-h4").style.display = "none";
}


/*function encryptText() {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    let result = encrypt(textInput);
    document.getElementById('result').value = result;
}

function decryptText() {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    let result = decrypt(textInput);
    document.getElementById('result').value = result;
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const resultTextArea = document.getElementById('result');
    resultTextArea.select();
    document.execCommand('copy');
}

function mostrarImagen() {
    var resultContent = document.getElementById("result").value.trim();

    if (resultContent === "") {
        // El campo de resultado está vacío, muestra la imagen
        document.getElementById("no-result-img").style.display = "block";
    } else {
        // El campo de resultado no está vacío, oculta la imagen
        document.getElementById("no-result-img").style.display = "none";
    }
}
*/