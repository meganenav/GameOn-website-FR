function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const btnSubmit = document.querySelectorAll(".btn-submit");
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let locationList = document.querySelectorAll('input[name="location"]');
let checkbox1 = document.getElementById("checkbox1");
let formReserve = document.getElementById("form-reserve");
const modalbgConfirm = document.querySelector(".confirm-msg");
const closeConfirm = document.querySelector(".close-confirm");
const btnCloseConfirm = document.querySelector(".btn-close-confirm");
const modalConfirmBody = document.querySelector(".modal-confirm-body");
const innerHeight = window.innerHeight;
modalConfirmBody.style.height = innerHeight + "px";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//close modal confirmation
btnCloseConfirm.addEventListener("click", (event) => {
  closeModalConfirm();
});

//close modal confirmation
closeConfirm.addEventListener("click", (event) => {
  closeModalConfirm();
});

// lauch form submit
formReserve.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal confirmation
function launchModalConfirm() {
  modalbgConfirm.style.display = "block";
}

// close modal confirmation
function closeModalConfirm() {
  modalbgConfirm.style.display = "none";
}

// Event input first name and verification
firstName.addEventListener("input", (event) => {
  checkFirstName();
});

// Event input last name and verification
lastName.addEventListener("input", (event) => {
  checkLastName();
});

// Event input email and verification
email.addEventListener("input", (event) => {
  checkEmail();
});

// Event input birthdate and verification
birthdate.addEventListener("input", (event) => {
  checkBirthdate();
});

// Event input quantity and verification
quantity.addEventListener("input", (event) => {
  checkQuantity();
});

// Event change location and verification
locationList.forEach((radio) => radio.addEventListener("change", checkLocation));

//Event change checkbox1 and verification
checkbox1.addEventListener("change", (event) => {
  checkCheckbox1();
});

// submit form with message when sent and reset
function submitForm() {
  let verifications = validate();
  if(verifications) {
    launchModalConfirm();
    formReserve.reset();
  }
}

// form verifications before submit
function validate() {
  //launch verifications functions
  let resultFirstName = checkFirstName();
  let resultLastName = checkLastName();
  let resultEmail = checkEmail();
  let resultBirthdate = checkBirthdate();
  let resultQuantity = checkQuantity();
  let resultLocation = checkLocation();
  let resultCheckbox1 = checkCheckbox1();
  if(resultFirstName && resultLastName && resultEmail && resultBirthdate && resultQuantity && resultLocation && resultCheckbox1) {
    return true;
  }
  return false;
}

// Check firstname with minimum 2 characters
function checkFirstName() {
  let firstNameValue = document.getElementById("first").value;
  let firstNameForm = document.getElementById("firstNameForm");
  if(firstNameValue.length < 2) {
    firstNameForm.setAttribute("data-error-visible", "true");
    firstNameForm.setAttribute("data-error", "Veuillez indiquer au minimum deux caractères");
    btnSubmitDisabled();
    return false;
  }
  else{
    firstNameForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check lastname with minimum 2 characters
function checkLastName() {
  let lastNameValue = document.getElementById("last").value;
  let lastNameForm = document.getElementById("lastNameForm");
  if(lastNameValue.length < 2) {
    lastNameForm.setAttribute("data-error-visible", "true");
    lastNameForm.setAttribute("data-error", "Veuillez indiquer au minimum deux caractères");
    btnSubmitDisabled();
    return false;
  }
  else{
    lastNameForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check email format 
function checkEmail() {
  let emailValue = document.getElementById("email").value;
  let emailForm = document.getElementById("emailForm");
  let regex = new RegExp("^[a-z0-9\._-]+@[a-z0-9\._-]+\\.[a-z0-9\._-]+$");
  let result = regex.test(emailValue);
  if(result === false) {
    emailForm.setAttribute("data-error-visible", "true");
    emailForm.setAttribute("data-error", "Veuillez entrer un email valide");
    btnSubmitDisabled();
    return false;
  }
  else{
    emailForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check birthdate format
function checkBirthdate() {
  let birthdateValue = document.getElementById("birthdate").value;
  let birthdateForm = document.getElementById("birthdateForm");
  let result = "";
	if(isNaN(Date.parse(birthdateValue))) {
    result = false;
	}
  else {
    result = true;
  }
  if(result === false) {
    birthdateForm.setAttribute("data-error-visible", "true");
    birthdateForm.setAttribute("data-error", "Veuillez entrer une date de naissance valide");
    btnSubmitDisabled();
    return false;
  }
  else {
    birthdateForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check quantity format
function checkQuantity() {
  let quantityValue = document.getElementById("quantity").value;
  let quantityForm = document.getElementById("quantityForm");
  const quantity = parseInt(quantityValue);
  let result = "";
  if(isNaN(quantity)) {
    result = false;
  }
  else {
    result = true;
  }
  if(result === false) {
    quantityForm.setAttribute("data-error-visible", "true");
    quantityForm.setAttribute("data-error", "Veuillez entrer une quantité valide");
    btnSubmitDisabled();
    return false;
  }
  else{
    quantityForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check location with one checked
function checkLocation() {
  let locationForm = document.getElementById("locationForm");
  let locationChoice = document.querySelector('input[name="location"]:checked');
  if(locationChoice === null) {    
    locationForm.setAttribute("data-error-visible", "true");
    locationForm.setAttribute("data-error", "Veuillez entrer une ville");
    btnSubmitDisabled();
    return false;
  }
  else{
    locationForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// Check checkbox for agreement
function checkCheckbox1() {
  let checkbox1 = document.getElementById("checkbox1").checked;
  let agreementForm = document.getElementById("agreementForm");
  if(checkbox1 !== true) {
    agreementForm.setAttribute("data-error-visible", "true");
    agreementForm.setAttribute("data-error", "Veuillez cocher la case pour les conditions d'utilisation");
    btnSubmitDisabled();
    return false;
  }
  else{
    agreementForm.removeAttribute("data-error-visible");
    btnSubmitNotDisabled();
  }
  return true;
}

// make the submit button disabled
function btnSubmitDisabled() {
  let btnSubmit = document.querySelector(".btn-submit");
  btnSubmit.disabled = true;
  btnSubmit.classList.add("btnDisabled");
}

// make the submit button not disabled
function btnSubmitNotDisabled() {
  let btnSubmit = document.querySelector(".btn-submit");
  btnSubmit.disabled = false;
  btnSubmit.classList.remove("btnDisabled");
}