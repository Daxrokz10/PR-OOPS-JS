let empTable = document.querySelector("#emp-table tbody");
let employees = JSON.parse(localStorage.getItem("employees")) || [];
let companies = JSON.parse(localStorage.getItem("companies")) || [];
let company_select = document.getElementById('company');
let search = document.getElementById('search-btn');

// Render all employees initially
renderTable(employees);

// Populate company dropdown
getCompanies();

search.addEventListener('click', () => {
    let filtered = company_select.value
        ? employees.filter(emp => emp.company === company_select.value)
        : employees;
    renderTable(filtered);
});

function getCompanies() {
    company_select.innerHTML = `<option value="">All Companies</option>`;
    companies.forEach((comp) => {
        company_select.innerHTML += `<option value="${comp.comapnyName}">${comp.comapnyName}</option>`;
    });
}

function renderTable(empList) {
    empTable.innerHTML = "";
    if (empList.length === 0) {
        empTable.innerHTML = `<tr><td colspan="8" class="text-center">No employees found.</td></tr>`;
        return;
    }
    empList.forEach((emp, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            <td>${emp.post}</td>
            <td>${emp.manager}</td>
            <td>${emp.company}</td>
            <td>
                <button class="btn btn-sm btn-warning edit-btn" data-index="${index}"><i class="bi bi-pencil"></i> Edit</button>
                <button class="btn btn-sm btn-danger delete-btn" data-index="${index}"><i class="bi bi-trash"></i> Delete</button>
            </td>
        `;
        empTable.appendChild(row);
    });

    // Attach event listeners for edit and delete
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', handleEdit);
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', handleDelete);
    });
}

function handleEdit(e) {
    const idx = e.target.closest('button').getAttribute('data-index');
    const emp = employees[idx];
    // Simple prompt-based edit for demo; replace with modal for production
    let newName = prompt("Edit Name:", emp.name);
    let newSalary = prompt("Edit Salary:", emp.salary);
    let newPost = prompt("Edit Post:", emp.post);
    let newManager = prompt("Edit Manager:", emp.manager);
    let newCompany = prompt("Edit Company:", emp.company);

    if (newName && newSalary && newPost && newManager && newCompany) {
        employees[idx] = {
            ...emp,
            name: newName,
            salary: parseFloat(newSalary),
            post: newPost,
            manager: newManager,
            company: newCompany
        };
        localStorage.setItem("employees", JSON.stringify(employees));
        renderTable(employees);
    }
}

function handleDelete(e) {
    const idx = e.target.closest('button').getAttribute('data-index');
    if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(idx, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        renderTable(employees);
    }
}



