"use strict";

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
}; // < !--JavaScript for form validation and EmailJS integration-- >


$(document).ready(function () {
  $('#contactForm').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: "الرجاء إدخال اسمك",
      email: {
        required: "الرجاء إدخال بريدك الإلكتروني",
        email: "الرجاء إدخال بريد إلكتروني صالح"
      },
      message: {
        required: "الرجاء إدخال رسالتك",
        minlength: "الرسالة يجب أن تحتوي على 10 أحرف على الأقل"
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      error.insertAfter(element);
    },
    submitHandler: function submitHandler(form) {
      var templateParams = {
        name: $('#name').val().trim(),
        email: $('#email').val().trim(),
        subject: $('#subject').val().trim(),
        message: $('#message').val().trim()
      };
      console.log('Sending email with params:', templateParams); // تتبع المعلومات

      emailjs.send('service_bfe6aji', 'template_li4bpp3', templateParams).then(function (response) {
        // إعادة تعيين الحقول
        $('#contactForm')[0].reset();
        $('#responseMessage').text('تم إرسال الرسالة بنجاح!').css({
          'color': 'green',
          'font-size': '20px',
          // حجم الخط المطلوب
          'font-weight': 'bold'
        });
      }, function (error) {
        $('#responseMessage').text('حدث خطأ، الرجاء المحاولة مرة أخرى.').css({
          'color': 'red',
          'font-size': '20px',
          // حجم الخط المطلوب
          'font-weight': 'bold'
        });
      });
    }
  });
});
/* 1. Proloder */

$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});