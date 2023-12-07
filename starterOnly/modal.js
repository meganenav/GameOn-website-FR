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
let formReserve=document.getElementById("form-reserve");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

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

// submit form 
function submitForm() {
  let verifications=validate();
  if(verifications) {
    let formReserve=document.getElementById("form-reserve");
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
  let firstName = document.getElementById("first").value;
  if(firstName==='' || firstName.length<2) {
    return false;
  }
  return true;
}

// Check lastname with minimum 2 characters
function checkLastName() {
  let lastName = document.getElementById("last").value;
  if(lastName==='' || lastName.length<2) {
    return false;
  }
  return true;
}

// Check email format 
function checkEmail() {
  let email = document.getElementById("email").value;
  let regex = new RegExp("^[a-z0-9\._-]+@[a-z0-9\._-]+\\.[a-z0-9\._-]+");
  let result = regex.test(email);
  if(email===''||result ===false) {
    return false;
  }
  return true;
}

// Check birthdate format
function checkBirthdate() {
  let birthdate = document.getElementById("birthdate").value;
  let regex = new RegExp("^[0-9]+-[0-9]+-[0-9]+");
  let result = regex.test(birthdate);
  if(birthdate==='' || result===false) {
    return false;
  }
  return true;
}

// Check quantity format
function checkQuantity() {
  let quantity = document.getElementById("quantity").value;
  let regex = new RegExp("^[0-9]");
  let result = regex.test(quantity);
  if(quantity==='' || quantity===false) {
    return false;
  }
  return true;
}

// Check location with one checked
function checkLocation() {
  let locationList = document.querySelectorAll('input[name="location"]');
  let locationChoice = "";
  for(let i = 0; i < locationList.length; i++) {
    if (locationList[i].checked) {
      locationChoice = locationList[i].value;
    }
  }
  if(locationChoice===''){
    return false;
  }
  return true;
}

// Check checkbox for agreement
function checkCheckbox1() {
  let checkbox1 = document.getElementById("checkbox1").checked;
  if(checkbox1!==true) {
    return false;
  }
  return true;
}