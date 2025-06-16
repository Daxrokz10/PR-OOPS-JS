class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    printBasicInfo() {
        console.log("Student Information:");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}

class StudentDetails extends Student {
    constructor(id, name, rollno, subject, grade) {
        super(id, name);
        this.rollno = rollno;
        this.subject = subject;
        this.grade = grade;
    }
    printFullInfo() {
        super.printBasicInfo();
        console.log(`Roll No: ${this.rollno}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Grade: ${this.grade}`);
        console.log("-----------------------------");
    }
}

// Updated data and class usage
const students = [
    new StudentDetails('11', 'Aanya', '201', 'Mathematics', 'A'),
    new StudentDetails('12', 'Kabir', '202', 'History', 'B+'),
    new StudentDetails('13', 'Meera', '203', 'Physics', 'A-')
];

students.forEach(s => s.printFullInfo());