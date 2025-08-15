// --- SCRIPT DO ÁLBUM COM EFEITO DE PULSO ---
// Caminhos para as imagens atualizados para a pasta 'assets/images/'
const photoFilenames = ['assets/imagens/casal.jpg'];
for (let i = 1; i <= 14; i++) {
    photoFilenames.push(`assets/imagens/casal${i}.jpg`);
}

let slideIndex = 0;
let slideshowTimeout;
const galleryImage = document.getElementById('gallery-image');

galleryImage.addEventListener('animationend', () => {
    galleryImage.classList.remove('pulse-effect');
});

function changeSlide(newIndex) {
    if (newIndex >= photoFilenames.length) newIndex = 0;
    if (newIndex < 0) newIndex = photoFilenames.length - 1;
    slideIndex = newIndex;

    galleryImage.src = photoFilenames[slideIndex];
    galleryImage.classList.add('pulse-effect');
}

function plusSlides(n) {
    clearTimeout(slideshowTimeout);
    changeSlide(slideIndex + n);
    startSlideshow();
}

function startSlideshow() {
    slideshowTimeout = setTimeout(() => {
        changeSlide(slideIndex + 1);
        startSlideshow();
    }, 5000); // Troca a cada 5 segundos
}
startSlideshow();

// --- SCRIPT DO TIMER ---
const dataInicial = new Date("November 30, 2024 21:00:00").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
    const agora = new Date().getTime();
    const tempoPassado = agora - dataInicial;

    if (tempoPassado < 0) {
        timerElement.innerHTML = "A contagem do nosso amor começa em breve...";
        return;
    }

    const dias = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoPassado % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoPassado % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${dias} dias, ${horas} horas, ${minutos} min e ${segundos} seg`;
}, 1000);

// --- SCRIPT DA MÚSICA ---
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.innerHTML = "⏸️";
    } else {
        music.pause();
        musicButton.innerHTML = "🎵";
    }
});