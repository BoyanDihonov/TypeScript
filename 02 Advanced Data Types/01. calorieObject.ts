function createCalorieObject(input: string[]): { [key: string]: number } {
    const calorieObject: { [key: string]: number } = {}

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i]
        const calories = Number(input[i + 1]);
        calorieObject[food] = calories
    }
    return calorieObject
}

createCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
createCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])