class Box<T> {
    constructor(private data: T) {}

    toString(): string {
        return `${this.data} is of type ${typeof this.data}`;
    }
}