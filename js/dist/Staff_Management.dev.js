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
}); // function to make rest disabled if hedor=تواجد او غياب او مأمورية

function toggleInput(select) {
  var inputBack = document.querySelector('input[name="back"]'); // Back input

  var inputRest = document.querySelector('input[name="rest"]'); // Rest input

  var inputAbsence = document.querySelector('input[name="absence"]'); // Absence input
  // Disable or enable inputs based on select value

  if (select.value === 'ex' || select.value === 'mam') {
    inputBack.disabled = true; // Disable 'back' input

    inputRest.disabled = true; // Disable 'rest' input

    inputAbsence.disabled = true; // Disable 'absence' input
  } else if (select.value === 'abs') {
    inputBack.disabled = true; // Keep 'back' input disabled

    inputRest.disabled = true; // Keep 'rest' input disabled

    inputAbsence.disabled = false; // Enable 'absence' input
  } else if (select.value === 're') {
    inputBack.disabled = false; // Keep 'back' input disabled
  } else {
    // Enable all inputs if a different option is selected
    inputBack.disabled = false;
    inputRest.disabled = false;
    inputAbsence.disabled = false;
  }
} // show button تعديل after click on each button in the table


document.addEventListener('DOMContentLoaded', function () {
  var up_button = document.getElementById('up_button'); // Gets the single element with the ID 'up_button'

  var uups = document.getElementsByClassName('upp'); // Gets all elements with the class 'upp'
  // Add event listeners to each 'upp' button

  for (var i = 0; i < uups.length; i++) {
    uups[i].onclick = function () {
      console.log("Update button clicked"); // Show the up_button

      up_button.classList.remove('none');
      up_button.classList.add('block');
    };
  } // Add event listener to the 'up_button'


  up_button.onclick = function (event) {
    event.preventDefault(); // Prevent default action if necessary

    location.reload();
    up_button.classList.add('none'); // Hide the up_button
  };
}); // ******************************
// Function to handle the edit button click
// Function to handle the edit button click

document.querySelectorAll('.edit-btn').forEach(function (button) {
  button.addEventListener('click', function (e) {
    // Find the closest row and extract its data
    var row = e.target.closest('tr');
    var name = row.cells[1].textContent.trim();
    var job = row.cells[2].textContent.trim();
    var attendance = row.cells[3].textContent.trim();
    var location = row.cells[4].textContent.trim();
    var absenceDays = row.cells[5].textContent.trim();
    var restDays = row.cells[6].textContent.trim();
    var backDate = row.cells[7].textContent.trim(); // Extract back date

    var shift = row.cells[8].textContent.trim(); // Assuming shift is in the 9th cell

    var department = row.cells[9].textContent.trim(); // Extract department
    // Populate form fields

    document.getElementById('name').value = name;
    document.getElementById('attendance').value = mapAttendance(attendance);
    document.getElementById('location').value = mapLocation(location);
    document.getElementById('job').value = mapJob(job);
    document.querySelector('input[name="absence"]').value = absenceDays;
    document.querySelector('input[name="rest"]').value = restDays; // Set the back date (ensure format is compatible)

    var formattedDate = formatDate(backDate); // Format the date if necessary

    document.querySelector('input[name="back"]').value = formattedDate; // Set the back date input
    // Set the shift value

    document.querySelector('select[name="sheft"]').value = mapShift(shift); // Set the department value

    document.querySelector('select[name="department"]').value = mapDepartment(department); // Assuming you have a select for department
    // Call toggleInput to set the correct state for the inputs

    toggleInput(document.getElementById('attendance')); // Update inputs based on attendance value
    // Scroll to the form for user visibility

    document.querySelector('.row').scrollIntoView({
      behavior: 'smooth'
    });
  });
}); // Function to handle the delete button click

document.querySelectorAll('.btn-danger').forEach(function (button) {
  button.addEventListener('click', function (e) {
    var row = e.target.closest('tr');
    row.remove(); // Remove the entire row
    // Reorder the sequence after row deletion

    reorderSequence();
  });
}); // Function to reorder the sequence in the # column

function reorderSequence() {
  var rows = document.querySelectorAll('tbody tr');
  rows.forEach(function (row, index) {
    row.cells[0].textContent = index + 1; // Update the sequence column
  });
} // Function to format the date to YYYY-MM-DD for input[type=date]


function formatDate(dateString) {
  var parts = dateString.split('/');

  if (parts.length === 3) {
    return "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]); // Convert to YYYY-MM-DD
  }

  return '';
} // Function to map shift text to select value


function mapShift(shift) {
  switch (shift) {
    case 'صباحي':
      return '1';

    case 'مسائى':
      return '2';

    default:
      return '';
  }
} // Function to map department text to select value


