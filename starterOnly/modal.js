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

// Submit Form

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let erreur;
  if (first.value != first.value.test(textInput)) {
    erreur = "Veuillez renseigner un prénom valide";
    console.log("Veuillez renseigner un prénom valide");
  } else if (last.value != last.value.test(textInput)) {
    erreur = "Veuillez renseigner un nom valide";
    console.log("Veuillez renseigner un nom valide");
  } else if (email.value != email.value.test(mailInput)) {
  erreur = "Veuillez renseigner une adresse mail valide";
  console.log("Veuillez renseigner une adresse mail valide");
  } else if (quantity.value != quantity.value.test(numberInput)) {
  erreur = "Veuillez indiquer le nombre de participation";
  console.log("Veuillez indiquer le nombre de participation");
  } else if (
  !loc1.checked &&
  !loc2.checked &&
  !loc3.checked &&
  !loc4.checked &&
  !loc5.checked &&
  !loc6.checked
  ) {
    erreur = "Veuillez selectionner une ville";
    console.log("Veuillez selectionner une ville");
  } else if (!checkBox1.checked) {
    erreur = "Veuillez acceptez les conditions générales d'utilisation";
    console.log("Vous devez accepter les conditions générales d'utilisation");
  }
    if (
      first.value &&
      last.value &&
      email.value &&
      birthdate.value &&
      quantity.value &&
      loc1.checked ||
      loc2.checked ||
      loc3.checked ||
      loc4.checked ||
      loc5.checked ||
      loc6.checked &&
      checkBox1.checked 
    ) {
      alert("SUCCESS");
    } else {
      e.preventDefault();
      formData.innerHTML = erreur;
      return 0;
    }
});


// Form Validation
//
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

// Email

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

// Quantity

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
