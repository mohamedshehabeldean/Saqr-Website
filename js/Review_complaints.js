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


// review_complaints
////////////////////////////////////////الشكاوي////////////////////////////////////
let complaints = [
    {
        name: "محمد صبري",
        position: "مدير المشروع",
        title: "شكوى بخصوص تأخير المشروع",
        content: "تأخر المشروع بسبب نقص الموارد اللازمة.",
        image: "../images/user.jpg" // صورة افتراضية
    },
    {
        name: "مروة سيد",
        position: "مطورة برمجيات",
        title: "مشاكل في النظام",
        content: "النظام يواجه أعطال متكررة.النظام يواجه أعطال متكررة تتسبب في إعاقة العمل، مما يؤثر على أداء الفريق والإنتاجية. نحتاج إلى دعم فني لحل هذه المشكلات في أقرب وقت",
        image: "../images/user.jpg" // صورة افتراضية
    },
    {
        name: "مروة سيد",
        position: "مطورة برمجيات",
        title: "مشاكل في النظام",
        content: "النظام يواجه أعطال متكررة.",
        image: "../images/user.jpg" // صورة افتراضية
    },

];
function renderComplaints() {
    const complaintsContainer = document.getElementById("complaintsContainer");
    complaintsContainer.innerHTML = ""; // تفريغ المحتوى قبل إعادة العرض

    complaints.forEach((complaint, index) => {
        const complaintCard = `
<div class="col-sm-12 col-md-6 col-lg-4"> 
<div class="complaint-card big_tab">
    <!-- صورة المستخدم   -->
    <img src="${complaint.image}" alt="${complaint.name}" class="complaint-image">
    
    <!-- الاسم والوظيفة   -->
    <div class="complaint-header">
        <h5>${complaint.name}</h5>
        <p>${complaint.position}</p>
    </div>

    <!-- عنوان الشكوى   -->
    <div class="complaint-title">
        <h6   style="font-weight: bold; height:40px;overflow:auto;" >عنوان الشكوى: ${complaint.title}</h6>
    </div>

    <!-- تفاصيل الشكوى في -->
    <div class="complaint-details">
        <textarea class="text-area-style" readonly>${complaint.content}</textarea>
    </div>

    <!-- زر الحذف -->
    <button class="btn btn-danger delete-btn w-100" onclick="deleteComplaint(${index})">حذف</button>
</div>
</div>
`;
        complaintsContainer.innerHTML += complaintCard;
    });
}


function deleteComplaint(index) {
    complaints.splice(index, 1); // حذف الشكوى من المصفوفة
    renderComplaints(); // إعادة عرض الشكاوى
}

// عرض الشكاوى عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", renderComplaints);
