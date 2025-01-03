/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
        'overflow': 'visible'
    });
});





/////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var profileUserData = {
        username: "user",
        email: "user@gmail.com"
    };

    // Create the content for the popover, including the logout link
    var popoverContent = `
        <strong>الأسم:</strong> ${profileUserData.username} <br>
        <strong>البريد الاكتروني:</strong> ${profileUserData.email} <br>
        <a href="../index.html" class="btn btn-danger btn-sm mt-2">تسجيل الخروج</a>
    `;

    // Set dynamic content for profile icon popover
    $('#profileIcon').attr('data-bs-content', popoverContent);

    // Initialize popover (Bootstrap 5 syntax)
    var popoverTrigger = new bootstrap.Popover(document.getElementById('profileIcon'), {
        html: true,
        placement: 'bottom',
        trigger: 'manual' // Changed to manual to control show/hide programmatically
    });

    // Function to show popover for 3 seconds on hover
    $('#profileIcon').on('mouseenter', function () {
        popoverTrigger.show();

        // Hide popover after 3 seconds, regardless of mouse movement
        setTimeout(function () {
            popoverTrigger.hide();
        }, 3000); // 3 seconds
    });
});

////////////////////////////////

// button to move up
let x = document.getElementById('btn');
window.onscroll = function () {
    if (scrollY >= 200) {
        x.style.display = 'block';

    }
    else {
        x.style.display = 'none';

    }
}
x.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}




// دالة لتعطيل أو تمكين الحقول
function disableFormInputs(disable) {
    var form = document.getElementById('userForm');

    // جلب جميع الحقول من نوع input
    var inputs = form.getElementsByTagName('input');
    // جلب جميع الحقول من نوع select
    var selects = form.getElementsByTagName('select');

    // تعطيل أو تمكين جميع الحقول من نوع input
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = disable;
    }

    // تعطيل أو تمكين جميع الحقول من نوع select
    for (var i = 0; i < selects.length; i++) {
        selects[i].disabled = disable;
    }
}

// دالة لإظهار أو إخفاء رفع الصورة
function toggleImageUpload(show) {
    var imageUpload = document.getElementById('imageUpload');
    if (show) {
        imageUpload.classList.remove('d-none'); // إظهار رفع الصورة
    } else {
        imageUpload.classList.add('d-none'); // إخفاء رفع الصورة
    }
}

// دالة لمعاينة الصورة بعد اختيارها
function previewImage(event) {
    var output = document.getElementById('profileImage');
    output.src = URL.createObjectURL(event.target.files[0]);
}

// افتراضياً، يتم تعطيل الحقول عند تحميل الصفحة
disableFormInputs(true);

// دالة لعرض أو إخفاء زر "إضافة طفل" بناءً على التبويب النشط
function toggleAddChildButton(show) {
    var addChildBtn = document.getElementById('add-child-btn');
    if (show) {
        addChildBtn.style.display = 'block'; // إظهار الزر
    } else {
        addChildBtn.style.display = 'none'; // إخفاء الزر
    }
}
// دالة لعرض أو إخفاء زر "إضافة معلومات السفر" بناءً على التبويب النشط
function toggleAddTravelInfoButton(show) {
    var addTravelInfoBtn = document.getElementById('add-travel-info-btn');
    if (show) {
        addTravelInfoBtn.style.display = 'block'; // إظهار الزر
    } else {
        addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
    }
}


//دالة لعرض أو إخفاء زر "إضافة  قريب بالخارج" بناءً على التبويب النشط
function togglerelativeInfoButton(show) {
    var addTravelInfoBtn = document.getElementById('add-relative-abroad-btn');
    if (show) {
        addTravelInfoBtn.style.display = 'block'; // إظهار الزر
    } else {
        addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
    }
}


//دالة لعرض أو إخفاء زر "إضافة   اخ" بناءً على التبويب النشط
function toggleaddsibling(show) {
    var addTravelInfoBtn = document.getElementById('add_sibling_btn');
    if (show) {
        addTravelInfoBtn.style.display = 'block'; // إظهار الزر
    } else {
        addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
    }
}


//دالة لعرض أو إخفاء زر "إضافة   قريب متهم" بناءً على التبويب النشط
function toggleaddaccusedrelativebutton(show) {
    var addTravelInfoBtn = document.getElementById('add-accused-relative-button');
    if (show) {
        addTravelInfoBtn.style.display = 'block'; // إظهار الزر
    } else {
        addTravelInfoBtn.style.display = 'none'; // إخفاء الزر
    }
}


