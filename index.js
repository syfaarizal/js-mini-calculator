let continueCalc = true;

while (continueCalc) {
    const num1 = prompt("Enter first number");
    const num2 = prompt("Enter second number");
    const operator = prompt("Enter operator (+, -, *, /)");

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        console.log("❌ Input is not a valid number!");
    } else {

        function calculate(num1, num2, operator) {
            switch (operator) {
                case "+": return num1 + num2;
                case "-": return num1 - num2;
                case "*": return num1 * num2;
                case "/": return num2 === 0 ? "⚠️ Error: division by zero" : num1 / num2;
                default: return "❌ Operator not recognized. Please use +, -, *, or /.";
            }
        }

        const result = calculate(number1, number2, operator);

        if (typeof result === "string") {
            console.log(result);
        } else {
            console.log(`📊 The result of ${num1} ${operator} ${num2} is ${result}`);
        }
    }

    continueCalc = confirm("Want to calculate again?");
}
          