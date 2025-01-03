"use strict";

/* 1. Proloder */
$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
}); /////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  var profileUserData = {
    username: "user",
    email: "user@gmail.com"
  }; // Create the content for the popover, including the logout link

  var popoverContent = "\n        <strong>\u0627\u0644\u0623\u0633\u0645:</strong> ".concat(profileUserData.username, " <br>\n        <strong>\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0643\u062A\u0631\u0648\u0646\u064A:</strong> ").concat(profileUserData.email, " <br>\n        <a href=\"../index.html\" class=\"btn btn-danger btn-sm mt-2\">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</a>\n    "); // Set dynamic content for profile icon popover

  $('#profileIcon').attr('data-bs-content', popoverContent); // Initialize popover (Bootstrap 5 syntax)

  var popoverTrigger = new bootstrap.Popover(document.getElementById('profileIcon'), {
    html: true,
    placement: 'bottom',
    trigger: 'manual' // Changed to manual to control show/hide programmatically

  }); // Function to show popover for 3 seconds on hover

  $('#profileIcon').on('mouseenter', function () {
    popoverTrigger.show(); // Hide popover after 3 seconds, regardless of mouse movement

    setTimeout(function () {
      popoverTrigger.hide();
    }, 3000); // 3 seconds
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
}; // دالة لتعطيل أو تمكين الحقول


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
} // دالة لمعاينة الصورة بعد اختيارها


function previewImage(event) {
  var output = document.getElementById('profileImage');
  output.src = URL.createObjectURL(event.target.files[0]);
} // افتراضياً، يتم تعطيل الحقول عند تحميل الصفحة


disableFormInputs(true); // دالة لعرض أو إخفاء زر "إضافة طفل" بناءً على التبويب النشط

function toggleAddChildButton(show) {
  var addChildBtn = document.getElementById('add-child-btn');

  if (show) {
    addChildBtn.style.display = 'block'; // إظهار الزر
  } else {
    addChildBtn.style.display = 'none'; // إخفاء الزر
  }
} // دالة لعرض أو إخفاء زر "إضافة معلومات السفر" بناءً على التبويب النشط


function toggleAddTravelInfoButton(show) {
  var addTravelInfoBtn = document.getElementById('add-travel-info-btn');

  if (show) {
    addTravelInfoBtn.style.display = 'block'; // إظهار الزر
  } else {
    addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
  }
} //دالة لعرض أو إخفاء زر "إضافة  قريب بالخارج" بناءً على التبويب النشط


function togglerelativeInfoButton(show) {
  var addTravelInfoBtn = document.getElementById('add-relative-abroad-btn');

  if (show) {
    addTravelInfoBtn.style.display = 'block'; // إظهار الزر
  } else {
    addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
  }
} //دالة لعرض أو إخفاء زر "إضافة   اخ" بناءً على التبويب النشط


function toggleaddsibling(show) {
  var addTravelInfoBtn = document.getElementById('add_sibling_btn');

  if (show) {
    addTravelInfoBtn.style.display = 'block'; // إظهار الزر
  } else {
    addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
  }
} //دالة لعرض أو إخفاء زر "إضافة   قريب متهم" بناءً على التبويب النشط


function toggleaddaccusedrelativebutton(show) {
  var addTravelInfoBtn = document.getElementById('add-accused-relative-button');

  if (show) {
    addTravelInfoBtn.style.display = 'block'; // إظهار الزر
  } else {
    addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
  }
} // عند الانتقال إلى التاب الأول (عرض البيانات)


document.getElementById('nav-home-tab').addEventListener('shown.bs.tab', function () {
  disableFormInputs(true); // تعطيل الحقول في تبويب عرض البيانات

  toggleImageUpload(false); // إخفاء رفع الصورة

  toggleAddChildButton(false); // إخفاء زر إضافة الطفل

  toggleAddTravelInfoButton(false); // إخفاء زر إضافة معلومات السفر

  togglerelativeInfoButton(false); // إخفاء زر إضافة  قريب بالخارج

  toggleaddsibling(false); // إخفاء زر إضافة  اخ 

  toggleaddaccusedrelativebutton(false); // إخفاء زر إضافة  قريب متهم 

  document.getElementById('saveButtonContainer').classList.add('d-none'); // إخفاء زر الحفظ
}); // عند الانتقال إلى التاب الثاني (تعديل البيانات)

