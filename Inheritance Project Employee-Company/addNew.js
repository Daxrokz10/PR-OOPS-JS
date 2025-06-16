class Company{
  constructor(cname,cloc){
    this.comapnyName = cname;
    this.companyLocation = cloc;
  }
}

class Employee extends Company{
  constructor(name, salary, post, manager, company) {
    super();
    this.name = name;
    this.salary = salary;
    this.post = post;
    this.manager = manager;
    this.company = company;
  }
}

let newEmp = document.getElementById("new-emp");
let newComp = document.getElementById("new-comp");
newEmp.addEventListener("click", () => {
  document.getElementById("emp-form").classList.remove("hide");
  document.getElementById("comp-form").classList.add("hide");
  document.getElementById("emp-form").classList.add("active");
  document.getElementById("comp-form").classList.remove("active");
 
});
newComp.addEventListener("click", () => {
  document.getElementById("comp-form").classList.remove("hide");
  document.getElementById("emp-form").classList.add("hide");
  document.getElementById("emp-form").classList.remove("active");
  document.getElementById("comp-form").classList.add("active");
});

let form = document.getElementById("form");
let empForm = document.getElementById("emp-form");
let compForm = document.getElementById("comp-form");
let ename = document.getElementById("ename");
let salary = document.getElementById("salary");
let post = document.getElementById("post");
let manager = document.getElementById("manager");
let company = document.getElementById("company");

let cname = document.getElementById('cname');
let cloc = document.getElementById('location'); // Use correct id 'location'

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let companies = JSON.parse(localStorage.getItem("companies")) || [];

// Handle company form submission
compForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let comp = new Company(cname.value, cloc.value);
  companies.push(comp);
  localStorage.setItem("companies", JSON.stringify(companies));
  compForm.reset();
  alert("Company added successfully!");
  populateCompanyDropdown(); // Update company dropdown after adding
});

// Handle employee form submission
empForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emp = new Employee(
    ename.value,
    parseFloat(salary.value),
    post.value,
    manager.value,
    company.value
  );
  employees.push(emp);
  localStorage.setItem("employees", JSON.stringify(employees));
  empForm.reset();
  alert("Employee added successfully!");
});

// Populate company dropdown in employee form
function populateCompanyDropdown() {
  let companies = JSON.parse(localStorage.getItem("companies")) || [];
  company.innerHTML = '<option value="">Select Company</option>';
  companies.forEach(comp => {
    company.innerHTML += `<option value="${comp.comapnyName}">${comp.comapnyName}</option>`;
  });
}
populateCompanyDropdown();
