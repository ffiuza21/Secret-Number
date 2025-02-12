let listDrawnNumbers = [];
let maxNumbers = 100;
let secretNumber = generateRandomNumber();
let tries = 1;

function displayText(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female', {rate:1.2});
}

function displayInicialText() {
    displayText('h1', 'Secret Number The Game');
    displayText('p', 'Choose a number between 1 and 100');
}

displayInicialText();

function verificarChute() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        displayText('h1', `You're Wright`);
        let wordTrie = tries > 1 ? 'guesses' : 'guess';
        let messageTries = `Congratulations, you've discovered the secret number with only ${tries} ${wordTrie}`;
        displayText('p', messageTries);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
        displayText('h1', `You're Wrong`);
        displayText('p', 'The secret number is lower, keep trying');
        } else {
        displayText('h1', `You're Wrong`);
        displayText('p', 'The secret number is higher, keep trying');
        }
        tries++;
        cleanField();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumbers + 1);
    let elementsOnList = listDrawnNumbers.length;
    
    if (elementsOnList == maxNumbers) {
        listDrawnNumbers = [];
    }
    if (listDrawnNumbers.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        listDrawnNumbers.push(chosenNumber);
        console.log(listDrawnNumbers);
        return chosenNumber;
    }
}

function cleanField() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    cleanField();
    tries = 1;
    displayInicialText();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
let abab = 12355
//cometario 
// coment 2