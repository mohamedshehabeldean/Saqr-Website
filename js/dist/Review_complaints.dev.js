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
}); // review_complaints
////////////////////////////////////////الشكاوي////////////////////////////////////

var complaints = [{
  name: "محمد صبري",
  position: "مدير المشروع",
  title: "شكوى بخصوص تأخير المشروع",
  content: "تأخر المشروع بسبب نقص الموارد اللازمة.",
  image: "../images/user.jpg" // صورة افتراضية

}, {
  name: "مروة سيد",
  position: "مطورة برمجيات",
  title: "مشاكل في النظام",
  content: "النظام يواجه أعطال متكررة.النظام يواجه أعطال متكررة تتسبب في إعاقة العمل، مما يؤثر على أداء الفريق والإنتاجية. نحتاج إلى دعم فني لحل هذه المشكلات في أقرب وقت",
  image: "../images/user.jpg" // صورة افتراضية

}, {
  name: "مروة سيد",
  position: "مطورة برمجيات",
  title: "مشاكل في النظام",
  content: "النظام يواجه أعطال متكررة.",
  image: "../images/user.jpg" // صورة افتراضية

}];

function renderComplaints() {
  var complaintsContainer = document.getElementById("complaintsContainer");
  complaintsContainer.innerHTML = ""; // تفريغ المحتوى قبل إعادة العرض

  complaints.forEach(function (complaint, index) {
    var complaintCard = "\n<div class=\"col-sm-12 col-md-6 col-lg-4\"> \n<div class=\"complaint-card big_tab\">\n    <!-- \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645   -->\n    <img src=\"".concat(complaint.image, "\" alt=\"").concat(complaint.name, "\" class=\"complaint-image\">\n    \n    <!-- \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0648\u0638\u064A\u0641\u0629   -->\n    <div class=\"complaint-header\">\n        <h5>").concat(complaint.name, "</h5>\n        <p>").concat(complaint.position, "</p>\n    </div>\n\n    <!-- \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0643\u0648\u0649   -->\n    <div class=\"complaint-title\">\n        <h6   style=\"font-weight: bold; height:40px;overflow:auto;\" >\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0643\u0648\u0649: ").concat(complaint.title, "</h6>\n    </div>\n\n    <!-- \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0634\u0643\u0648\u0649 \u0641\u064A -->\n    <div class=\"complaint-details\">\n        <textarea class=\"text-area-style\" readonly>").concat(complaint.content, "</textarea>\n    </div>\n\n    <!-- \u0632\u0631 \u0627\u0644\u062D\u0630\u0641 -->\n    <button class=\"btn btn-danger delete-btn w-100\" onclick=\"deleteComplaint(").concat(index, ")\">\u062D\u0630\u0641</button>\n</div>\n</div>\n");
    complaintsContainer.innerHTML += complaintCard;
  });
}

function deleteComplaint(index) {
  complaints.splice(index, 1); // حذف الشكوى من المصفوفة

  renderComplaints(); // إعادة عرض الشكاوى
} // عرض الشكاوى عند تحميل الصفحة


document.addEventListener("DOMContentLoaded", renderComplaints);