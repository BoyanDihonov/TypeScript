function biggestHalf(arr:number[]): number[] {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);
    return sortedArray.slice(middleIndex);

}

biggestHalf([4, 7, 2, 5])
biggestHalf([3, 19, 14, 7, 2, 19, 6])