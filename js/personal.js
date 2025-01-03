/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
        'overflow': 'visible'
    });
});
// **************image***************


//************************************* */ 


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

// **************image***************
document.getElementById('imageInput').addEventListener('change', function (event) {
    var fileInput = event.target;
    var profileImage = document.getElementById('profileImage');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Update the profile image source with the newly uploaded image
            profileImage.src = e.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(fileInput.files[0]);
    }
});
///////////////////////////////////////////////////////////////



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


////////////////////////////////////////////////////////////////////////////////////

function toggleSpouseInfo() {
    var maritalStatus = document.getElementById("marital_status").value;
    var spouseInfoDiv = document.getElementById("spouse-info");
    var childreninfo = document.getElementById("children-info");

    if (maritalStatus === "single") {
        spouseInfoDiv.style.display = "none";
        childreninfo.style.display = "none";

    } else {
        spouseInfoDiv.style.display = "block";
        childreninfo.style.display = "block";

    }
}
///////////////////////////////////////////////////////////////////
// Password Match Validation
function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const rePass = document.getElementById('re-pass').value;
    const matchError = document.getElementById('password-match-error');

    if (password !== rePass) {
        matchError.style.display = 'block';
        return false;
    } else {
        matchError.style.display = 'none';
        return true;
    }
}

// Bootstrap Validation Handling
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                const isPasswordValid = validatePasswordMatch();

                if (form.checkValidity() === false || !isPasswordValid) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
////////////////////////////////////////////////////////////////////////////////


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



//////////////////////////////////////////////////////////////////
// دالة لتبديل عرض الحقل الشرطي بناءً على اختيار المستخدم
function togglePoliceReason() {
    var policeReasonField = document.getElementById('police_reason');
    var isYesChecked = document.getElementById('police_yes').checked;

    if (isYesChecked) {
        policeReasonField.style.display = 'block'; // عرض الحقل
    } else {
        policeReasonField.style.display = 'none'; // إخفاء الحقل
    }
}

// إضافة حدث عند تغيير حالة الخيارات
document.querySelectorAll('input[name="police_report"]').forEach(function (element) {
    element.addEventListener('change', togglePoliceReason);
});

// التحقق من اختيار المستخدم عند تقديم النموذج
document.querySelector('form').addEventListener('submit', function (event) {
    var policeYes = document.getElementById('police_yes').checked;
    var policeNo = document.getElementById('police_no').checked;
    var errorMessage = document.getElementById('radio-error');

    if (!policeYes && !policeNo) {
        // إذا لم يتم اختيار أي من الخيارات
        errorMessage.style.display = 'block'; // عرض رسالة الخطأ
        event.preventDefault(); // منع تقديم النموذج
    } else {
        errorMessage.style.display = 'none'; // إخفاء رسالة الخطأ
        var policeReasonField = document.getElementById('police_reason');
        var policeReasonInput = document.getElementById('police_reason_input');

        if (policeReasonField.style.display === 'block' && !policeReasonInput.value) {
            // إذا كان الحقل مرئيًا ولم يتم تعبئته
            policeReasonInput.classList.add('is-invalid'); // إضافة الفئة لعرض الخطأ
            event.preventDefault(); // منع تقديم النموذج
        } else {
            policeReasonInput.classList.remove('is-invalid'); // إزالة الفئة إذا كان مدخل صحيحًا
        }
    }
});
/////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////// Show or hide travel details based on user choice
document.querySelectorAll('input[name="travel_abroad"]').forEach((input) => {
    input.addEventListener('change', function () {
        const travelDetails = document.getElementById('travel-details');
        if (this.value === 'yes') {
            travelDetails.style.display = 'block';
        } else {
            travelDetails.style.display = 'none';
        }
    });
});

