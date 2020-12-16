// reference to the "button id" in js
var btnTranslate = document.querySelector("#btn-translate");

// reference to our html element with id = #txt-input
var txtInput = document.querySelector("#txt-input");

// refrence to element with id output-box
var outputBox = document.querySelector("#output-box");
outputBox.innerText = "Bananaaaaaaa....";  // shows by default

// minion url
var serverURL = "https://api.funtranslations.com/translate/minion.json";

// convert into desired url
function getTranslationURL(text) {
  return serverURL + '?text=' + text;
}

// error handling function
function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong with server\nPlease try again after some time...")
}

// function to get the desired data
function doFetch(inputText) {
  fetch(getTranslationURL(inputText)) // promise me when you get the data
    .then(response => response.json()) //.then( do something by using arrow function syntax ) 
    .then(json => {
        var translatedText = json.contents.translated; //store the desired data from the json
        outputBox.innerText = translatedText; // and put it as Text within outputBox 
      }
    ) 
    .catch(errorHandler) 
}

// callback function to perform desired action
function clickHandler() {
  var inputText = txtInput.value; // storing txt value from txt-input box
  doFetch(inputText);
}

// when click event happens perform the callback function(clickHandler)
btnTranslate.addEventListener(
  "click",
  clickHandler
)

