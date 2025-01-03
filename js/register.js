
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


document.getElementById('marital_status').addEventListener('change', function () {
    var maritalStatus = this.value;
    var spouseInfo = document.getElementById('spouse-info');
    var childrenInfo = document.getElementById('children-info');
    var spouseTab = document.getElementById('spouse-tab');
    var childrenTab = document.getElementById('children-tab');

    if (maritalStatus === 'single') {
        spouseInfo.style.display = 'none';
        childrenInfo.style.display = 'none';
        spouseTab.style.display = 'none';
        childrenTab.style.display = 'none';
    } else {
        spouseTab.style.display = 'block';
        if (maritalStatus === 'married') {
            spouseInfo.style.display = 'block';
            childrenInfo.style.display = 'block';
            childrenTab.style.display = 'block';
        } else {
            spouseInfo.style.display = 'block';
            childrenInfo.style.display = 'none';
            childrenTab.style.display = 'none';
        }
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



document.querySelector('form').addEventListener('submit', function (event) {
    var religiousMovementYes = document.getElementById('religious_movement_yes').checked;
    var religiousMovementNo = document.getElementById('religious_movement_no').checked;
    var errorMessage = document.getElementById('religious-movement-error');

    if (!religiousMovementYes && !religiousMovementNo) {
        // إذا لم يتم اختيار أي من الخيارات
        errorMessage.style.display = 'block'; // عرض رسالة الخطأ
        event.preventDefault(); // منع تقديم النموذج
    } else {
        errorMessage.style.display = 'none'; // إخفاء رسالة الخطأ
    }
});
////////////////////////////////////////////////////////////////////////////////

// Show or hide travel details based on user choice
document.querySelectorAll('input[name="travel_abroad"]').forEach((input) => {
    input.addEventListener('change', function () {
        const travelDetails = document.getElementById('travel_details');
        if (this.value === 'yes') {
            travelDetails.style.display = 'block';
        } else {
            travelDetails.style.display = 'none';
        }
    });
});

// Add new travel info section
document.getElementById('add-travel-info-btn').addEventListener('click', function () {
    const container = document.getElementById('travel-info-container');
    const newInfo = document.createElement('div');
    newInfo.classList.add('travel-info');
    newInfo.innerHTML = `
         <!-- Country Name -->
                <div class="form-group  relative-field ">
                    <label for="country_name">اسم الدولة:</label>
                    <input type="text" id="country_name" name="country_name[]" class="form-control" required>
                </div>
        
                <!-- Travel Times -->
                <div class="form-group  relative-field ">
                    <label for="travel_times">عدد المرات:</label>
                    <input type="number" id="travel_times" name="travel_times[]" class="form-control" required>
                </div>
        
                <!-- Travel Duration -->
                <div class="form-group   relative-field ">
                    <label for="travel_duration">المدة:</label>
                    <input type="text" id="travel_duration" name="travel_duration[]" class="form-control" required>
                </div>
        
                <!-- Travel Date -->
                <div class="form-group    relative-field"   >
                    <label for="travel_date">التاريخ:</label>
                    <input type="date" id="travel_date" name="travel_date[]" class="form-control" required>
                </div>

    `;
    container.appendChild(newInfo);
});

// Form validation
document.querySelector('form').addEventListener('submit', function (event) {
    const travelYes = document.getElementById('travel_yes').checked;
    const travelNo = document.getElementById('travel_no').checked;
    const errorDiv = document.getElementById('travel-error');
    let valid = true;

    // Check if a value is selected for travel abroad
    if (!travelYes && !travelNo) {
        errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن السفر إلى الخارج.';
        errorDiv.style.display = 'block';
        valid = false;
    } else {
        errorDiv.style.display = 'none';
        if (travelYes) {
            // Validate travel details
            const travelInfos = document.querySelectorAll('#travel-info-container .travel-info');
            travelInfos.forEach(info => {
                const inputs = info.querySelectorAll('input');
                inputs.forEach(input => {
                    if (!input.value) {
                        valid = false;
                    }
                });
            });
            if (!valid) {
                errorDiv.textContent = 'يرجى تعبئة جميع تفاصيل السفر.';
                errorDiv.style.display = 'block';
            } else {
                errorDiv.style.display = 'none';
            }
        }
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});
////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    const addChildBtn = document.getElementById('add-child-btn');
    const childrenContainer = document.getElementById('children-container');

    addChildBtn.addEventListener('click', function () {
        // Clone the first child-info div and clear its input values
        const newChildInfo = document.querySelector('.child-info').cloneNode(true);
        newChildInfo.querySelectorAll('input').forEach(input => input.value = '');
        childrenContainer.appendChild(newChildInfo);
    });

    childrenContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-child-btn')) {
            e.target.parentElement.remove();
        }
    });
});


