abstract class CreateAccount<T, U> {
    bankName: T;
    bankID: U;

    constructor(bankName: T, bankID: U) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
    readonly ownerName: string;
    money: number = 0;
    recentTransactions: { [key: string]: number } = {};

    constructor(ownerName: string, bankName: T, bankID: U) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.money += amount;
    }

    expense(amount: number, expenseType: string): void {
        if (this.money >= amount) {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        } else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }

    showDetails(): string {
        let totalMoneySpentOnExpenses = 0;
        for (const key in this.recentTransactions) {
            totalMoneySpentOnExpenses += this.recentTransactions[key];
        }
        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
}

