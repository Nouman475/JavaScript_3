let userInput = document.getElementById("input");
let outputElement = document.getElementById("result");
let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupra","Kashmir"];

function simpleAlert(){
    alert("Hi, I am Nouman")
}

function printName() {
  const name = userInput.value;
  if (name === "") {
    outputElement.innerHTML = "<h3>Please enter your name first!</h3>";
  } else {
    outputElement.innerHTML = `<h3>Your Name is ${name}</h3>`;
  }
  userInput.value = ""
}

function printCities(){
    for(idx=0;idx<cities.length;idx++){
    outputElement.innerHTML += idx+1 + ")"+ cities[idx] + "<br>"
  }  
}

function addCity() {
  outputElement.textContent = ""; 
  const userInputValue = userInput.value.trim();

  if (userInputValue === "") {
    outputElement.innerHTML = "<h3>Please enter a city name!</h3>";
  } 
  else if (cities.includes(userInputValue)) {
    outputElement.innerHTML = `<h3>${userInputValue} already exists in the list!</h3>`;
  } 
  else {
    cities.push(userInputValue);
    updateCityList();
  }
  userInput.value = "";
  function updateCityList() {
    for(idx=0;idx<cities.length;idx++){
      outputElement.innerHTML += idx+1 + ")"+ cities[idx] + "<br>"
    } 
  }
}

function table() {
  outputElement.textContent = "";
  const tableNumber = userInput.value.trim();
  if (isNaN(tableNumber) || tableNumber === "") {
    outputElement.textContent = "Please enter a valid number!";
    return; 
  }
  const number = parseInt(tableNumber);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    const product = number * i;
    output += `${number} * ${i} = ${product}<br>`;
  }
  outputElement.innerHTML = output;
  userInput.value = ""
}


function clear0(){
  userInput.value = ""
}
function clear1(){
  outputElement.innerHTML = ""
}