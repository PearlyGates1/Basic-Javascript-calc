function calculator() {    
    let operator = prompt("Enter operator(e.g + - / *):");
    let FirstNumber = parseFloat(prompt("Enter first number: "));
    let SecondNumber = parseFloat(prompt("Enter second number: "));

    let result = null;
    if (isNaN(FirstNumber) || isNaN(SecondNumber)) {
        alert("Invalid Input")
        calculator();
    }

    else if (operator == '+') {
        result = FirstNumber + SecondNumber;
    }
    else if (operator == '-') {
        result = FirstNumber - SecondNumber;
    }
    else if (operator == '/') {
        result = FirstNumber / SecondNumber;
    }
    else if (operator == '*') {
        result = FirstNumber * SecondNumber;
    }

    alert('Result is ' + result);
    
}
calculator();


