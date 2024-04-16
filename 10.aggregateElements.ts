function aggregateElements(elements: number[]): void {
    const sumResult = elements.reduce((acc, curr) => acc + curr, 0);
    const sumInverseResult = elements.reduce((acc, curr) => acc + (1 / curr), 0);
    const concatenateResult = elements.map(String).join('');
    console.log(sumResult);
    console.log(sumInverseResult);
    console.log(concatenateResult);
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])