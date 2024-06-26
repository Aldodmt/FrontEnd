const synth = window.speechSynthesis;
function reproducir(){
    var texto = document.getElementById("texto").value;
    const uttherThis = new SpeechSynthesisUtterance(texto);
    synth.speak(uttherThis);
}

document.querySelector("#Reproducir").addEventListener("click", reproducir);