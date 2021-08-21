const dateOfBirth = document.querySelector("#birthdayDate");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky ❤";
    } else {
        outputBox.innerText = "Your birthday is Not Lucky 😖";
    }
}

function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (dob && sum)
        compareValues(sum, luckyNumber.value)
    else
        outputBox.innerText = "Please enter both the fields🤦‍♂️";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "0");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkBirthdateIsLucky);