// Add new travel info section
document.getElementById('add-travel-info-btn').addEventListener('click', function () {
    const container = document.getElementById('travel-info-contain');
    const newInfo = document.createElement('div');
    newInfo.classList.add('travel-info');
    newInfo.style.position = 'relative'; // Enable positioning for delete button
    newInfo.innerHTML = `
        <!-- Country Name -->
        
        <div class="form-group relative-field">
            <label for="travel_country_name">اسم الدولة:</label>
            <input type="text" name="travel_country_name[]" class="form-control" required>
        </div>
    
        <!-- Travel Times -->
        <div class="form-group relative-field">
            <label for="travel_times">عدد المرات:</label>
            <input type="number" name="travel_times[]" class="form-control" required>
        </div>
    
        <!-- Travel Duration -->
        <div class="form-group relative-field">
            <label for="travel_duration">المدة:</label>
            <input type="text" name="travel_duration[]" class="form-control" required>
        </div>
    
        <!-- Travel Date -->
        <div class="form-group r col-lg-12">
    <label for="travel_date">التاريخ:</label>
    <input type="date" name="travel_date[]" class="form-control" style="width: 100%;" required>
</div>


        <!-- Delete Button -->
         <button type="button" class="remove-travel-info-btn" style="background-color: #ff4d4d; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 18px; cursor: pointer;  top: 10px; right: 10px;">&times;</button>
    `;
    container.appendChild(newInfo);

    // Add event listener for delete button
    newInfo.querySelector('.remove-travel-info-btn').addEventListener('click', function () {
        container.removeChild(newInfo); // Remove the current travel info section
    });
});

////////////////////////////////////////////////////

document.getElementById('add-child-btn').addEventListener('click', function () {
    const container = document.getElementById('children-contain');
    const newChild = document.createElement('div');
    newChild.classList.add('child-inf');
    newChild.style.marginBottom = '10px';
    newChild.style.border = '1px solid #ccc';
    newChild.style.padding = '10px';
    newChild.style.borderRadius = '8px';

    newChild.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="child-field">
                <label for="child_first_name"  style="margin-right: 40px;">الاسم الرباعي:</label>
                <input type="text" name="child_first_name[]" class="form-control" required>
            </div>
            <div class="child-field">
                <label for="child_dob">تاريخ الميلاد:</label>
                <input type="date" name="child_dob[]" class="form-control" required>
            </div>
            <div class="child-field">
                <label for="child_place_of_birth">محل الميلاد:</label>
                <input type="text" name="child_place_of_birth[]" class="form-control" required>
            </div>
            <div class="child-field">
                <label for="child_qualification">المؤهل:</label>
                <input type="text" name="child_qualification[]" class="form-control">
            </div>
            <div class="child-field">
                <label for="child_job">الوظيفة:</label>
                <input type="text" name="child_job[]" class="form-control">
            </div>
            <div class="child-field">
                <label for="child_address">محل الإقامة:</label>
                <input type="text" name="child_address[]" class="form-control" required>
            </div>
        </div>
        <button type="button" class="remove-child-btn" style="background-color: #ff4d4d; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 18px; cursor: pointer; top: 10px; right: 10px;">&times;</button>
    `;

    container.appendChild(newChild);

    // إضافة حدث الحذف لزر الحذف الجديد
    newChild.querySelector('.remove-child-btn').addEventListener('click', function () {
        newChild.remove();
    });
});


/////////////////////////////////////////
function toggleRelativesAbroadInfo() {
    const relativesAbroadInfoDiv = document.getElementById("relatives-abroad-inf");
    const hasRelativesAbroad = document.querySelector('input[name="has_relatives_abroad"]:checked');

    if (hasRelativesAbroad && hasRelativesAbroad.value === "yes") {
        relativesAbroadInfoDiv.style.display = "block";
    } else {
        relativesAbroadInfoDiv.style.display = "none";
    }
}

document.getElementById('add-relative-abroad-btn').addEventListener('click', function () {
    const container = document.getElementById('relatives-abroad-contain');
    const newRelative = document.createElement('div');
    newRelative.classList.add('relative-abroad-info');
    newRelative.style.marginBottom = '10px';
    newRelative.style.border = '1px solid #ccc';
    newRelative.style.padding = '10px';
    newRelative.style.borderRadius = '8px';
    newRelative.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="relative-field">
                <label for="relative_abroad_name">الاسم:</label>
                <input type="text" name="relative_abroad_name[]" class="form-control" required>
            </div>
            <div class="relative-field">
                <label for="relative_abroad_relationship">درجة القرابة:</label>
                <input type="text" name="relative_abroad_relationship[]" class="form-control" required>
            </div>
            <div class="relative-field">
                <label for="relative_abroad_country">الدولة المقيم فيها:</label>
                <input type="text" name="relative_abroad_country[]" class="form-control" required>
            </div>
            <div class="relative-field">
                <label for="relative_abroad_reason">سبب الإقامة:</label>
                <input type="text" name="relative_abroad_reason[]" class="form-control" required>
            </div>
            <div class="relative-field">
                <label for="relative_abroad_nationality">الجنسية المكتسبة:</label>
                <input type="text" name="relative_abroad_nationality[]">
            </div>
        </div>
        <button type="button" class="remove-relative-abroad-btn" style="background-color: #ff4d4d; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 18px; cursor: pointer;  top: 10px; right: 10px;">&times;</button>
    `;
    container.appendChild(newRelative);

    // إضافة حدث الحذف لزر الحذف الجديد
    newRelative.querySelector('.remove-relative-abroad-btn').addEventListener('click', function () {
        newRelative.remove();
    });
});

