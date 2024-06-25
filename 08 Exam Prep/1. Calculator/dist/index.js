function calculate(a, operation, b) {
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            console.log("Грешна операция");
            return;
    }
    console.log(`Result: ${result.toFixed(2)}`);
}
