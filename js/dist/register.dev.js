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
}; ////////////////////////////////////////////////////////////////////////////////////


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
} ///////////////////////////////////////////////////////////////////
// Password Match Validation


function validatePasswordMatch() {
  var password = document.getElementById('password').value;
  var rePass = document.getElementById('re-pass').value;
  var matchError = document.getElementById('password-match-error');

  if (password !== rePass) {
    matchError.style.display = 'block';
    return false;
  } else {
    matchError.style.display = 'none';
    return true;
  }
} // Bootstrap Validation Handling


(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        var isPasswordValid = validatePasswordMatch();

        if (form.checkValidity() === false || !isPasswordValid) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); ////////////////////////////////////////////////////////////////////////////////


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
}); //////////////////////////////////////////////////////////////////
// دالة لتبديل عرض الحقل الشرطي بناءً على اختيار المستخدم

function togglePoliceReason() {
  var policeReasonField = document.getElementById('police_reason');
  var isYesChecked = document.getElementById('police_yes').checked;

  if (isYesChecked) {
    policeReasonField.style.display = 'block'; // عرض الحقل
  } else {
    policeReasonField.style.display = 'none'; // إخفاء الحقل
  }
} // إضافة حدث عند تغيير حالة الخيارات


document.querySelectorAll('input[name="police_report"]').forEach(function (element) {
  element.addEventListener('change', togglePoliceReason);
}); // التحقق من اختيار المستخدم عند تقديم النموذج

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
}); /////////////////////////////////////////////////////////////////

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
}); ////////////////////////////////////////////////////////////////////////////////
// Show or hide travel details based on user choice

document.querySelectorAll('input[name="travel_abroad"]').forEach(function (input) {
  input.addEventListener('change', function () {
    var travelDetails = document.getElementById('travel_details');

    if (this.value === 'yes') {
      travelDetails.style.display = 'block';
    } else {
      travelDetails.style.display = 'none';
    }
  });
}); // Add new travel info section

document.getElementById('add-travel-info-btn').addEventListener('click', function () {
  var container = document.getElementById('travel-info-container');
  var newInfo = document.createElement('div');
  newInfo.classList.add('travel-info');
  newInfo.innerHTML = "\n         <!-- Country Name -->\n                <div class=\"form-group  relative-field \">\n                    <label for=\"country_name\">\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0644\u0629:</label>\n                    <input type=\"text\" id=\"country_name\" name=\"country_name[]\" class=\"form-control\" required>\n                </div>\n        \n                <!-- Travel Times -->\n                <div class=\"form-group  relative-field \">\n                    <label for=\"travel_times\">\u0639\u062F\u062F \u0627\u0644\u0645\u0631\u0627\u062A:</label>\n                    <input type=\"number\" id=\"travel_times\" name=\"travel_times[]\" class=\"form-control\" required>\n                </div>\n        \n                <!-- Travel Duration -->\n                <div class=\"form-group   relative-field \">\n                    <label for=\"travel_duration\">\u0627\u0644\u0645\u062F\u0629:</label>\n                    <input type=\"text\" id=\"travel_duration\" name=\"travel_duration[]\" class=\"form-control\" required>\n                </div>\n        \n                <!-- Travel Date -->\n                <div class=\"form-group    relative-field\"   >\n                    <label for=\"travel_date\">\u0627\u0644\u062A\u0627\u0631\u064A\u062E:</label>\n                    <input type=\"date\" id=\"travel_date\" name=\"travel_date[]\" class=\"form-control\" required>\n                </div>\n\n    ";
  container.appendChild(newInfo);
}); // Form validation

document.querySelector('form').addEventListener('submit', function (event) {
  var travelYes = document.getElementById('travel_yes').checked;
  var travelNo = document.getElementById('travel_no').checked;
  var errorDiv = document.getElementById('travel-error');
  var valid = true; // Check if a value is selected for travel abroad

  if (!travelYes && !travelNo) {
    errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن السفر إلى الخارج.';
    errorDiv.style.display = 'block';
    valid = false;
  } else {
    errorDiv.style.display = 'none';

    if (travelYes) {
      // Validate travel details
      var travelInfos = document.querySelectorAll('#travel-info-container .travel-info');
      travelInfos.forEach(function (info) {
        var inputs = info.querySelectorAll('input');
        inputs.forEach(function (input) {
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
  } // Prevent form submission if validation fails


  if (!valid) {
    event.preventDefault();
  }
}); ////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var addChildBtn = document.getElementById('add-child-btn');
  var childrenContainer = document.getElementById('children-container');
  addChildBtn.addEventListener('click', function () {
    // Clone the first child-info div and clear its input values
    var newChildInfo = document.querySelector('.child-info').cloneNode(true);
    newChildInfo.querySelectorAll('input').forEach(function (input) {
      return input.value = '';
    });
    childrenContainer.appendChild(newChildInfo);
  });
  childrenContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-child-btn')) {
      e.target.parentElement.remove();
    }
  });
}); /////////////////////////////////////////

