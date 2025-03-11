const randomNumber = Math.floor(Math.random() * 1000001);
let attempts = 0;
const maxAttempts = 20;
let guessedCorrectly = false;

while (attempts < maxAttempts && !guessedCorrectly) {
    const userInput = prompt(`Tippelj egy számot 0 és 1 000 000 között! (${attempts + 1}. próbálkozás)`);
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
        alert("Érvénytelen bemenet! Kérlek, számot adj meg.");
        continue;
    }

    attempts++;
    if (userGuess === randomNumber) {
        alert(`Gratulálok, ${attempts} lépésből eltaláltad!`);
        guessedCorrectly = true;
    } else if (userGuess < randomNumber) {
        alert(`${attempts}. tipp nem talált: A megoldás nagyobb.`);
    } else {
        alert(`${attempts}. tipp nem talált: A megoldás kisebb.`);
    }
}

if (!guessedCorrectly) {
    alert("Sajnos ez most nem sikerült!");
}