// عند الانتقال إلى التاب الأول (عرض البيانات)
document.getElementById('nav-home-tab').addEventListener('shown.bs.tab', function () {
    disableFormInputs(true); // تعطيل الحقول في تبويب عرض البيانات
    toggleImageUpload(false); // إخفاء رفع الصورة
    toggleAddChildButton(false); // إخفاء زر إضافة الطفل
    toggleAddTravelInfoButton(false); // إخفاء زر إضافة معلومات السفر
    togglerelativeInfoButton(false);// إخفاء زر إضافة  قريب بالخارج
    toggleaddsibling(false);// إخفاء زر إضافة  اخ 
    toggleaddaccusedrelativebutton(false);// إخفاء زر إضافة  قريب متهم 
    document.getElementById('saveButtonContainer').classList.add('d-none'); // إخفاء زر الحفظ
});

// عند الانتقال إلى التاب الثاني (تعديل البيانات)
document.getElementById('nav-profile-tab').addEventListener('shown.bs.tab', function () {
    disableFormInputs(false); // تمكين الحقول في تبويب تعديل البيانات
    toggleImageUpload(true); // إظهار رفع الصورة
    toggleAddChildButton(true); // إظهار زر إضافة الطفل
    toggleAddTravelInfoButton(true); // إظهار زر إضافة معلومات السفر
    togglerelativeInfoButton(true);// اظهار زر إضافة  قريب بالخارج
    toggleaddsibling(true);// اظهار زر اخ   بالخارج
    toggleaddaccusedrelativebutton(true);// اظهار زر إضافة  قريب متهم 

    document.getElementById('saveButtonContainer').classList.remove('d-none'); // إظهار زر الحفظ
});



// افتراضياً، يتم تعطيل زر إضافة معلومات السفر عند تحميل الصفحة
toggleAddTravelInfoButton(false);
// افتراضياً، يتم تعطيل زر إضافة الطفل عند تحميل الصفحة
toggleAddChildButton(false);
toggleaddsibling(false);
togglerelativeInfoButton(false);// إخفاء زر إضافة  قريب بالخارجافتراضياً، 
toggleaddaccusedrelativebutton(false);// إخفاء زر إضافة  قريب بالخارجافتراضياً، 

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

});
///////////////////////////////////////////////////////////////////////////////////
// استهداف حقول الراديو
var policeYes = document.getElementById('police_yes');
var policeNo = document.getElementById('police_no');
var policeReason = document.getElementById('police_reason');

// إضافة حدث التغيير للتحقق من الاختيار
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
});

/////////////////////////////////////// اضافه ابناء////////////////////////////////////



var childCount = 1; // عداد الأبناء

// دالة لإضافة طفل جديد
document.getElementById('add-child-btn').addEventListener('click', function () {
    childCount++;
    var childContainer = document.createElement('div');
    childContainer.className = 'child-inf';
    childContainer.id = 'child-' + childCount;
    childContainer.style.marginBottom = '10px';

    childContainer.innerHTML = `
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <div class="child-field">
                                    <label for="child_first_name_${childCount}">الاسم الرباعي:</label>
                                    <input type="text" id="child_first_name_${childCount}" name="child_first_name[]" class="form-control">
                                </div>
                                <div class="child-field">
                                    <label for="child_dob_${childCount}">تاريخ الميلاد:</label>
                                    <input type="date" id="child_dob_${childCount}" name="child_dob[]" class="form-control">
                                </div>
                                <div class="child-field">
                                    <label for="child_place_of_birth_${childCount}">محل الميلاد:</label>
                                    <input type="text" id="child_place_of_birth_${childCount}" name="child_place_of_birth[]" class="form-control">
                                </div>
                                <div class="child-field">
                                    <label for="child_qualification_${childCount}">المؤهل:</label>
                                    <input type="text" id="child_qualification_${childCount}" name="child_qualification[]" class="form-control">
                                </div>
                                <div class="child-field">
                                    <label for="child_job_${childCount}">الوظيفة:</label>
                                    <input type="text" id="child_job_${childCount}" name="child_job[]" class="form-control">
                                </div>
                                <div class="child-field">
                                    <label for="child_address_${childCount}">محل الإقامة:</label>
                                    <input type="text" id="child_address_${childCount}" name="child_address[]" class="form-control">
                                </div>
                            </div>
                        `;
    document.getElementById('children-contain').appendChild(childContainer);
});
///////////////////////////////////////// اضافه دوله جديده//////////////////////////////////////

// التعامل مع إضافة حقول جديدة للسفر
var travelInfoContainer = document.getElementById('travel-info-contain');
var addTravelBtn = document.getElementById('add-travel-info-btn');
var travelCount = 1; // يبدأ من 1 لأن أول مجموعة من الحقول موجودة بالفعل

