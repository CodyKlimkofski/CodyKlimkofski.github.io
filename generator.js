function generatePassword() {
    let charList = [];
    let resultString = "";
    if (document.getElementById("lowerCheck").checked == true) {
        charList.push("abcdefghijklmnopqrstuvwxyz");
    } if (document.getElementById("upperCheck").checked == true) {
        charList.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } if (document.getElementById("numsCheck").checked == true) {
        charList.push("1234567890");
    } if (document.getElementById("symbCheck").checked == true) {
        charList.push("!@#$%^&*(),.<>/?`-_");
    }

    for (var i = 0; i < parseInt(document.getElementById("rangeSlider").value); i++) {
        let randomNum = Math.floor(Math.random() * charList.length);
        let randomChar = Math.floor(Math.random() * charList[randomNum].length);
        resultString += charList[randomNum][randomChar];
    }
    document.getElementById("passwordBox").value = resultString;
}

function rangeSliderNum() {
    let rangeValue = document.getElementById("rangeSlider").value;
    document.getElementById("rangeLabel").innerHTML = "I want my password to have: " + rangeValue + " characters";
    let newWidth = rangeValue*11.5;
    document.getElementById("passwordBox").style.width = `${newWidth}px`;
    generatePassword();
}