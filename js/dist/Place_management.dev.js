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
var places = [];
var placeToEditIndex = null; // عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة

window.onload = function () {
  var placeRows = document.querySelectorAll('#placeBody tr');
  placeRows.forEach(function (row) {
    var id = parseInt(row.children[0].textContent);
    var name = row.children[1].textContent;
    places.push({
      id: id,
      name: name
    });
  });
  updatePlaceTable(); // Ensure the table is updated on load
}; // Function to add a new place


function addPlace() {
  var placeName = document.getElementById('placeInput').value.trim();

  if (!placeName) {
    alert('يرجى إدخال اسم المكان.');
    return;
  }

  var placeIndex = places.length + 1; // Add the next sequence number

  places.push({
    id: placeIndex,
    name: placeName
  });
  updatePlaceTable();
  document.getElementById('placeInput').value = ''; // Clear the input field
} // Function to delete a place and reorder the sequence


function deletePlace(placeId) {
  places = places.filter(function (place) {
    return place.id !== placeId;
  });
  reorderPlaceIds(); // Reorder the IDs after deletion

  updatePlaceTable();
} // Function to edit a place


function editPlace(placeId) {
  var place = places.find(function (place) {
    return place.id === placeId;
  });
  document.getElementById('placeInput').value = place.name;
  placeToEditIndex = placeId;
  document.getElementById('addPlaceBtnText').textContent = 'تحديث مكان';
} // Function to update an existing place


function updatePlace() {
  var placeName = document.getElementById('placeInput').value.trim();

  if (!placeName) {
    alert('يرجى إدخال اسم المكان.');
    return;
  }

  var placeIndex = places.findIndex(function (place) {
    return place.id === placeToEditIndex;
  });

  if (placeIndex !== -1) {
    places[placeIndex].name = placeName; // Update the place name
  }

  resetForm();
  updatePlaceTable();
} // Reset form after adding or editing a place


function resetForm() {
  document.getElementById('placeInput').value = '';
  placeToEditIndex = null;
  document.getElementById('addPlaceBtnText').textContent = 'إضافة مكان';
} // Function to reorder place IDs after a deletion


function reorderPlaceIds() {
  places.forEach(function (place, index) {
    place.id = index + 1; // Reassign sequential IDs starting from 1
  });
} // Function to update the place table with the current place data


function updatePlaceTable() {
  var placeTableBody = document.getElementById('placeBody');
  placeTableBody.innerHTML = ''; // Clear the current table

  places.forEach(function (place) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = "\n    <td id=\"place-".concat(place.id, "\">").concat(place.id, "</td>\n    <td id=\"place-name-").concat(place.id, "\">").concat(place.name, "</td>\n    <td>\n        <button class=\"btn btn-danger button\" onclick=\"deletePlace(").concat(place.id, ")\">\u062D\u0630\u0641</button>\n        <button class=\"btn btn-success button\" onclick=\"editPlace(").concat(place.id, ")\">\u062A\u0639\u062F\u064A\u0644</button>\n    </td>\n");
    placeTableBody.appendChild(newRow);
  });
}