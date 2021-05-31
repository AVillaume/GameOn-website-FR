const menuBurger = document.querySelector(".icon");

menuBurger.addEventListener("click", function(editNav) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("#form");
const formData = document.querySelectorAll(".formData");
const closeX = document.querySelector(".close");
const formSent = document.querySelector(".form__sent");
const closeBtn = document.querySelector(".btn-close");

// Form Elements Selector

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

const loc1 = document.querySelector("#location1");
const loc2 = document.querySelector("#location2");
const loc3 = document.querySelector("#location3");
const loc4 = document.querySelector("#location4");
const loc5 = document.querySelector("#location5");
const loc6 = document.querySelector("#location6");

const checkBox1 = document.querySelector("#checkbox1");
const checkBox2 = document.querySelector("#checkbox2");

// Form Elements Selector Error

const firstError = document.querySelector("#errorFirst");
const lastError = document.querySelector("#errorLast");
const mailError = document.querySelector("#errorMail");
const birthError = document.querySelector("#errorBirth");
const quantError = document.querySelector('#errorQuant');
const cityError = document.querySelector('#errorCity');
const cguError = document.querySelector('#errorCond');

// Success Submit

const submitSuccess = document.querySelector("#successInput");


//Regex

const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /^[0-9]{1,}/;
const mailInput = /^([a-zA-Z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

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


//Close the confirmation message

closeBtn.addEventListener("click", function() {
  formSent.style.display = "none";
});



//Function Validate Input
let firstValid = function () { //first name validation function
  if ((first.value.length < 2 ) || (!first.value.match(textInput))) { // if the entry is less than 2 or not validated by the Regex
    firstError.style.display = "block"; // Show Error Message
    first.classList.add('errorInput');  // Add a red frame
    return false;
  }
    firstError.style.display = "none"; // Hide Error Message
    first.classList.remove('errorInput'); // Remove the red frame
    return true;
  
}

function lastValid() { // last name validation function
  if ((last.value.length < 2 ) || (!last.value.match(textInput))) { // if the entry is less than 2 or not validated by the Regex
    lastError.style.display = "block"; // Show Error Message
    last.classList.add('errorInput'); // Add a red frame
    return false;
  }
    lastError.style.display = "none"; // Hide Error Message
    last.classList.remove('errorInput'); // Remove the red frame
    return true;
  
}

function emailValid() { // email validation function
  if ((email.value.length === 0) || (!email.value.match(mailInput))) { // if the entry is empty or the characters
    mailError.style.display = "block"; // Show Error Message
    email.classList.add("errorInput"); // Add a red frame
    return false;
  }
    mailError.style.display = "none"; // Hide Error Message
    email.classList.remove("errorInput"); // Remove the red frame
    return true;
  
}

function birthValid () { //birthdate validation function
  if (birthdate.value === "") { // if isn't filled in
    birthError.style.display = "block"; // Show Error Message
    birthdate.classList.add("errorInput"); // Add a red frame
    return false;
  }
    birthError.style.display = "none"; // Hide Error Message
    birthdate.classList.remove('errorInput'); // Remove the red frame
    return true;
  
}

function quantValid () { //number of participation validation function
  if (quantity.value === "") { // if isn't filled in
    quantError.style.display = "block"; // Show Error Message
    quantity.classList.add("errorInput"); // Add a red frame
    return false;
  }
    quantError.style.display = "none"; // Hide Error Message
    quantity.classList.remove('errorInput'); // Remove the red frame
    return true;
  
}
function cityValid () { // city checkbox validation function
  if ((!loc1.checked &&
  !loc2.checked &&
  !loc3.checked &&
  !loc4.checked &&
  !loc5.checked &&
  !loc6.checked)) {  //if no box is checked
    cityError.style.display = "block"; // Show Error Message
    return false;
  } else {
  
    cityError.style.display = "none"; // Hide Error Message
    return true;
 }
}

function cguValid () { // cgu checkbox validation function
  if (!checkBox1.checked) { //if isn't checked
    cguError.style.display = "block"; // Show Error Message
    return false;
  } else {
    cguError.style.display = "none"; // Hide Error Message
    return true;
  }
};

// Form Submit
form.addEventListener("submit", (e) => { 
    e.preventDefault();
    let datas = new FormData (form);
  for(let i of datas.entries()) {
    console.log(i[0], "..", i[1]); // get all entries
  }
    console.log("Envoyé");
    formValid = true;
    formSent.style.display = "block"; // Show the success message

    if (!cguValid()) {
      formSent.style.display = "none"; // Hide the success message
    }
    if (!cityValid()) {
      formSent.style.display = "none"; // Hide the success message
    }
    if (!quantValid()){
      formSent.style.display = "none"; // Hide the success message
    }
    if (!birthValid()){
      formSent.style.display = "none"; // Hide the success message
    }
    if (!firstValid()) {
      formSent.style.display = "none"; // Hide the success message
    }
    if (!lastValid()) {
      formSent.style.display = "none"; // Hide the success message
    }
    if (!emailValid()) {
      formSent.style.display = "none"; // Hide the success message
    }
    
    formValid=(formValid && firstValid());
    console.log("firstName" + " " + formValid);
    formValid=(formValid && lastValid());
    console.log("lasttName" + " " + formValid);
    formValid=(formValid && emailValid()); 
    console.log("email" + " " + formValid);
    formValid=(formValid && birthValid()); 
    console.log("birthdate" + " " + formValid);
    formValid=(formValid && cityValid()); //form is valid if all verifications are valid
    console.log("envoyé"+ " " +formValid);
    return formValid; // return true as formValid=true

    });