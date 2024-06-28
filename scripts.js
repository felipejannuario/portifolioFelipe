const form = document.querySelector(".formulario-fale-comigo")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px";
    form.style.transform = "translatex(0)";
    mascara.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    ajustarVolume(0.2); // Define o volume para 20%
    audio.play(); // Toca a música automaticamente
});

function ajustarVolume(volume) {
    const audio = document.getElementById("myAudio");
    audio.volume = volume;
}

// Ajuste de volume inicial
//ajustarVolume(0.40); // Define o volume inicial para 20%

function abrirLink() {
    window.location.href = "https://example.com"; // Altere o link para o destino desejado
}

function openInNewTab(url) {
    window.open(url, "_blank");
}