/////////////////////////////////////////
function toggleRelativesInfo() {
    const relativesInfoDiv = document.getElementById("relatives-abroad-info");
    const hasRelativesAbroad = document.querySelector('input[name="relatives_abroad"]:checked');

    if (hasRelativesAbroad && hasRelativesAbroad.value === "yes") {
        relativesInfoDiv.style.display = "block";
    } else {
        relativesInfoDiv.style.display = "none";
    }
}

document.getElementById('add-relative-btn').addEventListener('click', function () {
    const container = document.getElementById('relatives-container');
    const newRelative = document.createElement('div');
    newRelative.classList.add('relative-info');
    newRelative.style.marginBottom = '10px';
    newRelative.style.border = '1px solid #ccc';
    newRelative.style.padding = '10px';
    newRelative.style.borderRadius = '8px';
    newRelative.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="relative-field">
                <label for="relative_name">الاسم:</label>
                <input type="text" name="relative_name[]"class="form-control " required>
            </div>
            <div class="relative-field">
                <label for="relative_relationship">درجة القرابة:</label>
                <input type="text" name="relative_relationship[]" class="form-control " required>
            </div>
            <div class="relative-field">
                <label for="relative_country">الدولة المقيم فيها:</label>
                <input type="text" name="relative_country[]" class="form-control " required>
            </div>
            <div class="relative-field">
                <label for="relative_reason">سبب الإقامة:</label>
                <input type="text" name="relative_reason[]" class="form-control " required>
            </div>
            <div class="relative-field">
                <label for="relative_nationality">الجنسية المكتسبة:</label>
                <input type="text" name="relative_nationality[]" >
            </div>
        </div>
    `;
    container.appendChild(newRelative);
});

document.querySelector('form').addEventListener('submit', function (event) {
    const hasRelativesAbroad = document.querySelector('input[name="relatives_abroad"]:checked');
    const errorDiv = document.getElementById('relatives-error');
    let valid = true;

    if (!hasRelativesAbroad) {
        errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الأقارب بالخارج.';
        errorDiv.style.display = 'block';
        valid = false;
    } else if (hasRelativesAbroad.value === 'yes') {
        // Validate relatives info
        const relativeInfos = document.querySelectorAll('#relatives-container .relative-info');
        relativeInfos.forEach(info => {
            const inputs = info.querySelectorAll('input');
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                }
            });
        });
        if (!valid) {
            errorDiv.textContent = 'يرجى تعبئة جميع تفاصيل الأقارب.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    } else {
        errorDiv.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});
/////////////////////////////////////////////////////////////

function toggleSiblingsInfo() {
    const siblingsInfoDiv = document.getElementById("siblings-info");
    const hasSiblings = document.querySelector('input[name="siblings"]:checked');

    if (hasSiblings && hasSiblings.value === "yes") {
        siblingsInfoDiv.style.display = "block";
    } else {
        siblingsInfoDiv.style.display = "none";
    }
}

document.getElementById('add-sibling-btn').addEventListener('click', function () {
    const container = document.getElementById('siblings-container');
    const newSibling = document.createElement('div');
    newSibling.classList.add('sibling-info');
    newSibling.style.marginBottom = '10px';
    newSibling.style.border = '1px solid #ccc';
    newSibling.style.padding = '10px';
    newSibling.style.borderRadius = '8px';
    newSibling.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="sibling-field">
                <label for="sibling_name">الاسم الرباعي:</label>
                <input type="text" name="sibling_name[]" class="form-control " required>
            </div>
            <div class="sibling-field">
                <label for="sibling_dob">تاريخ الميلاد:</label>
                <input type="date" name="sibling_dob[]" class="form-control " required>
            </div>
            <div class="sibling-field">
                <label for="sibling_job">الوظيفة:</label>
                <input type="text" name="sibling_job[]"    class="form-control " required>
            </div>
            <div class="sibling-field">
                <label for="sibling_spouse">اسم الزوج/الزوجة:</label>
                <input type="text" name="sibling_spouse[]" class="form-control">
            </div>
            <div class="sibling-field">
                <label for="sibling_qualification">المؤهل:</label>
                <input type="text" name="sibling_qualification[]"  class="form-control">
            </div>
            <div class="sibling-field">
                <label for="sibling_address">محل الإقامة:</label >
                <input type="text" name="sibling_address[]" class="form-control " required>
            </div>
        </div>
    `;
    container.appendChild(newSibling);
});