document.getElementById('nav-profile-tab').addEventListener('shown.bs.tab', function () {
  disableFormInputs(false); // تمكين الحقول في تبويب تعديل البيانات

  toggleImageUpload(true); // إظهار رفع الصورة

  toggleAddChildButton(true); // إظهار زر إضافة الطفل

  toggleAddTravelInfoButton(true); // إظهار زر إضافة معلومات السفر

  togglerelativeInfoButton(true); // اظهار زر إضافة  قريب بالخارج

  toggleaddsibling(true); // اظهار زر اخ   بالخارج

  toggleaddaccusedrelativebutton(true); // اظهار زر إضافة  قريب متهم 

  document.getElementById('saveButtonContainer').classList.remove('d-none'); // إظهار زر الحفظ
}); // افتراضياً، يتم تعطيل زر إضافة معلومات السفر عند تحميل الصفحة

toggleAddTravelInfoButton(false); // افتراضياً، يتم تعطيل زر إضافة الطفل عند تحميل الصفحة

toggleAddChildButton(false);
toggleaddsibling(false);
togglerelativeInfoButton(false); // إخفاء زر إضافة  قريب بالخارجافتراضياً، 

toggleaddaccusedrelativebutton(false); // إخفاء زر إضافة  قريب بالخارجافتراضياً، 
///////////////////////////////////اخفاء الزوجه والابناء لو كان اعزب///////////////////////////////

document.getElementById('marital_statu').addEventListener('change', function () {
  var maritalStatus = this.value;
  var spouseInfo = document.getElementById('spouse-inf');
  var childrenInfo = document.getElementById('children-inf');

  if (maritalStatus === 'single') {
    spouseInfo.style.display = 'none';
    childrenInfo.style.display = 'none';
  } else {
    spouseInfo.style.display = 'block';
    childrenInfo.style.display = 'block';
  }
}); ///////////////////////////////////////////////////////////////////////////////////
// استهداف حقول الراديو

var policeYes = document.getElementById('police_yes');
var policeNo = document.getElementById('police_no');
var policeReason = document.getElementById('police_reason'); // إضافة حدث التغيير للتحقق من الاختيار

policeYes.addEventListener('change', function () {
  if (policeYes.checked) {
    policeReason.style.display = 'block'; // إظهار حقل سبب المحضر

    document.getElementById('police_reason_input').setAttribute('required', 'required'); // جعل الحقل مطلوبًا
  }
});
policeNo.addEventListener('change', function () {
  if (policeNo.checked) {
    policeReason.style.display = 'none'; // إخفاء حقل سبب المحضر

    document.getElementById('police_reason_input').removeAttribute('required'); // إزالة خاصية المطلوب
  }
}); /////////////////////////////////////// اضافه ابناء////////////////////////////////////

var childCount = 1; // عداد الأبناء
// دالة لإضافة طفل جديد

document.getElementById('add-child-btn').addEventListener('click', function () {
  childCount++;
  var childContainer = document.createElement('div');
  childContainer.className = 'child-inf';
  childContainer.id = 'child-' + childCount;
  childContainer.style.marginBottom = '10px';
  childContainer.innerHTML = "\n                            <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n                                <div class=\"child-field\">\n                                    <label for=\"child_first_name_".concat(childCount, "\">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0628\u0627\u0639\u064A:</label>\n                                    <input type=\"text\" id=\"child_first_name_").concat(childCount, "\" name=\"child_first_name[]\" class=\"form-control\">\n                                </div>\n                                <div class=\"child-field\">\n                                    <label for=\"child_dob_").concat(childCount, "\">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F:</label>\n                                    <input type=\"date\" id=\"child_dob_").concat(childCount, "\" name=\"child_dob[]\" class=\"form-control\">\n                                </div>\n                                <div class=\"child-field\">\n                                    <label for=\"child_place_of_birth_").concat(childCount, "\">\u0645\u062D\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F:</label>\n                                    <input type=\"text\" id=\"child_place_of_birth_").concat(childCount, "\" name=\"child_place_of_birth[]\" class=\"form-control\">\n                                </div>\n                                <div class=\"child-field\">\n                                    <label for=\"child_qualification_").concat(childCount, "\">\u0627\u0644\u0645\u0624\u0647\u0644:</label>\n                                    <input type=\"text\" id=\"child_qualification_").concat(childCount, "\" name=\"child_qualification[]\" class=\"form-control\">\n                                </div>\n                                <div class=\"child-field\">\n                                    <label for=\"child_job_").concat(childCount, "\">\u0627\u0644\u0648\u0638\u064A\u0641\u0629:</label>\n                                    <input type=\"text\" id=\"child_job_").concat(childCount, "\" name=\"child_job[]\" class=\"form-control\">\n                                </div>\n                                <div class=\"child-field\">\n                                    <label for=\"child_address_").concat(childCount, "\">\u0645\u062D\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629:</label>\n                                    <input type=\"text\" id=\"child_address_").concat(childCount, "\" name=\"child_address[]\" class=\"form-control\">\n                                </div>\n                            </div>\n                        ");
  document.getElementById('children-contain').appendChild(childContainer);
}); ///////////////////////////////////////// اضافه دوله جديده//////////////////////////////////////
// التعامل مع إضافة حقول جديدة للسفر