function toggleRelativesInfo() {
  var relativesInfoDiv = document.getElementById("relatives-abroad-info");
  var hasRelativesAbroad = document.querySelector('input[name="relatives_abroad"]:checked');

  if (hasRelativesAbroad && hasRelativesAbroad.value === "yes") {
    relativesInfoDiv.style.display = "block";
  } else {
    relativesInfoDiv.style.display = "none";
  }
}

document.getElementById('add-relative-btn').addEventListener('click', function () {
  var container = document.getElementById('relatives-container');
  var newRelative = document.createElement('div');
  newRelative.classList.add('relative-info');
  newRelative.style.marginBottom = '10px';
  newRelative.style.border = '1px solid #ccc';
  newRelative.style.padding = '10px';
  newRelative.style.borderRadius = '8px';
  newRelative.innerHTML = "\n        <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n            <div class=\"relative-field\">\n                <label for=\"relative_name\">\u0627\u0644\u0627\u0633\u0645:</label>\n                <input type=\"text\" name=\"relative_name[]\"class=\"form-control \" required>\n            </div>\n            <div class=\"relative-field\">\n                <label for=\"relative_relationship\">\u062F\u0631\u062C\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629:</label>\n                <input type=\"text\" name=\"relative_relationship[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"relative-field\">\n                <label for=\"relative_country\">\u0627\u0644\u062F\u0648\u0644\u0629 \u0627\u0644\u0645\u0642\u064A\u0645 \u0641\u064A\u0647\u0627:</label>\n                <input type=\"text\" name=\"relative_country[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"relative-field\">\n                <label for=\"relative_reason\">\u0633\u0628\u0628 \u0627\u0644\u0625\u0642\u0627\u0645\u0629:</label>\n                <input type=\"text\" name=\"relative_reason[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"relative-field\">\n                <label for=\"relative_nationality\">\u0627\u0644\u062C\u0646\u0633\u064A\u0629 \u0627\u0644\u0645\u0643\u062A\u0633\u0628\u0629:</label>\n                <input type=\"text\" name=\"relative_nationality[]\" >\n            </div>\n        </div>\n    ";
  container.appendChild(newRelative);
});
document.querySelector('form').addEventListener('submit', function (event) {
  var hasRelativesAbroad = document.querySelector('input[name="relatives_abroad"]:checked');
  var errorDiv = document.getElementById('relatives-error');
  var valid = true;

  if (!hasRelativesAbroad) {
    errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الأقارب بالخارج.';
    errorDiv.style.display = 'block';
    valid = false;
  } else if (hasRelativesAbroad.value === 'yes') {
    // Validate relatives info
    var relativeInfos = document.querySelectorAll('#relatives-container .relative-info');
    relativeInfos.forEach(function (info) {
      var inputs = info.querySelectorAll('input');
      inputs.forEach(function (input) {
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
}); /////////////////////////////////////////////////////////////

function toggleSiblingsInfo() {
  var siblingsInfoDiv = document.getElementById("siblings-info");
  var hasSiblings = document.querySelector('input[name="siblings"]:checked');

  if (hasSiblings && hasSiblings.value === "yes") {
    siblingsInfoDiv.style.display = "block";
  } else {
    siblingsInfoDiv.style.display = "none";
  }
}

document.getElementById('add-sibling-btn').addEventListener('click', function () {
  var container = document.getElementById('siblings-container');
  var newSibling = document.createElement('div');
  newSibling.classList.add('sibling-info');
  newSibling.style.marginBottom = '10px';
  newSibling.style.border = '1px solid #ccc';
  newSibling.style.padding = '10px';
  newSibling.style.borderRadius = '8px';
  newSibling.innerHTML = "\n        <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n            <div class=\"sibling-field\">\n                <label for=\"sibling_name\">\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0631\u0628\u0627\u0639\u064A:</label>\n                <input type=\"text\" name=\"sibling_name[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"sibling-field\">\n                <label for=\"sibling_dob\">\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F:</label>\n                <input type=\"date\" name=\"sibling_dob[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"sibling-field\">\n                <label for=\"sibling_job\">\u0627\u0644\u0648\u0638\u064A\u0641\u0629:</label>\n                <input type=\"text\" name=\"sibling_job[]\"    class=\"form-control \" required>\n            </div>\n            <div class=\"sibling-field\">\n                <label for=\"sibling_spouse\">\u0627\u0633\u0645 \u0627\u0644\u0632\u0648\u062C/\u0627\u0644\u0632\u0648\u062C\u0629:</label>\n                <input type=\"text\" name=\"sibling_spouse[]\" class=\"form-control\">\n            </div>\n            <div class=\"sibling-field\">\n                <label for=\"sibling_qualification\">\u0627\u0644\u0645\u0624\u0647\u0644:</label>\n                <input type=\"text\" name=\"sibling_qualification[]\"  class=\"form-control\">\n            </div>\n            <div class=\"sibling-field\">\n                <label for=\"sibling_address\">\u0645\u062D\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629:</label >\n                <input type=\"text\" name=\"sibling_address[]\" class=\"form-control \" required>\n            </div>\n        </div>\n    ";
  container.appendChild(newSibling);
});
document.querySelector('form').addEventListener('submit', function (event) {
  var hasSiblings = document.querySelector('input[name="siblings"]:checked');
  var errorDiv = document.getElementById('siblings-error');
  var valid = true;

  if (!hasSiblings) {
    errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الإخوة والأخوات.';
    errorDiv.style.display = 'block';
    valid = false;
  } else if (hasSiblings.value === 'yes') {
    // Validate sibling info
    var siblingInfos = document.querySelectorAll('#siblings-container .sibling-info');
    siblingInfos.forEach(function (info) {
      var inputs = info.querySelectorAll('input[required]');
      inputs.forEach(function (input) {
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
}); ////////////////////////////////////////////////////////////////////////////////////////////////

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
  var container = document.getElementById('accused-relatives-container');
  var siblingCount = container.children.length;
  var newAccused = document.createElement('div');
  newAccused.classList.add('accused-relative-info');
  newAccused.style.marginBottom = '10px';
  newAccused.style.border = '1px solid #ccc';
  newAccused.style.padding = '10px';
  newAccused.style.borderRadius = '8px';
  newAccused.innerHTML = "\n        <div style=\"display: flex; flex-wrap: wrap; gap: 10px;\">\n            <div class=\"accused-relative-field-group\">\n                <label for=\"accused_name_".concat(siblingCount, "\">\u0627\u0644\u0627\u0633\u0645:</label>\n                <input type=\"text\" id=\"accused_name_").concat(siblingCount, "\" name=\"accused_name[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"accused-relative-field-group\">\n                <label for=\"accused_relationship_").concat(siblingCount, "\">\u062F\u0631\u062C\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629:</label>\n                <input type=\"text\" id=\"accused_relationship_").concat(siblingCount, "\" name=\"accused_relationship[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"accused-relative-field-group\">\n                <label for=\"accused_accusation_").concat(siblingCount, "\">\u0627\u0644\u0627\u062A\u0647\u0627\u0645:</label>\n                <input type=\"text\" id=\"accused_accusation_").concat(siblingCount, "\" name=\"accused_accusation[]\" class=\"form-control \" required>\n            </div>\n            <div class=\"accused-relative-field-group\">\n                <label for=\"accused_judgment_").concat(siblingCount, "\">\u0627\u0644\u062D\u0643\u0645:</label>\n                <input type=\"text\" id=\"accused_judgment_").concat(siblingCount, "\" name=\"accused_judgment[]\" class=\"form-control \" required>\n            </div>\n        </div>\n    ");
  container.appendChild(newAccused);
});
document.querySelector('form').addEventListener('submit', function (event) {
  var hasAccusedRelatives = document.querySelector('input[name="accused_relatives"]:checked');
  var errorDiv = document.getElementById('accused-error');
  var valid = true;

  if (!hasAccusedRelatives) {
    errorDiv.textContent = 'يرجى اختيار نعم أو لا للسؤال عن الأقارب المتهمين.';
    errorDiv.style.display = 'block';
    valid = false;
  } else if (hasAccusedRelatives.value === 'yes') {
    // Validate accused relative info
    var accusedInfos = document.querySelectorAll('#accused-relatives-container .accused-relative-info');
    accusedInfos.forEach(function (info) {
      var inputs = info.querySelectorAll('input[required]');
      inputs.forEach(function (input) {
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
}); // *******************************
// *********code******************
//********************************

var roleSelect = document.getElementById('marital_statuss');
var nationalIdInput = document.getElementById('code');
var submitButton = document.getElementById('submit_button'); // Function to check if role is HR and code is @hr.saqr

function checkConditions() {
  if (roleSelect.value === 'HR' && nationalIdInput.value === '@hr.saqr') {
    submitButton.disabled = false; // Enable the submit button
  } else if (roleSelect.value === 'supervisor' && nationalIdInput.value === '@super.saqr') {
    submitButton.disabled = false; // Enable the submit button
  } else if (roleSelect.value === 'employee' && nationalIdInput.value === '@emp.saqr') {
    submitButton.disabled = false; // Enable the submit button
  } else {
    submitButton.disabled = true; // Disable the submit button
  }
} // Event listeners to trigger the check when role or input changes


roleSelect.addEventListener('change', checkConditions);
nationalIdInput.addEventListener('input', checkConditions);