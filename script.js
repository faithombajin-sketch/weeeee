let screen = 1;
let confettiInterval;

function showPictures() {

    if (screen === 1) {

        const gallery = document.getElementById("gallery");

        gallery.style.display = "flex";
        startConfetti();

        const song = document.getElementById("birthdaySong");
        song.currentTime = 0;
        song.play();

        document.querySelector(".message").style.display = "none";
        document.getElementById("secret").style.display = "none";

        screen = 2;

    } else if (screen === 2) {
        clearInterval(confettiInterval);

        document.querySelectorAll("body > div").forEach(el => {
        if (el.innerHTML === "🎉") {
            el.remove();
        }
    });
        const song = document.getElementById("birthdaySong");
        song.pause();
        song.currentTime = 0;

        document.getElementById("gallery").style.display = "none";
        document.getElementById("pictureMessage").style.display = "none";

        document.querySelector("button").style.display = "none";

        document.getElementById("thirdScreen").style.display = "block";

        screen = 3;
    }
}
function enlargePicture(photo) {
    const photos = document.querySelectorAll(".photo");

    if (photo.classList.contains("enlarged")) {
        photo.classList.remove("enlarged");
    } else {
        photos.forEach(p => {
            p.classList.remove("enlarged");
        });

        photo.classList.add("enlarged");
    }
}
function startConfetti() {

    confettiInterval = setInterval(() => {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";
        confetti.style.transition = "transform 4s linear, opacity 4s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform =
                `translateY(100vh) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 4000);

    }, 100);
}

function showFourthScreen() {
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("fourthScreen").style.display = "block";

    let count = 5;
    const countdown = document.getElementById("countdown");
    countdown.textContent = count;

    const timer = setInterval(() => {
        count--;
        countdown.textContent = count;

        if (count === 0) {
            clearInterval(timer);

            countdown.textContent = "";
            countdown.style.display = "none";
            countdown.remove();

            // Patayin ang candles
            document.querySelectorAll(".flame").forEach(flame => {
                flame.classList.add("off");
            });

            // Mag-crack ang cake
            const cake = document.querySelector(".cake");
            cake.classList.add("cake-crack");

            // Hintayin matapos ang crack
            setTimeout(() => {

                // Mawawala ang cake
                cake.style.display = "none";

                // Lalabas ang letter
                document.getElementById("cakeLetter").style.display = "block";
                startHeartConfetti();

                // Patugtugin ang kanta
                const cakeSound = document.getElementById("cakeSound");
                cakeSound.currentTime = 0;
                cakeSound.play();

                // Letter word by word
                const text = "Happy Birthday, Mama! ❤️ Thank you for everything you do for our family. I love you so much, and I wish you good health, happiness, and many more birthdays to come. Enjoy your special day! 🎂💕";

                const letterText = document.getElementById("letterText");
                letterText.textContent = "";

                const words = text.split(" ");
                let i = 0;

                const typing = setInterval(() => {

                    letterText.textContent += (i === 0 ? "" : " ") + words[i];
                    i++;

                    if (i >= words.length) {
                        clearInterval(typing);
                    }

                }, 400); // 0.4 second bawat word

            }, 1500);
        }
    }, 1000);
}
function startHeartConfetti() {
    const container = document.getElementById("heartConfetti");

    setInterval(() => {
        const heart = document.createElement("div");

        heart.classList.add("heart-confetti");
        heart.innerHTML = ["💗", "💖", "💕", "❤️", "💓"][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
}
        

