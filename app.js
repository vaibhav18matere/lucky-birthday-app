const dateOfBirth = document.querySelector("#birthdayDate");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const privacyPolicyBtn = document.querySelector("#privacy-button");
const privacyNote = document.querySelector("#privacy-policy");

function compareValues(sum, luckyNumber) {

    if (Number(!luckyNumber)) {
        return outputBox.innerText = "Please enter your lucky number too"
    } else if (Number(luckyNumber < 0)) {
        return outputBox.innerText = "Please enter positive number"
    }
    else if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday date is lucky 🎂🥳";
    } else {
        outputBox.innerText = "Your birthday date is not so lucky 🙁";
    }
}

function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (dob && sum)
        compareValues(sum, luckyNumber.value)
    else
        outputBox.innerText = "Please enter both the fields !";
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

privacyPolicyBtn.addEventListener("click", () => {
    privacyNote.style.visibility = "hidden";
});