function calculate(a: number, operation: string, b: number): void {
    let result: number;
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