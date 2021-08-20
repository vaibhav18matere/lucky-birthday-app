console.log("It's working!")

const dateOfBirth = document.querySelector("#birthdayDate");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

function compareValues(sum, luckyNumber) {
    console.log(sum, luckyNumber);
}

function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value);
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
