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
}); // card 1
// Find the div element by its id

var memberDiv = document.getElementById("memberDiv"); // Add a click event listener to the div

memberDiv.addEventListener("click", function () {
  // Redirect to the index page
  window.location.href = "personal_page_for_person.html";
}); // card 2
// Find the div element by its id

var memberDiv1 = document.getElementById("memberDiv1"); // Add a click event listener to the div

memberDiv1.addEventListener("click", function () {
  // Redirect to the index page
  window.location.href = "personal_page_for_person.html";
}); // card 3
// Find the div element by its id

var memberDiv2 = document.getElementById("memberDiv2"); // Add a click event listener to the div

memberDiv2.addEventListener("click", function () {
  // Redirect to the index page
  window.location.href = "personal_page_for_person.html";
});