var travelInfoContainer = document.getElementById('travel-info-contain');
var addTravelBtn = document.getElementById('add-travel-info-btn');
var travelCount = 1; // يبدأ من 1 لأن أول مجموعة من الحقول موجودة بالفعل

addTravelBtn.addEventListener('click', function () {
  // إنشاء عناصر جديدة لحفظ معلومات السفر
  var newTravelInfo = document.createElement('div');
  newTravelInfo.classList.add('travel-info');
  newTravelInfo.innerHTML = "\n                <!-- Country Name -->\n                <div class=\"form-group relative-field\">\n                    <label for=\"travel_country_name_".concat(travelCount, "\">\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629:</label>\n                    <input type=\"text\" id=\"travel_country_name_").concat(travelCount, "\" name=\"travel_country_name[]\" class=\"form-control\">\n                </div>\n        \n                <!-- Travel Times -->\n                <div class=\"form-group relative-field\">\n                    <label for=\"travel_times_").concat(travelCount, "\">\u0639\u062F\u062F \u0627\u0644\u0645\u0631\u0627\u062A:</label>\n                    <input type=\"number\" id=\"travel_times_").concat(travelCount, "\" name=\"travel_times[]\" class=\"form-control\">\n                </div>\n        \n                <!-- Travel Duration -->\n                <div class=\"form-group relative-field\">\n                    <label for=\"travel_duration_").concat(travelCount, "\">\u0627\u0644\u0645\u062F\u0629:</label>\n                    <input type=\"text\" id=\"travel_duration_").concat(travelCount, "\" name=\"travel_duration[]\" class=\"form-control\">\n                </div>\n        \n                <!-- Travel Date -->\n                <div class=\"form-group relative-field\">\n                    <label for=\"travel_date_").concat(travelCount, "\">\u0627\u0644\u062A\u0627\u0631\u064A\u062E:</label>\n                    <input type=\"date\" id=\"travel_date_").concat(travelCount, "\" name=\"travel_date[]\" class=\"form-control\" style=\"width:100%;\">\n                </div>\n            "); // إضافة مجموعة الحقول الجديدة إلى الحاوية

  travelInfoContainer.appendChild(newTravelInfo); // تحديث العداد لضمان فريدة المعرفات الجديدة

  travelCount++;
}); ///////////////////////////////////////////////////////// اضافه اقارب بالخارج//////////////////////////////////////////////////

var relativeAbroadCount = 1; // بدء العد من 1 حيث أن لدينا عنصر افتراضي
// دالة لإضافة بيانات الأقارب بالخارج

