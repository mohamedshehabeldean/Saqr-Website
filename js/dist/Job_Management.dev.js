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
var jobs = [];
var jobToEditIndex = null; // عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة

window.onload = function () {
  var jobRows = document.querySelectorAll('#jobBody tr');
  jobRows.forEach(function (row) {
    var id = parseInt(row.children[0].textContent);
    var name = row.children[1].textContent;
    jobs.push({
      id: id,
      name: name
    });
  });
  updateJobTable(); // Ensure the table is updated on load to maintain consistency
}; // Function to add a new job


function addJob() {
  var jobName = document.getElementById('jobInput').value.trim();

  if (!jobName) {
    alert('يرجى إدخال اسم الوظيفة.');
    return;
  }

  var jobIndex = jobs.length + 1; // Always add the next sequence number

  jobs.push({
    id: jobIndex,
    name: jobName
  });
  updateJobTable();
  document.getElementById('jobInput').value = ''; // Clear the input field
} // Function to delete a job and reorder the sequence


function deleteJob(jobId) {
  jobs = jobs.filter(function (job) {
    return job.id !== jobId;
  });
  reorderJobIds(); // Reorder the IDs after deletion

  updateJobTable();
} // Function to edit a job


function editJob(jobId) {
  var job = jobs.find(function (job) {
    return job.id === jobId;
  });
  document.getElementById('jobInput').value = job.name;
  jobToEditIndex = jobId;
  document.getElementById('addJobBtnText').textContent = 'تحديث وظيفة';
} // Function to update an existing job


function updateJob() {
  var jobName = document.getElementById('jobInput').value.trim();

  if (!jobName) {
    alert('يرجى إدخال اسم الوظيفة.');
    return;
  }

  var jobIndex = jobs.findIndex(function (job) {
    return job.id === jobToEditIndex;
  });

  if (jobIndex !== -1) {
    jobs[jobIndex].name = jobName; // Update the job name
  }

  resetForm();
  updateJobTable();
} // Reset form after adding or editing a job


function resetForm() {
  document.getElementById('jobInput').value = '';
  jobToEditIndex = null;
  document.getElementById('addJobBtnText').textContent = 'إضافة وظيفة';
} // Function to reorder job IDs after a deletion


function reorderJobIds() {
  jobs.forEach(function (job, index) {
    job.id = index + 1; // Reassign sequential IDs starting from 1
  });
} // Function to update the job table with the current job data


function updateJobTable() {
  var jobTableBody = document.getElementById('jobBody');
  jobTableBody.innerHTML = ''; // Clear the current table

  jobs.forEach(function (job) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = "\n    <td id=\"job-".concat(job.id, "\">").concat(job.id, "</td>\n    <td id=\"job-name-").concat(job.id, "\">").concat(job.name, "</td>\n    <td>\n        <button class=\"btn btn-danger  button \" onclick=\"deleteJob(").concat(job.id, ")\">\u062D\u0630\u0641</button>\n        <button class=\"btn btn-success  button \" onclick=\"editJob(").concat(job.id, ")\">\u062A\u0639\u062F\u064A\u0644</button>\n    </td>\n");
    jobTableBody.appendChild(newRow);
  });
}