addTravelBtn.addEventListener('click', function () {
    // إنشاء عناصر جديدة لحفظ معلومات السفر
    var newTravelInfo = document.createElement('div');
    newTravelInfo.classList.add('travel-info');

    newTravelInfo.innerHTML = `
                <!-- Country Name -->
                <div class="form-group relative-field">
                    <label for="travel_country_name_${travelCount}">اسم الدولة:</label>
                    <input type="text" id="travel_country_name_${travelCount}" name="travel_country_name[]" class="form-control">
                </div>
        
                <!-- Travel Times -->
                <div class="form-group relative-field">
                    <label for="travel_times_${travelCount}">عدد المرات:</label>
                    <input type="number" id="travel_times_${travelCount}" name="travel_times[]" class="form-control">
                </div>
        
                <!-- Travel Duration -->
                <div class="form-group relative-field">
                    <label for="travel_duration_${travelCount}">المدة:</label>
                    <input type="text" id="travel_duration_${travelCount}" name="travel_duration[]" class="form-control">
                </div>
        
                <!-- Travel Date -->
                <div class="form-group relative-field">
                    <label for="travel_date_${travelCount}">التاريخ:</label>
                    <input type="date" id="travel_date_${travelCount}" name="travel_date[]" class="form-control" style="width:100%;">
                </div>
            `;

    // إضافة مجموعة الحقول الجديدة إلى الحاوية
    travelInfoContainer.appendChild(newTravelInfo);

    // تحديث العداد لضمان فريدة المعرفات الجديدة
    travelCount++;
});
///////////////////////////////////////////////////////// اضافه اقارب بالخارج//////////////////////////////////////////////////
let relativeAbroadCount = 1; // بدء العد من 1 حيث أن لدينا عنصر افتراضي

// دالة لإضافة بيانات الأقارب بالخارج
function addRelativeAbroad() {
    relativeAbroadCount++; // زيادة العداد عند إضافة قريب جديد
    var container = document.getElementById('relatives-abroad-contain');

    // إنشاء عنصر جديد لبيانات قريب بالخارج
    var newRelative = document.createElement('div');
    newRelative.className = 'relative-abroad-info';
    newRelative.style.marginBottom = '10px';
    newRelative.style.border = '1px solid #ccc';
    newRelative.style.padding = '10px';
    newRelative.style.borderRadius = '8px';

    newRelative.innerHTML = `
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <div class="relative-field">
                        <label for="relative_abroad_name_${relativeAbroadCount}">الاسم:</label>
                        <input type="text" id="relative_abroad_name_${relativeAbroadCount}" name="relative_abroad_name[]" class="form-control" required>
                    </div>
                    <div class="relative-field">
                        <label for="relative_abroad_relationship_${relativeAbroadCount}">درجة القرابة:</label>
                        <input type="text" id="relative_abroad_relationship_${relativeAbroadCount}" name="relative_abroad_relationship[]" class="form-control" required>
                    </div>
                    <div class="relative-field">
                        <label for="relative_abroad_country_${relativeAbroadCount}">الدولة المقيم فيها:</label>
                        <input type="text" id="relative_abroad_country_${relativeAbroadCount}" name="relative_abroad_country[]" class="form-control" required>
                    </div>
                    <div class="relative-field">
                        <label for="relative_abroad_reason_${relativeAbroadCount}">سبب الإقامة:</label>
                        <input type="text" id="relative_abroad_reason_${relativeAbroadCount}" name="relative_abroad_reason[]" class="form-control" required>
                    </div>
                    <div class="relative-field">
                        <label for="relative_abroad_nationality_${relativeAbroadCount}">الجنسية المكتسبة:</label>
                        <input type="text" id="relative_abroad_nationality_${relativeAbroadCount}" name="relative_abroad_nationality[]">
                    </div>
                </div>
            `;

    container.appendChild(newRelative);
}

// ربط الزر بالدالة
document.getElementById('add-relative-abroad-btn').addEventListener('click', addRelativeAbroad);

// إخفاء الزر "+" في البداية
document.getElementById('add-relative-abroad-btn').style.display = 'none';


//////////////////////////////////// اضافه اخوه جديده////////////////////////////////////////////////
let siblingCount = 1; // بدء العد من 1 حيث لدينا عنصر افتراضي

