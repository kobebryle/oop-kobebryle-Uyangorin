class Person {
    public firstName: string = ''
    public lastName: string = ''

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Employee extends Person {
    private salary: number

    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName)
        this.salary = salary
    }

    public displaySalary(): void {
        console.log(`Salary: ${this.salary} PHP`)
    }
}

class Student extends Person {
    private score: number

    constructor(firstName: string, lastName: string, score: number) {
        super(firstName, lastName)
        this.score = score
    }

    public getPercentageMark(): number {
        return (this.score / 100) * 100
    }
}
const employee = new Employee('Ben', 'Dover', 42069)
employee.displaySalary()

const student = new Student('Dagul', 'Batumbakal', 75)
console.log("Score:", student.getPercentageMark(),`%`)