function mapDepartment(department) {
  switch (department) {
    case 'مقر الشركة':
      return '1';

    case 'الشئون الإدارية':
      return '2';

    case 'مديري ومشرفي التشغيل':
      return '3';

    case 'أفراد التشغيل':
      return '4';

    case 'مديرى الأمن':
      return '5';

    case 'مشرفى الأمن':
      return '6';

    case 'أفراد الأمن':
      return '7';

    default:
      return '';
  }
} // Helper function to map attendance text to select value


function mapAttendance(attendance) {
  switch (attendance) {
    case 'تواجد':
      return 'ex';

    case 'غياب':
      return 'abs';

    case 'مأمورية':
      return 'mam';

    case 'أجازة':
      return 're';

    default:
      return '';
  }
} // Helper function to map location text to select value


function mapLocation(location) {
  switch (location) {
    case 'الشركة':
      return '1';

    case 'اللوتس':
      return '2';

    case 'مجرى العيون':
      return '3';

    default:
      return '';
  }
} // Helper function to map job text to select value


function mapJob(job) {
  switch (job) {
    case 'محاسب':
      return '1';

    case 'مهندس':
      return '2';

    case 'HR':
      return '3';

    case 'سوشيال ميديا':
      return '4';

    default:
      return '';
  }
}
/* 1. Proloder */


$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});
var rowsPerPage = 10; // Number of rows per page

var currentPage = 1; // Current page number

var employeeTable = document.getElementById('employeeTable');
var pagination = document.getElementById('pagination');
var totalRows = employeeTable.rows.length; // Total number of rows

var totalPages = Math.ceil(totalRows / rowsPerPage); // Total number of pages

function displayPage(page) {
  var start = (page - 1) * rowsPerPage;
  var end = start + rowsPerPage; // Hide all rows

  for (var i = 0; i < totalRows; i++) {
    employeeTable.rows[i].style.display = 'none';
  } // Show rows for the current page


  for (var _i = start; _i < end && _i < totalRows; _i++) {
    employeeTable.rows[_i].style.display = '';
  } // Update pagination controls


  document.getElementById('prevPage').classList.toggle('disabled', page === 1);
  document.getElementById('nextPage').classList.toggle('disabled', page === totalPages); // Update pagination numbers

  updatePagination();
}

function updatePagination() {
  // Clear existing page numbers
  var paginationList = pagination.querySelectorAll('.page-item:not(#prevPage):not(#nextPage)');
  paginationList.forEach(function (item) {
    return item.remove();
  }); // Display a few page numbers with dots

  var maxPageLinks = 2; // Max number of page links to show before and after current

  var startPage = Math.max(1, currentPage - maxPageLinks); // Start page

  var endPage = Math.min(totalPages, currentPage + maxPageLinks); // End page
  // Adjust start and end to show dots if needed

  if (startPage > 1) {
    // Show the first page
    addPageLink(1);

    if (startPage > 2) {
      // Show dots after the first page
      addDots();
    }
  }

  for (var i = startPage; i <= endPage; i++) {
    addPageLink(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      // Show dots before the last page
      addDots();
    } // Show the last page


    addPageLink(totalPages);
  }
}

function addPageLink(page) {
  var li = document.createElement('li');
  li.className = 'page-item';
  li.innerHTML = "<a style=\"font-size:19px;\" class=\"page-link\" href=\"#\">".concat(page, "</a>");

  li.onclick = function () {
    currentPage = page;
    displayPage(currentPage);
    updatePagination();
  };

  if (page === currentPage) {
    li.classList.add('active'); // Add active class for current page
  }

  pagination.insertBefore(li, document.getElementById('nextPage'));
}

function addDots() {
  var li = document.createElement('li');
  li.className = 'page-item disabled';
  li.innerHTML = "<span class=\"page-link\">...</span>";
  pagination.insertBefore(li, document.getElementById('nextPage'));
} // Event listeners for previous and next buttons


document.getElementById('prevPage').onclick = function () {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
};

document.getElementById('nextPage').onclick = function () {
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
  }
}; // Initial display


displayPage(currentPage); // Function to remove extra spaces from all elements with class 'employeeName'

function removeExtraSpaces() {
  // Select all elements with class 'employeeName'
  var employeeNameElements = document.querySelectorAll('.employeeName');
  employeeNameElements.forEach(function (element) {
    // Get the current text content
    var text = element.textContent; // Remove extra spaces using regex

    text = text.replace(/\s+/g, ' ').trim(); // Update the text content

    element.textContent = text;
  });
} // Call the function to remove extra spaces


removeExtraSpaces();