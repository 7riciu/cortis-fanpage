document.addEventListener("DOMContentLoaded", () => {
    const koreanLyrics = document.getElementById("korean").innerHTML;
    const romanizedLyrics = document.getElementById("romanized").innerHTML;
    const englishLyrics = document.getElementById("english").innerHTML;
    var lyricsArea = document.getElementById("lyrics");

    window.translateToKorean = () => {
        lyricsArea.innerHTML = koreanLyrics;
    };

    window.translateToRomanized = () => {
        lyricsArea.innerHTML = romanizedLyrics;
    };

    window.translateToEnglish = () => {
        lyricsArea.innerHTML = englishLyrics;
    };

    const audio = document.getElementById("audio");
    const playButton = document.getElementById("playButton");

    function playSong() {
        audio.play();
        playButton.textContent = "Pause";
    }

    function pauseSong() {
        audio.pause();
        playButton.textContent = "Play";
    }

    playButton.addEventListener("click", () => {
        if (audio.paused) playSong();
        else pauseSong();
    })
});