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

    // Piano
    Tone.start();
    const synth = new Tone.Synth().toDestinaion;

    document.addEventListener("keydown", (e) => {
        if (e.key === "A" || e.key === "a") {
            console.log("Pressed A");
        }
        else if (e.key === "S" || e.key === "s") {
            console.log("Pressed S");
        }
        else if (e.key === "D" || e.key === "d") {
            console.log("Pressed D");
        }
        else if (e.key === "F" || e.key === "f") {
            console.log("Pressed F");
        }
        else if (e.key === "G" || e.key === "g") {
            console.log("Pressed G");
        }
        else if (e.key === "H" || e.key === "h") {
            console.log("Pressed H");
        }
        else if (e.key === "J" || e.key === "j") {
            console.log("Pressed J");
        }
    });

    function playNote(note) {
        synth.triggerAttackRelease(`${note}4`, '8n');
    }
});