function sumOfNumbersNToM(N: string, M: string): void {
    const n: number = parseInt(N);
    const m: number = parseInt(M);
    
    let sum: number = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    
    console.log("The sum of numbers from " + n + " to " + m + " is: " + sum);
}

sumOfNumbersNToM('1','5')
sumOfNumbersNToM('-8','20')