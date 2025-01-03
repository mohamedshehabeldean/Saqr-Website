"use strict";

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
  }; // Set dynamic content for profile icon popover

  $('#profileIcon').attr('data-bs-content', '<strong>الأسم:</strong> ' + profileUserData.username + '<br><strong>البريد الاكتروني:</strong> ' + profileUserData.email); // Initialize popover (Bootstrap 5 syntax)

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
var nationalities = [];
var nationalityToEditIndex = null; // عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة

window.onload = function () {
  var nationalityRows = document.querySelectorAll('#nationalityBody tr');
  nationalityRows.forEach(function (row) {
    var id = parseInt(row.children[0].textContent);
    var name = row.children[1].textContent;
    nationalities.push({
      id: id,
      name: name
    });
  });
  updateNationalityTable(); // Ensure the table is updated on load
}; // Function to add a new nationality


function addNationality() {
  var nationalityName = document.getElementById('nationalityInput').value.trim();

  if (!nationalityName) {
    alert('يرجى إدخال اسم الجنسية.');
    return;
  }

  var nationalityIndex = nationalities.length + 1; // Add the next sequence number

  nationalities.push({
    id: nationalityIndex,
    name: nationalityName
  });
  updateNationalityTable();
  document.getElementById('nationalityInput').value = ''; // Clear the input field
} // Function to delete a nationality and reorder the sequence


function deleteNationality(nationalityId) {
  nationalities = nationalities.filter(function (nationality) {
    return nationality.id !== nationalityId;
  });
  reorderNationalityIds(); // Reorder the IDs after deletion

  updateNationalityTable();
} // Function to edit a nationality


function editNationality(nationalityId) {
  var nationality = nationalities.find(function (nationality) {
    return nationality.id === nationalityId;
  });
  document.getElementById('nationalityInput').value = nationality.name;
  nationalityToEditIndex = nationalityId;
  document.getElementById('addNationalityBtnText').textContent = 'تحديث جنسية';
} // Function to update an existing nationality


function updateNationality() {
  var nationalityName = document.getElementById('nationalityInput').value.trim();

  if (!nationalityName) {
    alert('يرجى إدخال اسم الجنسية.');
    return;
  }

  var nationalityIndex = nationalities.findIndex(function (nationality) {
    return nationality.id === nationalityToEditIndex;
  });

  if (nationalityIndex !== -1) {
    nationalities[nationalityIndex].name = nationalityName; // Update the nationality name
  }

  resetForm();
  updateNationalityTable();
} // Reset form after adding or editing a nationality


function resetForm() {
  document.getElementById('nationalityInput').value = '';
  nationalityToEditIndex = null;
  document.getElementById('addNationalityBtnText').textContent = 'إضافة جنسية';
} // Function to reorder nationality IDs after a deletion


function reorderNationalityIds() {
  nationalities.forEach(function (nationality, index) {
    nationality.id = index + 1; // Reassign sequential IDs starting from 1
  });
} // Function to update the nationality table with the current nationality data


function updateNationalityTable() {
  var nationalityTableBody = document.getElementById('nationalityBody');
  nationalityTableBody.innerHTML = ''; // Clear the current table

  nationalities.forEach(function (nationality) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = "\n    <td id=\"nationality-".concat(nationality.id, "\">").concat(nationality.id, "</td>\n    <td id=\"nationality-name-").concat(nationality.id, "\">").concat(nationality.name, "</td>\n    <td>\n        <button class=\"btn btn-success button\" onclick=\"editNationality(").concat(nationality.id, ")\">\u062A\u0639\u062F\u064A\u0644</button>\n        <button class=\"btn btn-danger button\" onclick=\"deleteNationality(").concat(nationality.id, ")\">\u062D\u0630\u0641</button>\n    </td>\n");
    nationalityTableBody.appendChild(newRow);
  });
}