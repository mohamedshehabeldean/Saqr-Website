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
let nationalities = [];
let nationalityToEditIndex = null;

// عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة
window.onload = function () {
    const nationalityRows = document.querySelectorAll('#nationalityBody tr');
    nationalityRows.forEach(row => {
        const id = parseInt(row.children[0].textContent);
        const name = row.children[1].textContent;
        nationalities.push({ id, name });
    });
    updateNationalityTable(); // Ensure the table is updated on load
};

// Function to add a new nationality
function addNationality() {
    const nationalityName = document.getElementById('nationalityInput').value.trim();
    if (!nationalityName) {
        alert('يرجى إدخال اسم الجنسية.');
        return;
    }

    const nationalityIndex = nationalities.length + 1; // Add the next sequence number
    nationalities.push({ id: nationalityIndex, name: nationalityName });
    updateNationalityTable();
    document.getElementById('nationalityInput').value = ''; // Clear the input field
}

// Function to delete a nationality and reorder the sequence
function deleteNationality(nationalityId) {
    nationalities = nationalities.filter(nationality => nationality.id !== nationalityId);
    reorderNationalityIds(); // Reorder the IDs after deletion
    updateNationalityTable();
}

// Function to edit a nationality
function editNationality(nationalityId) {
    const nationality = nationalities.find(nationality => nationality.id === nationalityId);
    document.getElementById('nationalityInput').value = nationality.name;
    nationalityToEditIndex = nationalityId;
    document.getElementById('addNationalityBtnText').textContent = 'تحديث جنسية';
}

// Function to update an existing nationality
function updateNationality() {
    const nationalityName = document.getElementById('nationalityInput').value.trim();
    if (!nationalityName) {
        alert('يرجى إدخال اسم الجنسية.');
        return;
    }

    const nationalityIndex = nationalities.findIndex(nationality => nationality.id === nationalityToEditIndex);
    if (nationalityIndex !== -1) {
        nationalities[nationalityIndex].name = nationalityName; // Update the nationality name
    }
    resetForm();
    updateNationalityTable();
}

// Reset form after adding or editing a nationality
function resetForm() {
    document.getElementById('nationalityInput').value = '';
    nationalityToEditIndex = null;
    document.getElementById('addNationalityBtnText').textContent = 'إضافة جنسية';
}

// Function to reorder nationality IDs after a deletion
function reorderNationalityIds() {
    nationalities.forEach((nationality, index) => {
        nationality.id = index + 1; // Reassign sequential IDs starting from 1
    });
}

// Function to update the nationality table with the current nationality data
function updateNationalityTable() {
    const nationalityTableBody = document.getElementById('nationalityBody');
    nationalityTableBody.innerHTML = ''; // Clear the current table

    nationalities.forEach(nationality => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
    <td id="nationality-${nationality.id}">${nationality.id}</td>
    <td id="nationality-name-${nationality.id}">${nationality.name}</td>
    <td>
        <button class="btn btn-success button" onclick="editNationality(${nationality.id})">تعديل</button>
        <button class="btn btn-danger button" onclick="deleteNationality(${nationality.id})">حذف</button>
    </td>
`;
        nationalityTableBody.appendChild(newRow);
    });
}