// دالة لإضافة بيانات الأخ أو الأخت
function addSibling() {
    siblingCount++; // زيادة العداد عند إضافة أخ أو أخت جديدة
    var container = document.getElementById('siblings_list');

    // إنشاء عنصر جديد لبيانات الأخ أو الأخت
    var newSibling = document.createElement('div');
    newSibling.className = 'single_sibling_info';
    newSibling.style.marginBottom = '10px';
    newSibling.style.border = '1px solid #ccc';
    newSibling.style.padding = '10px';
    newSibling.style.borderRadius = '8px';

    newSibling.innerHTML = `
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <div class="sibling-field">
                        <label for="sibling_full_name_${siblingCount}">الاسم الرباعي:</label>
                        <input type="text" id="sibling_full_name_${siblingCount}" name="sibling_full_name[]" class="form-control" required>
                    </div>
                    <div class="sibling-field">
                        <label for="sibling_birth_date_${siblingCount}">تاريخ الميلاد:</label>
                        <input type="date" id="sibling_birth_date_${siblingCount}" name="sibling_birth_date[]" class="form-control" required>
                    </div>
                    <div class="sibling-field">
                        <label for="sibling_job_title_${siblingCount}">الوظيفة:</label>
                        <input type="text" id="sibling_job_title_${siblingCount}" name="sibling_job_title[]" class="form-control" required>
                    </div>
                    <div class="sibling-field">
                        <label for="sibling_spouse_name_${siblingCount}">اسم الزوج/الزوجة:</label>
                        <input type="text" id="sibling_spouse_name_${siblingCount}" name="sibling_spouse_name[]" class="form-control">
                    </div>
                    <div class="sibling-field">
                        <label for="sibling_education_${siblingCount}">المؤهل:</label>
                        <input type="text" id="sibling_education_${siblingCount}" name="sibling_education[]" class="form-control">
                    </div>
                    <div class="sibling-field">
                        <label for="sibling_residence_${siblingCount}">محل الإقامة:</label>
                        <input type="text" id="sibling_residence_${siblingCount}" name="sibling_residence[]" class="form-control" required>
                    </div>
                </div>
            `;

    container.appendChild(newSibling);
}

// ربط الزر بالدالة
document.getElementById('add_sibling_btn').addEventListener('click', addSibling);

////////////////////////////////////////////// اضافه اقارب سبق اتهامهم///////////////////////////////////////////
let accusedCount = 1; // العد يبدأ من 1 بعد العنصر الافتراضي

// دالة لإضافة بيانات قريب متهم جديد
function addAccusedRelative() {
    accusedCount++; // زيادة العداد مع كل إضافة
    var container = document.getElementById('accused-relatives-contain');

    // إنشاء عنصر جديد لبيانات قريب متهم
    var newAccused = document.createElement('div');
    newAccused.className = 'accused-relative-inf';
    newAccused.style.marginBottom = '10px';
    newAccused.style.border = '1px solid #ccc';
    newAccused.style.padding = '10px';
    newAccused.style.borderRadius = '8px';

    newAccused.innerHTML = `
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <div class="accused-relative-field-group">
                        <label for="accused_name_${accusedCount}">الاسم:</label>
                        <input type="text" id="accused_name_${accusedCount}" name="accused_name[]" class="form-control" required>
                    </div>
                    <div class="accused-relative-field-group">
                        <label for="accused_relationship_${accusedCount}">درجة القرابة:</label>
                        <input type="text" id="accused_relationship_${accusedCount}" name="accused_relationship[]" class="form-control" required>
                    </div>
                    <div class="accused-relative-field-group">
                        <label for="accused_accusation_${accusedCount}">الاتهام:</label>
                        <input type="text" id="accused_accusation_${accusedCount}" name="accused_accusation[]" class="form-control" required>
                    </div>
                    <div class="accused-relative-field-group">
                        <label for="accused_judgment_${accusedCount}">الحكم:</label>
                        <input type="text" id="accused_judgment_${accusedCount}" name="accused_judgment[]" class="form-control" required>
                    </div>
                </div>
            `;

    container.appendChild(newAccused);
}

// ربط الزر بالدالة
document.getElementById('add-accused-relative-button').addEventListener('click', addAccusedRelative);


/////////////////////////////////////////password///////////////////////////////////////////////////////////

const passwordField = document.getElementById("exampleInputPassword2");
const togglePassword = document.querySelector(".ico i");
const togglePassword1 = document.querySelector(".tog i");
const passwordField1 = document.getElementById("exampleInputPassword3");
const togglePassword2 = document.querySelector(".toggg i");
const passwordField2 = document.getElementById("exampleInputPassword1");

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




const passwordForm = document.getElementById('passwordForm');
const password2 = document.getElementById('exampleInputPassword2');
const password3 = document.getElementById('exampleInputPassword3');
const submitButton = document.getElementById('submitButton');
const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

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
    e.preventDefault();  // منع إعادة تحميل الصفحة
    modal.show();  // عرض المودال
});

document.getElementById('confirmYesBtn').addEventListener('click', function () {
    // تنفيذ العملية المطلوبة عند الضغط على "نعم"
    passwordForm.submit();  // أرسل النموذج بعد تأكيد المستخدم
});

