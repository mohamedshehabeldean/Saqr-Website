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

let places = [];
let placeToEditIndex = null;

// عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة
window.onload = function () {
    const placeRows = document.querySelectorAll('#placeBody tr');
    placeRows.forEach(row => {
        const id = parseInt(row.children[0].textContent);
        const name = row.children[1].textContent;
        places.push({ id, name });
    });
    updatePlaceTable(); // Ensure the table is updated on load
};

// Function to add a new place
function addPlace() {
    const placeName = document.getElementById('placeInput').value.trim();
    if (!placeName) {
        alert('يرجى إدخال اسم المكان.');
        return;
    }

    const placeIndex = places.length + 1; // Add the next sequence number
    places.push({ id: placeIndex, name: placeName });
    updatePlaceTable();
    document.getElementById('placeInput').value = ''; // Clear the input field
}

// Function to delete a place and reorder the sequence
function deletePlace(placeId) {
    places = places.filter(place => place.id !== placeId);
    reorderPlaceIds(); // Reorder the IDs after deletion
    updatePlaceTable();
}

// Function to edit a place
function editPlace(placeId) {
    const place = places.find(place => place.id === placeId);
    document.getElementById('placeInput').value = place.name;
    placeToEditIndex = placeId;
    document.getElementById('addPlaceBtnText').textContent = 'تحديث مكان';
}

// Function to update an existing place
function updatePlace() {
    const placeName = document.getElementById('placeInput').value.trim();
    if (!placeName) {
        alert('يرجى إدخال اسم المكان.');
        return;
    }

    const placeIndex = places.findIndex(place => place.id === placeToEditIndex);
    if (placeIndex !== -1) {
        places[placeIndex].name = placeName; // Update the place name
    }
    resetForm();
    updatePlaceTable();
}

// Reset form after adding or editing a place
function resetForm() {
    document.getElementById('placeInput').value = '';
    placeToEditIndex = null;
    document.getElementById('addPlaceBtnText').textContent = 'إضافة مكان';
}

// Function to reorder place IDs after a deletion
function reorderPlaceIds() {
    places.forEach((place, index) => {
        place.id = index + 1; // Reassign sequential IDs starting from 1
    });
}

// Function to update the place table with the current place data
function updatePlaceTable() {
    const placeTableBody = document.getElementById('placeBody');
    placeTableBody.innerHTML = ''; // Clear the current table

    places.forEach(place => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
    <td id="place-${place.id}">${place.id}</td>
    <td id="place-name-${place.id}">${place.name}</td>
    <td>
        <button class="btn btn-danger button" onclick="deletePlace(${place.id})">حذف</button>
        <button class="btn btn-success button" onclick="editPlace(${place.id})">تعديل</button>
    </td>
`;
        placeTableBody.appendChild(newRow);
    });
}
