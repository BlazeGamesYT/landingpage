const tagline = document.getElementById("tagline");

const allOptions = [
    "Well hello there!",
    "Wait this is live?",
    "OMG HI!! :3",
    "Epic developer coder person :)",
    "Hiiiiii",
    "Give me your money.",
    "Flashing letters!",
    "It's me.",
    "One of a kind!",
    "Yaaay!",
    "Thats no moon!",
    "Look what I can do!",
    "Did I doo thatt?",
    "As seen on TV!",
    "Whats your favorite color in the alphabet? Mines square.",
    "Collaborate and Listen!",
    "Hammer Time!",
    "sqrt(-1) love you!",
    "Im here all night!",
    "The most common password is 12345. Dont be a normie.",
    "You are this websites 1 millionth user! Just email us your social security number to claim your prize! (dont actually)",
    "I AM ADOL- nevermind.",
    "@$^$#%7*^$(& AHH",
    "Czy to freddy fazbear?",
    "WAS THAT THE BITE OF 87??!!!!?",
    "hey hru :3",
    "lol",
    "HUGE SUCCESS! Its hard to overstate my satisfaction.",
    "We do what we must, because we can!",
    "The cake is a lie!",
    "Its dangerous to go alone! Take this!",
    "Hey! Listen!",
    "All we had to do was follow the damn train, CJ!",
    "Yo. KIRYU-CHAN!"
];

let possibleOptions = [...allOptions];

setInterval(() => {
    console.log(possibleOptions);

    if (!possibleOptions.length) {
        possibleOptions = [...allOptions];
    }

    let randomNumber = Math.floor(Math.random() * possibleOptions.length);

    tagline.innerHTML = possibleOptions[randomNumber];

    possibleOptions.splice(randomNumber, 1);
}, 3000);
