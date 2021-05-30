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
const firstErrorI = document.querySelector('#errorInputFirst');
const lastError = document.querySelector("#errorLast");
const lastErrorI = document.querySelector('#errorInputLast');
const mailError = document.querySelector("#errorMail");
const mailErrorI = document.querySelector("#errorInputMail");
const birthError = document.querySelector("#errorBirth");
const quantError = document.querySelector('#errorQuant');
const cityError = document.querySelector('#errorCity');
const cguError = document.querySelector('#errorCond');
const textError = document.querySelector('.errorText');

// Success Submit

const submitSuccess = document.querySelector("#successInput");


//Regex

const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /^[0-9]{1,}/;
const mailInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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




//Function Validate Input
let firstValid = function () {
  if ((first.value.length < 2 ) || (!first.value.match(textInput))) {
    firstError.style.display = "block";
    first.classList.add('errorInput');
    return false;
  }
    firstError.style.display = "none";
    first.classList.remove('errorInput');
    return true;
  
};

function lastValid() {
  if ((last.value.length < 2 ) || (!last.value.match(textInput))) {
    lastError.style.display = "block";
    last.classList.add('errorInput');
    return false;
  }
    lastError.style.display = "none";
    last.classList.remove('errorInput');
    return true;
  
};

function emailValid() {
  if ((email.value.length === 0) || (!email.value.match(mailInput))) {
    mailError.style.display = "block";
    email.classList.add("errorInput");
    return false;
  }
  
    mailError.style.display = "none";
    return true;
  
};

function birthValid () {
  if (birthdate.value === "") {
    birthError.style.display = "block";
    birthdate.classList.add("errorInput");
    return false;
  }
    birthError.style.display = "none";
    birthdate.classList.remove('errorInput');
    return true;
  
};

function quantValid () {
  if (quantity.value === "") {
    quantError.style.display = "block";
    quantity.classList.add("errorInput");
    return false;
  }
    quantError.style.display = "none";
    quantity.classList.remove('errorInput');
    return true;
  
};
function cityValid () {
  if ((!loc1.checked &&
  !loc2.checked &&
  !loc3.checked &&
  !loc4.checked &&
  !loc5.checked &&
  !loc6.checked)) {
    cityError.style.display = "block";
    return false;
  } else {
  
    cityError.style.display = "none";
    return true;
 }
};

function cguValid () {
  if (!checkBox1.checked) {
    cguError.style.display = "block";
    return false;
  } else {
    cguError.style.display = "none";
    return true;
  }
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let datas = new FormData (form);
  for(let i of datas.entries()) {
    console.log(i[0], "..", i[1]); 
  }
    console.log("Envoyé");
    formValid = true;
    submitSuccess.style.display = "block";

    if (!cguValid()) {
      submitSuccess.style.display = "none";
    }
    if (!cityValid()) {
        submitSuccess.style.display = "none";
    }
    if (!quantValid()){
        submitSuccess.style.display = "none";
    }
    if (!birthValid()){
      submitSuccess.style.display = "none";
    }
    if (!firstValid()) {
      submitSuccess.style.display = "none";
    }
    if (!lastValid()) {
      submitSuccess.style.display = "none";
    }
    if (!emailValid()) {
      submitSuccess.style.display = "none";
    }
    
    formValid=(formValid && firstValid());
    console.log("firstName" + " " + formValid);
    formValid=(formValid && lastValid());
    console.log("lasttName" + " " + formValid);
    formValid=(formValid && emailValid()); 
    console.log("email" + " " + formValid);
    formValid=(formValid && birthValid()); 
    console.log("birthdate" + " " + formValid);
    formValid=(formValid && cityValid());
    console.log("envoyé"+ " " +formValid);
    return formValid; // return true as formValid=true

    });