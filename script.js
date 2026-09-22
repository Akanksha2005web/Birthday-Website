function openSurprise() {
    
    

    document.getElementById("welcome").classList.add("hidden");

    document.getElementById("birthday").classList.remove("hidden");

}

function openGift() {

    document.getElementById("giftBox").innerHTML = "🎉";

    document.getElementById("finalMessage").classList.remove("hidden");

    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 60; i++) {

        let confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "❤️", "💖", "🎊"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let duration = Math.random() * 3 + 2;

        confetti.animate(
            [
                { transform: "translateY(0)" },
                { transform: "translateY(110vh)" }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
function playMusic() {
    const music = document.getElementById("birthdayMusic");
    music.play();
}