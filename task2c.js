function calculate() {
    // Get the values of the input fields
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    // Calculate the sum
    const sum = num1 + num2;
    
    // Display the result
    document.getElementById('result').textContent = `Result: ${sum}`;
}
