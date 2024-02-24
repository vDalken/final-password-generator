const inputRange = document.getElementById("character-range-length");

const copyButton = document.getElementById("copy-button");

const buttonText = document.getElementById("button-text");

const password = document.getElementById("password");

const generateButton = document.getElementById("generate-button");

const characterLength = document.getElementById("character-length");

const firstStrengthBar = document.getElementById("first");

const secondStrengthBar = document.getElementById("second");

const thirdStrengthBar = document.getElementById("third");

const fourthStrengthBar = document.getElementById("fourth");

inputRange.addEventListener("input", () => {
    const value = inputRange.value;
    const line = document.querySelector(".line");
    const min = parseInt(inputRange.min);
    const max = parseInt(inputRange.max);
    const percentage = ((value - min) / (max - min)) * 100;
    line.style.width = `${percentage}%`;

    characterLength.innerText = inputRange.value;
});

copyButton.addEventListener("click", () => {
    buttonText.innerText = "COPIED";
    const text = password.innerText;
    navigator.clipboard.writeText(text);
});

generateButton.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedOnes = [];
    let characterLength = inputRange.value;

    let counter = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedOnes.push(checkbox.value);
            counter++;
        }
    });

    if(counter===0){
        return;
    }

    let createdPassword = "";

    while (characterLength !== 0) {
        const randomIndex = Math.floor(Math.random() * checkedOnes.length);
        createdPassword += getRandomCharacter(checkedOnes[randomIndex]);
        characterLength--;
    }

    password.innerText = createdPassword;
    password.style.opacity = "1";

    const strengthText = document.getElementById("strength-text");
    switch (counter) {
        case 0:
            resetStrengthBar();
            break;
        case 1:
            resetStrengthBar();
            strengthText.innerText = "TOO WEAK!";
            firstStrengthBar.style.backgroundColor = "#f64a4a";
            firstStrengthBar.style.border = "none";
            break;
        case 2:
            resetStrengthBar();
            strengthText.innerText = "WEAK";
            firstStrengthBar.style.backgroundColor = "#fb7c58";
            secondStrengthBar.style.backgroundColor = "#fb7c58";
            firstStrengthBar.style.border = "none";
            secondStrengthBar.style.border = "none";
            break;
        case 3:
            resetStrengthBar();
            strengthText.innerText = "MEDIUM";
            firstStrengthBar.style.backgroundColor = "#f8cd65";
            secondStrengthBar.style.backgroundColor = "#f8cd65";
            thirdStrengthBar.style.backgroundColor = "#f8cd65";
            firstStrengthBar.style.border = "none";
            secondStrengthBar.style.border = "none";
            thirdStrengthBar.style.border = "none";
            break;
        case 4:
            resetStrengthBar();
            strengthText.innerText = "STRONG";
            firstStrengthBar.style.backgroundColor = "#a4ffaf";
            secondStrengthBar.style.backgroundColor = "#a4ffaf";
            thirdStrengthBar.style.backgroundColor = "#a4ffaf";
            fourthStrengthBar.style.backgroundColor = "#a4ffaf";
            firstStrengthBar.style.border = "none";
            secondStrengthBar.style.border = "none";
            thirdStrengthBar.style.border = "none";
            fourthStrengthBar.style.border = "none";
            break;
    }

    buttonText.innerText = "";
});

function resetStrengthBar() {
    firstStrengthBar.style.backgroundColor = "#18171f";
    secondStrengthBar.style.backgroundColor = "#18171f";
    thirdStrengthBar.style.backgroundColor = "#18171f";
    fourthStrengthBar.style.backgroundColor = "#18171f";
    firstStrengthBar.style.border = "1px solid var(--white)";
    secondStrengthBar.style.border = "1px solid var(--white)";
    thirdStrengthBar.style.border = "1px solid var(--white)";
    fourthStrengthBar.style.border = "1px solid var(--white)";
}

function getRandomCharacter(type) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+{}|:\"<>?-=[];',./";

    switch (type) {
        case "uppercase":
            const randomUppercaseIndex = Math.floor(
                Math.random() * uppercase.length
            );
            return uppercase.charAt(randomUppercaseIndex);
        case "lowercase":
            const randomLowercaseIndex = Math.floor(
                Math.random() * lowercase.length
            );
            return lowercase.charAt(randomLowercaseIndex);
        case "number":
            const randomNumberIndex = Math.floor(Math.random() * number.length);
            return number.charAt(randomNumberIndex);
        case "symbol":
            const randomSymbolIndex = Math.floor(Math.random() * symbol.length);
            return symbol.charAt(randomSymbolIndex);
    }
}