/////////////////////////////////////////////////////////////

function toggleSiblingsInfo() {
    const siblingsInfoDiv = document.getElementById("siblings_info_container");
    const hasSiblings = document.querySelector('input[name="has_siblings"]:checked');

    if (hasSiblings && hasSiblings.value === "yes") {
        siblingsInfoDiv.style.display = "block";
    } else {
        siblingsInfoDiv.style.display = "none";
    }
}

document.getElementById('add_sibling_btn').addEventListener('click', function () {
    const container = document.getElementById('siblings_list');
    const newSibling = document.createElement('div');
    newSibling.classList.add('single_sibling_info');
    newSibling.style.marginBottom = '10px';
    newSibling.style.border = '1px solid #ccc';
    newSibling.style.padding = '10px';
    newSibling.style.borderRadius = '8px';
    newSibling.style.position = 'relative'; // Enable positioning for delete button
    newSibling.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="form-group">
                <label for="sibling_full_name">الاسم الرباعي:</label>
                <input type="text" name="sibling_full_name[]" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="sibling_birth_date">تاريخ الميلاد:</label>
                <input type="date" name="sibling_birth_date[]" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="sibling_job_title">الوظيفة:</label>
                <input type="text" name="sibling_job_title[]" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="sibling_spouse_name">اسم الزوج/الزوجة:</label>
                <input type="text" name="sibling_spouse_name[]" class="form-control">
            </div>
            <div class="form-group">
                <label for="sibling_education">المؤهل:</label>
                <input type="text" name="sibling_education[]" class="form-control">
            </div>
            <div class="form-group">
                <label for="sibling_residence">محل الإقامة:</label>
                <input type="text" name="sibling_residence[]" class="form-control" required>
            </div>
        </div>
        <button type="button" class="remove_sibling_btn" style="background-color: #ff4d4d; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 18px; cursor: pointer;  top: 10px; right: 10px;">&times;</button>
    `;
    container.appendChild(newSibling);

    // Add event listener for the delete button
    newSibling.querySelector('.remove_sibling_btn').addEventListener('click', function () {
        container.removeChild(newSibling);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////
function toggleAccusedRelativesInfo() {
    const accusedRelativesDiv = document.getElementById("accused-relative");
    const hasAccusedRelatives = document.querySelector('input[name="accused_relative"]:checked');

    if (hasAccusedRelatives && hasAccusedRelatives.value === "yes") {
        accusedRelativesDiv.style.display = "block";
    } else {
        accusedRelativesDiv.style.display = "none";
    }
}

document.getElementById('add-accused-relative-button').addEventListener('click', function () {
    const container = document.getElementById('accused-relatives-contain');
    const newAccused = document.createElement('div');
    newAccused.classList.add('accused-relative-inf');
    newAccused.style.marginBottom = '10px';
    newAccused.style.border = '1px solid #ccc';
    newAccused.style.padding = '10px';
    newAccused.style.borderRadius = '8px';
    newAccused.style.position = 'relative'; // Enable positioning for delete button
    newAccused.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="accused-relative-field-group">
                <label>الاسم:</label>
                <input type="text" name="accused_name[]" class="form-control" required>
            </div>
            <div class="accused-relative-field-group">
                <label>درجة القرابة:</label>
                <input type="text" name="accused_relationship[]" class="form-control" required>
            </div>
            <div class="accused-relative-field-group">
                <label>الاتهام:</label>
                <input type="text" name="accused_accusation[]" class="form-control" required>
            </div>
            <div class="accused-relative-field-group">
                <label>الحكم:</label>
                <input type="text" name="accused_judgment[]" class="form-control" required>
            </div>
        </div>
        <button type="button" class="remove-accused-relative-btnn" style="background-color: #ff4d4d; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; font-size: 18px; cursor: pointer;  top: 10px; right: 10px;">&times;</button>
    `;
    container.appendChild(newAccused);

    // Add event listener for the delete button
    newAccused.querySelector('.remove-accused-relative-btnn').addEventListener('click', function () {
        container.removeChild(newAccused);
    });
});

