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
const mailInput = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
/*
//Function validate

function validate () {
  if (first.value != first.value.match(textInput)) {
    console.log("Veuillez renseigner un prénom valide");
  } else 
      if (first.value === "") {
      console.log("Veuillez renseigner un nom valide");
    } else 
        if (last.value != last.value.match(textInput)) {
        console.log("Veuillez renseigner un nom valide");
        } else
            if (email.value != email.value.match(mailInput)) {
        console.log("Veuillez renseigner une adresse mail valide");
          } else
              if (quantity.value != quantity.value.match(numberInput)) {
              console.log("Veuillez indiquer le nombre de participation");
            } else
                if (
                !loc1.checked &&
                !loc2.checked &&
                !loc3.checked &&
                !loc4.checked &&
                !loc5.checked &&
                !loc6.checked
                ) {
                console.log("Veuillez selectionner une ville");
              } else
                  if (!checkBox1.checked) {
                  console.log("Vous devez accepter les conditions générales d'utilisation");
              }
}


// Submit Form


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
              if (
                first.value &&
                last.value &&
                email.value &&
                birthdate.value &&
                quantity.value &&
                checkBox1.checked &&
                loc1.checked ||
                loc2.checked ||
                loc3.checked ||
                loc4.checked ||
                loc5.checked ||
                loc6.checked
              ) {
                alert("SUCCESS");
              } else {
                e.preventDefault();
                alert("ERROR");
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
  }
  else {
    first.classList.remove('errorInput')
  }
});

first.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (textInput.test(value)){
    first.classList.add('validInput');
  }
  else{
    first.classList.remove('validInput');
  }
});

// Last Name

last.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!textInput.test(value)){
    last.classList.add('errorInput');
  }
  else {
    last.classList.remove('errorInput')
  }
});

last.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (textInput.test(value)){
    last.classList.add('validInput');
  }
  else{
    last.classList.remove('validInput');
  }
});

// Email

email.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!mailInput.test(value)){
    email.classList.add('errorInput');
  }
  else {
    email.classList.remove('errorInput')
  }
});

email.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (mailInput.test(value)){
    email.classList.add('validInput');
  }
  else{
    email.classList.remove('validInput');
  }
});

// Quantity

quantity.addEventListener("input", function(e) 
{
  let value = e.target.value;
  if (!numberInput.test(value)){
    quantity.classList.add('errorInput');
  } else {
    quantity.classList.remove('errorInput');
  }
});

quantity.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (numberInput.test(value)){
    quantity.classList.add('validInput');
  }
  else{
    quantity.classList.remove('validInput');
  }
});

*/