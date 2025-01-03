"use strict";

/////////////////////////////////////////////////////////////////////////////////////
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
}); ////////////////////////////////
// button to move up

var x = document.getElementById('btn');

window.onscroll = function () {
  if (scrollY >= 200) {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};

x.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
}; /////////////////////////////////////////////////////
// دالة لتعطيل أو تمكين الحقول


function disableFormInputs(disable) {
  var form = document.getElementById('userForm'); // جلب جميع الحقول من نوع input

  var inputs = form.getElementsByTagName('input'); // جلب جميع الحقول من نوع select

  var selects = form.getElementsByTagName('select'); // تعطيل أو تمكين جميع الحقول من نوع input

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = disable;
  } // تعطيل أو تمكين جميع الحقول من نوع select


  for (var i = 0; i < selects.length; i++) {
    selects[i].disabled = disable;
  }
} // دالة لإظهار أو إخفاء رفع الصورة


function toggleImageUpload(show) {
  var imageUpload = document.getElementById('imageUpload');

  if (show) {
    imageUpload.classList.remove('d-none'); // إظهار رفع الصورة
  } else {
    imageUpload.classList.add('d-none'); // إخفاء رفع الصورة
  }
} // افتراضياً، يتم تعطيل الحقول عند تحميل الصفحة


disableFormInputs(true); // *****************************
//********value of input1*******
//******************************

document.getElementById('inp1').value = '2024-02-01';
document.getElementById('inp2').value = '2024-02-03';
document.getElementById('inp3').value = '2024-01-20';
document.getElementById('inp4').value = '2024-01-25';