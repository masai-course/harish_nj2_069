let genNum = document.getElementById("generate-number");
let d = document.getElementById("number");
let oddEven = document.getElementById("odd-even");

function generateNumber() {
  // generate a random integer(hint : Math.random)
  let randomNum = Math.floor(Math.random(1, 100) * 100);
  d.textContent = randomNum;
  checkOddEven(randomNum);
}

function checkOddEven(num) {
  // logic for even / odd
  if (num % 2 == 0) {
    oddEven.textContent = "Even";
  } else {
    oddEven.textContent = "Odd";
  }
}

window.onload = function () {
  // add event listeners to the button here
  genNum.addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
