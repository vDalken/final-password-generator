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
    
    password.classList.add('opacity');

    const strengthText = document.getElementById("strength-text");
    switch (counter) {
        case 0:
            resetStrengthBar();
            break;
        case 1:
            resetStrengthBar();
            strengthText.innerText = "TOO WEAK!";
            firstStrengthBar.classList.add('red-background');
            firstStrengthBar.classList.add('border-none');
            break;
        case 2:
            resetStrengthBar();
            strengthText.innerText = "WEAK";
            firstStrengthBar.classList.add('orange-background');
            secondStrengthBar.classList.add('orange-background');
            firstStrengthBar.classList.add('border-none');
            secondStrengthBar.classList.add('border-none');
            break;
        case 3:
            resetStrengthBar();
            strengthText.innerText = "MEDIUM";
            firstStrengthBar.classList.add('yellow-background');
            secondStrengthBar.classList.add('yellow-background');
            thirdStrengthBar.classList.add('yellow-background');
            firstStrengthBar.classList.add('border-none');
            secondStrengthBar.classList.add('border-none');
            thirdStrengthBar.classList.add('border-none');
            break;
        case 4:
            resetStrengthBar();
            strengthText.innerText = "STRONG";
            firstStrengthBar.classList.add('green-background');
            secondStrengthBar.classList.add('green-background');
            thirdStrengthBar.classList.add('green-background');
            fourthStrengthBar.classList.add('green-background');
            firstStrengthBar.classList.add('border-none');
            secondStrengthBar.classList.add('border-none');
            thirdStrengthBar.classList.add('border-none');
            fourthStrengthBar.classList.add('border-none');
            break;
    }

    buttonText.innerText = "";
});

function resetStrengthBar() {
    firstStrengthBar.classList.remove('red-background','orange-background', 'yellow-background','green-background','border-none');
    secondStrengthBar.classList.remove('red-background','orange-background', 'yellow-background','green-background','border-none');
    thirdStrengthBar.classList.remove('red-background','orange-background', 'yellow-background','green-background','border-none');
    fourthStrengthBar.classList.remove('red-background','orange-background', 'yellow-background','green-background','border-none');
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
