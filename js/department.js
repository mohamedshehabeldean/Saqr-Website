function redirectTostaffmanagement() {
    window.location.href = 'Staff_Management.html';
}
function redirectTonationality() {
    window.location.href = 'Nationality_management.html';
}
function redirectTojob() {
    window.location.href = 'Job_Management.html';
}
function redirectToplace() {
    window.location.href = 'Place_management.html';
}
function redirectToreviewcomplaints() {
    window.location.href = 'Review_complaints.html';
}
function redirectToadvances() {
    window.location.href = 'advances.html';
}
function redirectToanalysis() {
    window.location.href = 'Analysis.html';
}
function redirectTodepartment() {
    window.location.href = 'department.html';
}










$(document).ready(function () {
    var profileUserData = {
        username: "user",
        email: "user@gmail.com"
    };

    // Set dynamic content for profile icon popover
    $('#profileIcon').attr('data-bs-content', '<strong>الأسم:</strong> ' + profileUserData.username + '<br><strong>البريد الاكتروني:</strong> ' + profileUserData.email);

    // Initialize popover (Bootstrap 5 syntax)
    var popoverTrigger = new bootstrap.Popover(document.getElementById('profileIcon'), {
        html: true,
        placement: 'bottom',
        trigger: 'hover'
    });
});

/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
        'overflow': 'visible'
    });
});


let departments = [];
let departmentToEditIndex = null;

// عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة
window.onload = function () {
    const departmentRows = document.querySelectorAll('#departmentBody tr');
    departmentRows.forEach(row => {
        const id = parseInt(row.children[0].textContent);
        const name = row.children[1].textContent;
        departments.push({ id, name });
    });
    updateDepartmentTable(); // Ensure table is updated on load
};

// Function to add a new department
function addDepartment() {
    const departmentName = document.getElementById('departmentInput').value.trim();
    if (!departmentName) {
        alert('يرجى إدخال اسم القسم.');
        return;
    }

    const departmentIndex = departments.length + 1; // Add the next sequence number
    departments.push({ id: departmentIndex, name: departmentName });
    updateDepartmentTable();
    document.getElementById('departmentInput').value = ''; // Clear the input field
}

// Function to delete a department and reorder the sequence
function deleteDepartment(departmentId) {
    departments = departments.filter(department => department.id !== departmentId);
    reorderDepartmentIds(); // Reorder the IDs after deletion
    updateDepartmentTable();
}

// Function to edit a department
function editDepartment(departmentId) {
    const department = departments.find(department => department.id === departmentId);
    document.getElementById('departmentInput').value = department.name;
    departmentToEditIndex = departmentId;
    document.getElementById('addDepartmentBtnText').textContent = 'تحديث القسم';
}

// Function to update an existing department
function updateDepartment() {
    const departmentName = document.getElementById('departmentInput').value.trim();
    if (!departmentName) {
        alert('يرجى إدخال اسم القسم.');
        return;
    }

    const departmentIndex = departments.findIndex(department => department.id === departmentToEditIndex);
    if (departmentIndex !== -1) {
        departments[departmentIndex].name = departmentName; // Update the department name
    }
    resetForm();
    updateDepartmentTable();
}

// Reset form after adding or editing a department
function resetForm() {
    document.getElementById('departmentInput').value = '';
    departmentToEditIndex = null;
    document.getElementById('addDepartmentBtnText').textContent = 'إضافة القسم';
}

// Function to reorder department IDs after a deletion
function reorderDepartmentIds() {
    departments.forEach((department, index) => {
        department.id = index + 1; // Reassign sequential IDs starting from 1
    });
}

// Function to update the department table with the current department data
function updateDepartmentTable() {
    const departmentTableBody = document.getElementById('departmentBody');
    departmentTableBody.innerHTML = ''; // Clear the current table

    departments.forEach(department => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
    <td id="department-${department.id}">${department.id}</td>
    <td id="department-name-${department.id}">${department.name}</td>
    <td>
        <button class="btn btn-danger button" onclick="deleteDepartment(${department.id})">حذف</button>
        <button class="btn btn-success button" onclick="editDepartment(${department.id})">تعديل</button>
    </td>
`;
        departmentTableBody.appendChild(newRow);
    });
}