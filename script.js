var inputText = document.querySelector("#usertext");
var outputText = document.querySelector("#translation");
var translateButton = document.querySelector("#btn-translate");

function translate(){
    outputText.innerHTML = "Hello this is banana";
}

translateButton.addEventListener("click", translate)