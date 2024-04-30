function printAndSum(start: number, end: number): void {
    let sum: number = 0;
    let numbersString: string = '';

    for (let i: number = start; i <= end; i++) {
        sum += i;
        numbersString += `${i} `;
    }

    numbersString = numbersString.trim();

    console.log(numbersString);
    console.log(`Sum: ${sum}`);
}

//printAndSum(5,10)
//printAndSum(0,26)
//printAndSum(50,60)