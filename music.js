const music = document.getElementById("bgMusic");

// Restore music when page loads
window.addEventListener("load", () => {
    const playing = localStorage.getItem("musicPlaying");

    if (playing === "true") {
        const savedTime =
            parseFloat(localStorage.getItem("musicTime")) || 0;

        music.currentTime = savedTime;

        music.play().catch(() => {});
    }
});

// Save current position every second
setInterval(() => {
    if (music && !music.paused) {
        localStorage.setItem("musicTime", music.currentTime);
        localStorage.setItem("musicPlaying", "true");
    }
}, 1000);

function playMusic() {
    music.play();

    localStorage.setItem("musicPlaying", "true");
}

function stopMusic() {
    music.pause();

    localStorage.removeItem("musicPlaying");
    localStorage.removeItem("musicTime");
}