function addRelativeAbroad() {
  relativeAbroadCount++; // زيادة العداد عند إضافة قريب جديد

  var container = document.getElementById('relatives-abroad-contain'); // إنشاء عنصر جديد لبيانات قريب بالخارج

  var newRelative = document.createElement('div');
  newRelative.className = 'relative-abroad-info';
  newRelative.style.marginBottom = '10px';
  newRelative.style.border = '1px solid #ccc';
  newRelative.style.padding = '10px';
  newRelative.style.borderRadius = '8px';
  newRelative.innerHTML = "\n                <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n                    <div class=\"relative-field\">\n                        <label for=\"relative_abroad_name_".concat(relativeAbroadCount, "\">\u0627\u0644\u0627\u0633\u0645:</label>\n                        <input type=\"text\" id=\"relative_abroad_name_").concat(relativeAbroadCount, "\" name=\"relative_abroad_name[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"relative-field\">\n                        <label for=\"relative_abroad_relationship_").concat(relativeAbroadCount, "\">\u062F\u0631\u062C\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629:</label>\n                        <input type=\"text\" id=\"relative_abroad_relationship_").concat(relativeAbroadCount, "\" name=\"relative_abroad_relationship[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"relative-field\">\n                        <label for=\"relative_abroad_country_").concat(relativeAbroadCount, "\">\u0627\u0644\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0642\u064A\u0645 \u0641\u064A\u0647\u0627:</label>\n                        <input type=\"text\" id=\"relative_abroad_country_").concat(relativeAbroadCount, "\" name=\"relative_abroad_country[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"relative-field\">\n                        <label for=\"relative_abroad_reason_").concat(relativeAbroadCount, "\">\u0633\u0628\u0628 \u0627\u0644\u0625\u0642\u0627\u0645\u0629:</label>\n                        <input type=\"text\" id=\"relative_abroad_reason_").concat(relativeAbroadCount, "\" name=\"relative_abroad_reason[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"relative-field\">\n                        <label for=\"relative_abroad_nationality_").concat(relativeAbroadCount, "\">\u0627\u0644\u062C\u0646\u0633\u064A\u0629 \u0627\u0644\u0645\u0643\u062A\u0633\u0628\u0629:</label>\n                        <input type=\"text\" id=\"relative_abroad_nationality_").concat(relativeAbroadCount, "\" name=\"relative_abroad_nationality[]\">\n                    </div>\n                </div>\n            ");
  container.appendChild(newRelative);
} // ربط الزر بالدالة


document.getElementById('add-relative-abroad-btn').addEventListener('click', addRelativeAbroad); // إخفاء الزر "+" في البداية

document.getElementById('add-relative-abroad-btn').style.display = 'none'; //////////////////////////////////// اضافه اخوه جديده////////////////////////////////////////////////

var siblingCount = 1; // بدء العد من 1 حيث لدينا عنصر افتراضي
// دالة لإضافة بيانات الأخ أو الأخت

function addSibling() {
  siblingCount++; // زيادة العداد عند إضافة أخ أو أخت جديدة

  var container = document.getElementById('siblings_list'); // إنشاء عنصر جديد لبيانات الأخ أو الأخت

  var newSibling = document.createElement('div');
  newSibling.className = 'single_sibling_info';
  newSibling.style.marginBottom = '10px';
  newSibling.style.border = '1px solid #ccc';
  newSibling.style.padding = '10px';
  newSibling.style.borderRadius = '8px';
  newSibling.innerHTML = "\n                <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_full_name_".concat(siblingCount, "\">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0628\u0627\u0639\u064A:</label>\n                        <input type=\"text\" id=\"sibling_full_name_").concat(siblingCount, "\" name=\"sibling_full_name[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_birth_date_").concat(siblingCount, "\">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F:</label>\n                        <input type=\"date\" id=\"sibling_birth_date_").concat(siblingCount, "\" name=\"sibling_birth_date[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_job_title_").concat(siblingCount, "\">\u0627\u0644\u0648\u0638\u064A\u0641\u0629:</label>\n                        <input type=\"text\" id=\"sibling_job_title_").concat(siblingCount, "\" name=\"sibling_job_title[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_spouse_name_").concat(siblingCount, "\">\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C/\u0627\u0644\u0632\u0648\u062C\u0629:</label>\n                        <input type=\"text\" id=\"sibling_spouse_name_").concat(siblingCount, "\" name=\"sibling_spouse_name[]\" class=\"form-control\">\n                    </div>\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_education_").concat(siblingCount, "\">\u0627\u0644\u0645\u0624\u0647\u0644:</label>\n                        <input type=\"text\" id=\"sibling_education_").concat(siblingCount, "\" name=\"sibling_education[]\" class=\"form-control\">\n                    </div>\n                    <div class=\"sibling-field\">\n                        <label for=\"sibling_residence_").concat(siblingCount, "\">\u0645\u062D\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629:</label>\n                        <input type=\"text\" id=\"sibling_residence_").concat(siblingCount, "\" name=\"sibling_residence[]\" class=\"form-control\" required>\n                    </div>\n                </div>\n            ");
  container.appendChild(newSibling);
} // ربط الزر بالدالة


