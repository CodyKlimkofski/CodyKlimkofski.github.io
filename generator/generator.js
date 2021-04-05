function generatePassword() {
    var charList = [];
    var resultString = "";
    if (document.getElementById("lowerCheck").checked) {
        charList.push("abcdefghijklmnopqrstuvwxyz");
    } if (document.getElementById("upperCheck").checked) {
        charList.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } if (document.getElementById("numsCheck").checked) {
        charList.push("1234567890");
    } if (document.getElementById("symbCheck").checked) {
        charList.push("!@#$%^&*(),.<>/?`-_");
    }

    if (charList.length > 0) {
        for (var i = 0; i < parseInt(document.getElementById("rangeSlider").value); i++) {
            var randomNum = Math.floor(Math.random() * charList.length);
            var randomChar = Math.floor(Math.random() * charList[randomNum].length);
            resultString += charList[randomNum][randomChar];
        }
    }    

    document.getElementById("passwordBox").value = resultString;
}

function rangeSliderNum() {
    var rangeValue = document.getElementById("rangeSlider").value;
    document.getElementById("rangeLabel").innerHTML = "I want my password to have: " + rangeValue + " characters";
    var newWidth = rangeValue*11.5;
    document.getElementById("passwordBox").style.width = `${newWidth}px`;
    generatePassword();
}