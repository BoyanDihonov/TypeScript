function printAndSum(start, end) {
    let sum = 0;
    let numbersString = '';
    for (let i = start; i <= end; i++) {
        sum += i;
        numbersString += `${i} `;
    }
    numbersString = numbersString.trim();
    console.log(numbersString);
    console.log(`Sum: ${sum}`);
}
// printAndSum(5,10)
// printAndSum(0,26)
// printAndSum(50,60)
