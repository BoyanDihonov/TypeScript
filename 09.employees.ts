function generateEmployeeList(employeeNames: string[]): void {
    const employeeList: { name: string, personalNum: number }[] = [];

    employeeNames.forEach(name => {
        const personalNum = name.replace(/\s/g, '').length + 1;
        employeeList.push({ name, personalNum });
    });

    employeeList.forEach(employee => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    });
}

generateEmployeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)

generateEmployeeList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)