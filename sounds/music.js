// Ogre-Wolf: Shared Background Music
(function () {
    function setupMusic() {
        const MUSIC_FILE = "sounds/background_music.mp3";

        let music = document.getElementById("background-music");
        let button = document.getElementById("music-control");

        // Create the audio player if it does not exist.
        if (!music) {
            music = document.createElement("audio");
            music.id = "background-music";
            music.loop = true;
            music.preload = "auto";

            const source = document.createElement("source");
            source.src = MUSIC_FILE;
            source.type = "audio/mpeg";

            music.appendChild(source);
            document.body.appendChild(music);
        }

        // Create the music button if it does not exist.
        if (!button) {
            button = document.createElement("button");
            button.id = "music-control";
            document.body.appendChild(button);
        }

        // Style the button.
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.right = "20px";
        button.style.zIndex = "99999";
        button.style.padding = "12px 18px";
        button.style.background = "#1a1a1a";
        button.style.color = "#f5c16c";
        button.style.border = "2px solid #f5c16c";
        button.style.borderRadius = "8px";
        button.style.cursor = "pointer";

        const POSITION_KEY = "ogrewolfMusicPosition";
        const PLAYING_KEY = "ogrewolfMusic";

        // Update the button label.
        function updateButton() {
            button.textContent = music.paused
                ? "🔊 Play Spooky Music"
                : "🔇 Turn Music Off";
        }

        // Save the current song position.
        function savePosition() {
            if (Number.isFinite(music.currentTime)) {
                sessionStorage.setItem(
                    POSITION_KEY,
                    String(music.currentTime)
                );
            }
        }

        // Save the position when the page is being left.
        window.addEventListener("pagehide", savePosition);

        // Save the position periodically while music plays.
        music.addEventListener("timeupdate", savePosition);

        // Start or resume the music.
        async function startMusic() {
            try {
                await music.play();
                sessionStorage.setItem(PLAYING_KEY, "on");
                updateButton();
            } catch (error) {
                button.textContent = "▶ Tap to Play Music";
            }
        }

        // Toggle the music when the button is pressed.
        button.addEventListener("click", function () {
            if (music.paused) {
                startMusic();
            } else {
                savePosition();
                music.pause();
                sessionStorage.setItem(PLAYING_KEY, "off");
                updateButton();
            }
        });

        // Restore the saved song position once the audio is ready.
        music.addEventListener("loadedmetadata", function () {
            const savedPosition = Number(
                sessionStorage.getItem(POSITION_KEY)
            );

            if (
                Number.isFinite(savedPosition) &&
                savedPosition > 0 &&
                Number.isFinite(music.duration) &&
                music.duration > 0
            ) {
                // Start near the saved position, avoiding the very end.
                music.currentTime = Math.min(
                    savedPosition,
                    Math.max(0, music.duration - 1)
                );
            }
        }, { once: true });

        // Automatically try to resume if music was previously enabled.
        if (sessionStorage.getItem(PLAYING_KEY) === "on") {
            startMusic();
        } else {
            updateButton();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupMusic);
    } else {
        setupMusic();
    }
})();