document.getElementById('add_sibling_btn').addEventListener('click', addSibling); ////////////////////////////////////////////// اضافه اقارب سبق اتهامهم///////////////////////////////////////////

var accusedCount = 1; // العد يبدأ من 1 بعد العنصر الافتراضي
// دالة لإضافة بيانات قريب متهم جديد

function addAccusedRelative() {
  accusedCount++; // زيادة العداد مع كل إضافة

  var container = document.getElementById('accused-relatives-contain'); // إنشاء عنصر جديد لبيانات قريب متهم

  var newAccused = document.createElement('div');
  newAccused.className = 'accused-relative-inf';
  newAccused.style.marginBottom = '10px';
  newAccused.style.border = '1px solid #ccc';
  newAccused.style.padding = '10px';
  newAccused.style.borderRadius = '8px';
  newAccused.innerHTML = "\n                <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n                    <div class=\"accused-relative-field-group\">\n                        <label for=\"accused_name_".concat(accusedCount, "\">\u0627\u0644\u0627\u0633\u0645:</label>\n                        <input type=\"text\" id=\"accused_name_").concat(accusedCount, "\" name=\"accused_name[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"accused-relative-field-group\">\n                        <label for=\"accused_relationship_").concat(accusedCount, "\">\u062F\u0631\u062C\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629:</label>\n                        <input type=\"text\" id=\"accused_relationship_").concat(accusedCount, "\" name=\"accused_relationship[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"accused-relative-field-group\">\n                        <label for=\"accused_accusation_").concat(accusedCount, "\">\u0627\u0644\u0627\u062A\u0647\u0627\u0645:</label>\n                        <input type=\"text\" id=\"accused_accusation_").concat(accusedCount, "\" name=\"accused_accusation[]\" class=\"form-control\" required>\n                    </div>\n                    <div class=\"accused-relative-field-group\">\n                        <label for=\"accused_judgment_").concat(accusedCount, "\">\u0627\u0644\u062D\u0643\u0645:</label>\n                        <input type=\"text\" id=\"accused_judgment_").concat(accusedCount, "\" name=\"accused_judgment[]\" class=\"form-control\" required>\n                    </div>\n                </div>\n            ");
  container.appendChild(newAccused);
} // ربط الزر بالدالة


document.getElementById('add-accused-relative-button').addEventListener('click', addAccusedRelative); /////////////////////////////////////////password///////////////////////////////////////////////////////////

var passwordField = document.getElementById("exampleInputPassword2");
var togglePassword = document.querySelector(".ico i");
var togglePassword1 = document.querySelector(".tog i");
var passwordField1 = document.getElementById("exampleInputPassword3");
var togglePassword2 = document.querySelector(".toggg i");
var passwordField2 = document.getElementById("exampleInputPassword1");
togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
togglePassword1.addEventListener("click", function () {
  if (passwordField1.type === "password") {
    passwordField1.type = "text";
    togglePassword1.classList.remove("fa-eye");
    togglePassword1.classList.add("fa-eye-slash");
  } else {
    passwordField1.type = "password";
    togglePassword1.classList.remove("fa-eye-slash");
    togglePassword1.classList.add("fa-eye");
  }
});
togglePassword2.addEventListener("click", function () {
  if (passwordField2.type === "password") {
    passwordField2.type = "text";
    togglePassword2.classList.remove("fa-eye");
    togglePassword2.classList.add("fa-eye-slash");
  } else {
    passwordField2.type = "password";
    togglePassword2.classList.remove("fa-eye-slash");
    togglePassword2.classList.add("fa-eye");
  }
});
var passwordForm = document.getElementById('passwordForm');
var password2 = document.getElementById('exampleInputPassword2');
var password3 = document.getElementById('exampleInputPassword3');
var submitButton = document.getElementById('submitButton');
var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

function checkPasswords() {
  if (password2.value !== "" && password3.value !== "" && password2.value === password3.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

password2.addEventListener('input', checkPasswords);
password3.addEventListener('input', checkPasswords);
passwordForm.addEventListener('submit', function (e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة

  modal.show(); // عرض المودال
});
document.getElementById('confirmYesBtn').addEventListener('click', function () {
  // تنفيذ العملية المطلوبة عند الضغط على "نعم"
  passwordForm.submit(); // أرسل النموذج بعد تأكيد المستخدم
});