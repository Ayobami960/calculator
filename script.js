function add(){

    let num1 = Number(document.getElementById("num1").value); // document it refor to web site

    let num2 = Number(document.getElementById("num2").value); // = value what ever we input     // number it convert the text to number

    let answer = num1 + num2;

    document.getElementById("result").innerHTML =
    "Answer: " + answer;

}

function subtract(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let answer = num1 - num2;

    document.getElementById("result").innerHTML =
    "Answer: " + answer;

}

function multiply(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let answer = num1 * num2;

    document.getElementById("result").innerHTML =
    "Answer: " + answer;

}

function divide(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    if(num2 == 0){

        document.getElementById("result").innerHTML =
        "Cannot divide by zero";

        return;

    }

    let answer = num1 / num2;

    document.getElementById("result").innerHTML =
    "Answer: " + answer;

}