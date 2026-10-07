"use strict";

const result = document.querySelector("#pole-result");
const buttons = document.querySelectorAll(".button");

let firstNumber;
let operator;
let secondNumber;
let currentNumber = "";

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        
        if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "*" ||
            button.textContent === "/"
        ) {
            firstNumber = Number(currentNumber.replace("," , "."));
            operator = button.textContent;

            currentNumber = "";

            result.textContent = `${firstNumber} ${operator}`;
        }


        else if (button.textContent === "=") {

            secondNumber = Number(currentNumber.replace("," , "."));

            if (operator === "+") {
                result.textContent = firstNumber + secondNumber;
            }

            else if (operator === "-") {
                result.textContent = firstNumber - secondNumber;
            }

            else if (operator === "*") {
                result.textContent = firstNumber * secondNumber;
            }

            else if (operator === "/" && secondNumber === 0) {
                result.textContent = "Ошибка";
            }

            else if (operator === "/") {
                result.textContent = firstNumber / secondNumber;
            }

           
        }

      else if(button.textContent === "+/-"){
                currentNumber = Number(currentNumber) * (-1);
                result.textContent = currentNumber;
            }

       else if(button.textContent === "<"){
        currentNumber = currentNumber.slice(0, -1);
        result.textContent = currentNumber;
       }

        else if (button.textContent === "C") {
            firstNumber = null;
            operator = null;
            secondNumber = null;
            currentNumber = "";
            result.textContent = "";
        }

        else if (button.textContent === ","){
        currentNumber = currentNumber + button.textContent;
        result.textContent = currentNumber;

        if(!currentNumber.includes(",")){
        currentNumber = currentNumber + ",";
        result.textContent = currentNumber;
        }
 }
        else if(button.textContent === "%"){
             currentNumber = currentNumber / 100;
             result.textContent = currentNumber;
        }

        else {

            currentNumber = currentNumber + button.textContent;

            if (operator) {
                result.textContent =
                    `${firstNumber} ${operator} ${currentNumber}`;
            }



            else {
                result.textContent = currentNumber;
            }
        }
    });
});