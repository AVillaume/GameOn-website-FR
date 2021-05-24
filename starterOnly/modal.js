let textInputB = false; let mailInputB = false; let birthInputB = false; 
let quantInputB = false; let cityB = false; let cguB = false;

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
  !loc6.checked) && ((quantity.value != "0"))) {
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


/*let datas = new FormData (form);
  for(let i of datas.entries()) {
    console.log(i[0], "..", i[1]); 
  }*/
/*

form.addEventListener("submit", (e) => {
  e.preventDefault();
    if ((firstValid()) ||
       (lastValid()) ||
      (emailValid()) ||
      (birthValid()) ||
      (quantValid()) ||
      (cityValid()) ||
      (cguValid())==true)
      {
        formValid=true;
        submitSuccess.style.display = "block";
        console.log("Envoyé");
      }
    
    else {
        formValid=false;
        submitSuccess.style.display = "none";
        
    }
  
  }); */ 

  function validate(){
    let datas = new FormData (form);
  for(let i of datas.entries()) {
    console.log(i[0], "..", i[1]); 
  }
    console.log("Envoyé");
    formValid = true;
    if (!checkBox1.checked) {
      cguError.style.display = "block";
      formValid=false; 
    }
    if ((!loc1.checked &&
      !loc2.checked &&
      !loc3.checked &&
      !loc4.checked &&
      !loc5.checked &&
      !loc6.checked) && ((quantity.value != "0"))) {
        cityError.style.display = "block";
      } else { cityError.style.display='none';
    }
    if (!quantValid()){
        quantError.style.display = "block";
        quantity.classList.add("errorInput");
    }else {
        quantError.style.display = "none";
        quantity.classList.remove("errorInput");
    }
    if (!birthValid()){
      birthError.style.display = "block";
      birthdate.classList.add("errorInput");
    }else {
      birthError.style.display = "none";
      birthdate.classList.remove("errorInput");
    }
    if (!firstValid()) {
      firstError.style.display = "block";
      first.classList.add('errorInput');
    }else{
        firstError.style.display = "none";
        first.classList.remove('errorInput');
    }
    if (!lastValid()) {
      lastError.style.display = "block";
      last.classList.add('errorInput');
    }else{
      lastError.style.display = "none";
      last.classList.remove('errorInput');
    }
    if (!emailValid()) {
      mailError.style.display = "block";
      email.classList.add('errorInput');
    }else{
      mailError.style.display = "none";
      email.classList.remove('errorInput');
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

    }

  
  /*
  if ((firstValid == true) &&
  (lastValid == true) &&
  (emailValid == true) &&
  (birthValid == true) &&
  (quantValid == true) &&
  (cityValid == true) &&
  (cguValid == true)) {
    submitSuccess.style.display = "block";
    return true;
  }
  else {
    return false;
  }
});


/*    submitSuccess.style.display = "block";
    return true
  }
    e.preventDefault();
    submitSuccess.style.display ="none";
    return false;
});


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
            if(!email.value.match(mailInput)) {
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
});*/