document.querySelector('form').addEventListener('submit', function (event) {
    const hasSiblings = document.querySelector('input[name="siblings"]:checked');
    const errorDiv = document.getElementById('siblings-error');
    let valid = true;

    if (!hasSiblings) {
        errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الإخوة والأخوات.';
        errorDiv.style.display = 'block';
        valid = false;
    } else if (hasSiblings.value === 'yes') {
        // Validate sibling info
        const siblingInfos = document.querySelectorAll('#siblings-container .sibling-info');
        siblingInfos.forEach(info => {
            const inputs = info.querySelectorAll('input[required]');
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                }
            });
        });
        if (!valid) {
            errorDiv.textContent = 'يرجى تعبئة جميع تفاصيل الإخوة والأخوات.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    } else {
        errorDiv.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////
function toggleAccusedRelativesInfo() {
    var hasAccusedRelatives = document.querySelector('input[name="accused_relatives"]:checked');
    var accusedRelativesDiv = document.getElementById("accused-relatives");

    if (hasAccusedRelatives && hasAccusedRelatives.value === "yes") {
        accusedRelativesDiv.style.display = "block";
    } else {
        accusedRelativesDiv.style.display = "none";
    }
}

document.getElementById('add-accused-relative-button').addEventListener('click', function () {
    const container = document.getElementById('accused-relatives-container');
    const siblingCount = container.children.length;
    const newAccused = document.createElement('div');
    newAccused.classList.add('accused-relative-info');
    newAccused.style.marginBottom = '10px';
    newAccused.style.border = '1px solid #ccc';
    newAccused.style.padding = '10px';
    newAccused.style.borderRadius = '8px';
    newAccused.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            <div class="accused-relative-field-group">
                <label for="accused_name_${siblingCount}">الاسم:</label>
                <input type="text" id="accused_name_${siblingCount}" name="accused_name[]" class="form-control " required>
            </div>
            <div class="accused-relative-field-group">
                <label for="accused_relationship_${siblingCount}">درجة القرابة:</label>
                <input type="text" id="accused_relationship_${siblingCount}" name="accused_relationship[]" class="form-control " required>
            </div>
            <div class="accused-relative-field-group">
                <label for="accused_accusation_${siblingCount}">الاتهام:</label>
                <input type="text" id="accused_accusation_${siblingCount}" name="accused_accusation[]" class="form-control " required>
            </div>
            <div class="accused-relative-field-group">
                <label for="accused_judgment_${siblingCount}">الحكم:</label>
                <input type="text" id="accused_judgment_${siblingCount}" name="accused_judgment[]" class="form-control " required>
            </div>
        </div>
    `;
    container.appendChild(newAccused);
});

document.querySelector('form').addEventListener('submit', function (event) {
    const hasAccusedRelatives = document.querySelector('input[name="accused_relatives"]:checked');
    const errorDiv = document.getElementById('accused-error');
    let valid = true;

    if (!hasAccusedRelatives) {
        errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الأقارب المتهمين.';
        errorDiv.style.display = 'block';
        valid = false;
    } else if (hasAccusedRelatives.value === 'yes') {
        // Validate accused relative info
        const accusedInfos = document.querySelectorAll('#accused-relatives-container .accused-relative-info');
        accusedInfos.forEach(info => {
            const inputs = info.querySelectorAll('input[required]');
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                }
            });
        });
        if (!valid) {
            errorDiv.textContent = 'يرجى تعبئة جميع تفاصيل الأقارب المتهمين.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    } else {
        errorDiv.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    }
});
/* 1. Proloder */
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
        'overflow': 'visible'
    });
});


// *******************************
// *********code******************
//********************************
const roleSelect = document.getElementById('marital_statuss');
const nationalIdInput = document.getElementById('code');
const submitButton = document.getElementById('submit_button');

// Function to check if role is HR and code is @hr.saqr
function checkConditions() {
    if (roleSelect.value === 'HR' && nationalIdInput.value === '@hr.saqr') {
        submitButton.disabled = false; // Enable the submit button
    } else if (roleSelect.value === 'supervisor' && nationalIdInput.value === '@super.saqr') {
        submitButton.disabled = false; // Enable the submit button

    }
    else if (roleSelect.value === 'employee' && nationalIdInput.value === '@emp.saqr') {
        submitButton.disabled = false; // Enable the submit button

    }
    else {
        submitButton.disabled = true; // Disable the submit button
    }
}

// Event listeners to trigger the check when role or input changes
roleSelect.addEventListener('change', checkConditions);
nationalIdInput.addEventListener('input', checkConditions);