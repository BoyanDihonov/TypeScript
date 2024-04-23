class BankAccount {
    private static accountIdCounter: number = 1;
    private _id: number;
    private _balance: number;
    private static interestRate: number = 0.02;

    constructor() {
        this._id = BankAccount.accountIdCounter++;
        this._balance = 0;
    }

    static setInterestRate(rate: number): void {
        BankAccount.interestRate = rate;
    }

    static getInterestRate(): number {
        return BankAccount.interestRate;
    }

    deposit(amount: number): void {
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }

    calculateInterest(years: number): number {
        return this._balance * BankAccount.interestRate * years;
    }
}

// Test client
const accounts: BankAccount[] = [];

function executeCommand(command: string): void {
    const args = command.split(" ");
    const operation = args.shift();

    switch (operation) {
        case "Create":
            accounts.push(new BankAccount());
            console.log(`Account ID${accounts[accounts.length - 1]._id} created`);
            break;
        case "Deposit":
            const accountId = parseInt(args[0]);
            if (accountId <= accounts.length) {
                const amount = parseInt(args[1]);
                accounts[accountId - 1].deposit(amount);
                console.log(`Deposited ${amount} to ID${accountId}`);
            } else {
                console.log(`Account ID${accountId} does not exist.`);
            }
            break;
        case "SetInterest":
            const interestRate = parseFloat(args[0]);
            BankAccount.setInterestRate(interestRate);
            console.log(`Interest rate set to ${interestRate}`);
            break;
        case "GetInterest":
            const accountId2 = parseInt(args[0]);
            const years = parseInt(args[1]);
            if (accountId2 <= accounts.length) {
                const interest = accounts[accountId2 - 1].calculateInterest(years);
                console.log(interest.toFixed(2));
            } else {
                console.log(`Account ID${accountId2} does not exist.`);
            }
            break;
        case "End":
            console.log("Program ended.");
            process.exit(0);
            break;
        default:
            console.log("Invalid command.");
    }
}


// Test commands
executeCommand("Create");
executeCommand("Deposit 1 20");
executeCommand("GetInterest 1 10");
executeCommand("End");
