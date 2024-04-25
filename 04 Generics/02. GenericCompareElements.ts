class ArrayComparer<T> {
    constructor(private array: T[]) {}

    compare(comparator: T): number {
        let count = 0;
        this.array.forEach((element) => {
            if (element === comparator) {
                count++;
            }
        });
        return count;
    }
}