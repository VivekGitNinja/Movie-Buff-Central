// Random quotes for Quote of the Day
const quotes = [
    "It does not do to dwell on dreams and forget to live. - Harry Potter",
    "I am Iron Man. - Tony Stark",
    "In every job that must be done, there is an element of fun. - Mary Poppins",
    "The Force will be with you, always. - Obi-Wan Kenobi"
];

// Display a random quote
window.onload = function() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerText = randomQuote;
};

// Trivia Quiz
function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    if (answer === 'Harry Potter') {
        resultElement.innerText = "Correct! Harry Potter is the 'Boy Who Lived'.";
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = "Incorrect! Try again.";
        resultElement.style.color = 'red';
    }
} // Quote of the Day
const quotes = [
    "Do or do not. There is no try. - Yoda",
    "May the Force be with you. - Obi-Wan Kenobi",
    "With great power comes great responsibility. - Spider-Man",
    "I am Iron Man. - Tony Stark",
    "Just keep swimming. - Dory"
];

document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Trivia Quiz Answer Check
function checkAnswer(answer) {
    if (answer === 'Harry Potter') {
        document.getElementById('result').innerText = 'Correct! The Boy Who Lived is Harry Potter.';
    } else {
        document.getElementById('result').innerText = 'Incorrect! Try again.';
    }
}

// Bubbles Game
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Randomize bubble position and size
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.width = Math.random() * 60 + 20 + 'px';
    bubble.style.height = bubble.style.width;

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 1000);