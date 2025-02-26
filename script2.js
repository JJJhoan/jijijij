const progressContainer = document.querySelector('.progress-container');
const lyricsContainer = document.querySelector('.lyrics-container');
const progressBar = document.getElementById('progress-bar');
const lyricsDisplay = document.getElementById('lyrics-display');
const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');

// Selecciona el botón con la clase 'next-button'
const nextButton = document.querySelector('#play-button');

// Cambia el texto cuando el mouse pasa por encima
nextButton.addEventListener('mouseover', function() {
    this.textContent = 'Sí, tocame.'; // Solo cambia el texto, no los estilos
});

// Restaura el texto cuando el mouse sale del botón
nextButton.addEventListener('mouseout', function() {
    this.textContent = 'Tocame.'; // Vuelve al texto original
});

// Datos de las letras con su respectivo tiempo
const lyricsData = [
    { time: 19, text: "Your morning eyes, I could stare like watching stars" },
    { time: 25, text: "I could walk you by, and I'll tell without a thought" },
    { time: 32, text: "You'd be mine, would you mind if I took your hand tonight?" },
    { time: 40, text: "Know you're all that I want this life" },
    { time: 48, text: "I'll imagine we fell in love" },
    { time: 51, text: "I'll nap under moonlight skies with you" },
    { time: 54, text: "I think I'll picture us, you with the waves" },
    { time: 58, text: "The ocean's colors on your face" },
    { time: 62, text: "I'll leave my heart with your air" },
    { time: 66, text: "So let me fly with you" },
    { time: 69, text: "Will you be forever with me?" },
    { time: 105, text: "My love will always stay by you" },
    { time: 112, text: "I'll keep it safe, so don't you worry a thing, I'll tell you I love you more" },
    { time: 121, text: "It's stuck with you forever, so promise you won't let it go" },
    { time: 128, text: "I'll trust the universe will always bring me to you" },
    { time: 136, text: "I'll imagine we fell in love" },
    { time: 139, text: "I'll nap under moonlight skies with you" },
    { time: 143, text: "I think I'll picture us, you with the waves" },
    { time: 146, text: "The ocean's colors on your face" },
    { time: 150, text: "I'll leave my heart with your air" },
    { time: 154, text: "So let me fly with you" },
    { time: 158, text: "Will you be forever with me?" },
    { time: 160, text: "<3" },
    { time: 163, text: "Me gustas mucho." }
];

let currentLyricIndex = 0;

lyricsData.forEach((lyric) => {
    const p = document.createElement('p');
    p.textContent = lyric.text;
    lyricsDisplay.appendChild(p);
});

function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
}

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;

    // Actualizamos la barra de progreso
    const progress = (currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';

    // Si el tiempo actual alcanza el de la letra correspondiente, se hace visible
    if (currentLyricIndex < lyricsData.length && currentTime >= lyricsData[currentLyricIndex].time) {
        const currentLyric = lyricsDisplay.children[currentLyricIndex];
        currentLyric.classList.add('active');
        scrollToElement(currentLyric);
        currentLyricIndex++;
    }
});


// Función para reproducir la música
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Reproducir";  // Texto del botón si está en pausa
        document.getElementById("dark-overlay").style.display = "none";
        document.getElementById("background-image").style.opacity = 1;
        document.querySelector('.progress-container').style.display = "block";
        document.querySelector('.lyrics-container').style.display = "block";

        // Ocultamos el botón de reproducir después de hacer clic
        playButton.style.display = "none";  // Esto oculta el botón
    }
});