////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('personal-info-form');

    var textInputs = form.querySelectorAll('input[type="text"]');

    textInputs.forEach(function (input) {
        input.classList.add('cont');
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // تعيين القيم الأولية
    var initialValues = {};
    var inputs = document.querySelectorAll('#personal-info-form input');
    inputs.forEach(function (input) {
        if (input.type === 'file') {
            initialValues[input.id] = input.files.length > 0 ? input.files[0].name : ''; // لتحميل الملفات
        } else {
            initialValues[input.id] = input.value;
        }
    });

    // إضافة مستمع للأحداث لحقول الإدخال
    document.getElementById('imageInput').addEventListener('change', checkChanges);
    var textInputFields = document.querySelectorAll('.cont');
    textInputFields.forEach(function (input) {
        input.addEventListener('input', checkChanges);
    });

    // وظيفة للتحقق من التغييرات وتمكين/تعطيل زر "حفظ التعديلات"
    function checkChanges() {
        var saveChangesBtn = document.getElementById('saveChangesBtn');
        var changesDetected = false;

        inputs.forEach(function (input) {
            if (input.type === 'file') {
                if (input.files.length > 0) {
                    changesDetected = true;
                }
            } else {
                if (input.value !== initialValues[input.id]) {
                    changesDetected = true;
                }
            }
        });

        saveChangesBtn.disabled = !changesDetected;
    }

    // إضافة مستمع لزر "حفظ التعديلات"
    document.getElementById('saveChangesBtn').addEventListener('click', function () {
        var formData = new FormData(document.getElementById('personal-info-form input'));

        fetch('/save-form-data', { // استبدل بالمسار الفعلي لحفظ البيانات
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('التعديلات تم حفظها بنجاح!');
                    initialValues = {}; // إعادة تعيين القيم الأولية بعد الحفظ
                    checkChanges(); // إعادة التحقق من التغييرات
                } else {
                    alert('فشل حفظ التعديلات. حاول مرة أخرى.');
                }
            })
            .catch(error => {
                console.error('حدث خطأ:', error);
                alert('حدث خطأ أثناء حفظ التعديلات.');
            });
    });
});


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

