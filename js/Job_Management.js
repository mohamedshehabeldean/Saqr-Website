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
let jobs = [];
let jobToEditIndex = null;

// عند تحميل الصفحة، تحويل البيانات من الجدول إلى مصفوفة
window.onload = function () {
    const jobRows = document.querySelectorAll('#jobBody tr');
    jobRows.forEach(row => {
        const id = parseInt(row.children[0].textContent);
        const name = row.children[1].textContent;
        jobs.push({ id, name });
    });
    updateJobTable(); // Ensure the table is updated on load to maintain consistency
};

// Function to add a new job
function addJob() {
    const jobName = document.getElementById('jobInput').value.trim();
    if (!jobName) {
        alert('يرجى إدخال اسم الوظيفة.');
        return;
    }

    const jobIndex = jobs.length + 1; // Always add the next sequence number
    jobs.push({ id: jobIndex, name: jobName });
    updateJobTable();
    document.getElementById('jobInput').value = ''; // Clear the input field
}

// Function to delete a job and reorder the sequence
function deleteJob(jobId) {
    jobs = jobs.filter(job => job.id !== jobId);
    reorderJobIds(); // Reorder the IDs after deletion
    updateJobTable();
}

// Function to edit a job
function editJob(jobId) {
    const job = jobs.find(job => job.id === jobId);
    document.getElementById('jobInput').value = job.name;
    jobToEditIndex = jobId;
    document.getElementById('addJobBtnText').textContent = 'تحديث وظيفة';
}

// Function to update an existing job
function updateJob() {
    const jobName = document.getElementById('jobInput').value.trim();
    if (!jobName) {
        alert('يرجى إدخال اسم الوظيفة.');
        return;
    }

    const jobIndex = jobs.findIndex(job => job.id === jobToEditIndex);
    if (jobIndex !== -1) {
        jobs[jobIndex].name = jobName; // Update the job name
    }
    resetForm();
    updateJobTable();
}

// Reset form after adding or editing a job
function resetForm() {
    document.getElementById('jobInput').value = '';
    jobToEditIndex = null;
    document.getElementById('addJobBtnText').textContent = 'إضافة وظيفة';
}

// Function to reorder job IDs after a deletion
function reorderJobIds() {
    jobs.forEach((job, index) => {
        job.id = index + 1; // Reassign sequential IDs starting from 1
    });
}

// Function to update the job table with the current job data
function updateJobTable() {
    const jobTableBody = document.getElementById('jobBody');
    jobTableBody.innerHTML = ''; // Clear the current table

    jobs.forEach(job => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
    <td id="job-${job.id}">${job.id}</td>
    <td id="job-name-${job.id}">${job.name}</td>
    <td>
        <button class="btn btn-danger  button " onclick="deleteJob(${job.id})">حذف</button>
        <button class="btn btn-success  button " onclick="editJob(${job.id})">تعديل</button>
    </td>
`;
        jobTableBody.appendChild(newRow);
    });
}