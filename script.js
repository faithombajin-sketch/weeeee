function showPictures() {
    const gallery = document.getElementById("gallery");

    gallery.style.display = "flex";
    startConfetti();
    const song = document.getElementById("birthdaySong");
    song.currentTime = 0;
    song.play();

    document.querySelector(".message").style.display = "none";

    document.getElementById("secret").style.display = "none";
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
    const duration = 9000;
    const end = Date.now() + duration;

    const confettiInterval = setInterval(() => {
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

        if (Date.now() >= end) {
            clearInterval(confettiInterval);
        }
    }, 100);
}