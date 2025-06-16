class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getEmp() {
        console.log("Employee Details:");
        console.log(`Employee Id: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
    }
}

class Details extends Employee {
    constructor(id, name, department, salary) {
        super(id, name);
        this.department = department;
        this.salary = salary;
    }
    getDetails() {
        super.getEmp();
        console.log(`Employee Department: ${this.department}`);
        console.log(`Employee Salary: ₹${this.salary}`);
        console.log("-----------------------------");
    }
}

const employees = [
    new Details('101', 'Aarav', 'Development', '70000'),
    new Details('102', 'Priya', 'Design', '65000'),
    new Details('103', 'Rohan', 'QA', '60000')
];

employees.forEach(emp => emp.getDetails());