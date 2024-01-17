const tagline = document.getElementById("tagline");

const options = [
    "Well hello there!",
    "Wait this is live?",
    "OMG HI!! :3",
    "Epic developer coder person :)",
    "Hiiiiii",
    "Give me your money."
];

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * options.length);
    tagline.innerHTML = options[randomNumber];
}, 2000);
