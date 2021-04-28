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
const closeX = document.querySelector(".close");

// Form Elements Selector

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

//Regex

const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /[0-9]/;
const mailInput = /^([a-zA-Z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

// Form Validation

// First Name

first.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!textInput.test(value)){
    first.classList.add('errorInput');
    return false;
  }
  else {
    first.classList.remove('errorInput')
    return true;
  }
});

first.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (textInput.test(value)){
    first.classList.add('validInput');
    return true;
  }
  else{
    first.classList.remove('validInput');
    return false;
  }
});

// Last Name

last.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!textInput.test(value)){
    last.classList.add('errorInput');
    return false;
  }
  else {
    last.classList.remove('errorInput')
    return true;
  }
});

last.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (textInput.test(value)){
    last.classList.add('validInput');
    return true;
  }
  else{
    last.classList.remove('validInput');
    return false;
  }
});

/* Email */

email.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!mailInput.test(value)){
    email.classList.add('errorInput');
    return false;
  }
  else {
    email.classList.remove('errorInput')
    return true;
  }
});

email.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (mailInput.test(value)){
    email.classList.add('validInput');
    return true;
  }
  else{
    email.classList.remove('validInput');
    return false;
  }
});

/* Quantity */

quantity.addEventListener("input", function(e){
  let value = e.target.value;
  if (!numberInput.test(value)){
    quantity.classList.add('errorInput');
    return false;
  } else {
    quantity.classList.remove('errorInput');
    return true;
  }
});

quantity.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (numberInput.test(value)){
    quantity.classList.add('validInput');
    return true;
  }
  else{
    quantity.classList.remove('validInput');
    return false;
  }
});


// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

//Close modal on click

closeX.addEventListener("click", function() {
  modalbg.style.display = "none";
});




