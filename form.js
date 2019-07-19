// Author: Sean Barker                         
// Date:   December 1, 2018                    
// Description: Summit Beverages on Tap Project
"use strict"; //Operate in Strict mode

   //**Global Variables 
   var bevList = ["Summit Cold Brew - Nitro Cold Brew",'Summit Cold Brew - Original Cold Brew', 'Summit Cold Brew - Chocolate Chip Pancake', 'Summit Cold Brew - Crimson', 'Crossroads Kombutcha - Mango + Strawberry', 'Crossroads Kombutcha - Blueberry + Sage', 'Crossroads Kombutcha  - Raspberry + Rose Hips', 'Crossroads Kombutcha - Apricot + Ginger', 'Bukàl Beverage Co.  - Indus', 'Bukàl Beverage Co. - Mekong', 'Bukàl Beverage Co.  - Yangtze'];
   var beverageList = document.getElementById("bevList");
   var formValidity = true;
   var errMsgDiv = document.getElementById("errorMsg");
function createCheck() {
  //Creates label elements to populate Programs field
  console.log(">Entering createCheck function")
  for (var i = 0; i < bevList.length; i++) {
      (function(i) {
      var boxText = bevList[i]; //stores current program name for appendChild formatting
      var bevEntry = document.createElement ("label"); 
      bevEntry.setAttribute("class", "bevlist");
      bevEntry.innerHTML = "<input type=checkbox name=beverages[] value=" + i + " />" + boxText + "<br>"; //creates each line to be appeneded to program list
      beverageList.appendChild (bevEntry);
      console.log(bevEntry);
  })(i);
}
 console.log(">Leaving createCheck function");
}
function validateInput(evt) {
  //Creates the Global Validation and prevents form from submitting
  if (evt.preventDefault) {
    evt.preventDefault(); // prevent form from submitting
  } else {
    evt.returnValue = false; // prevent form from submitting in IE8
  }
  formValidity = true; // reset value for revalidation
  checkValidity();
  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit(); //Submit the form if validity is True
  }
}
function createEventListeners() {
  //Calls validateInput when submit button is clicked
  console.log(">Entering createEventListeners function");
  var form = document.getElementsByTagName("form")[0];
   if (form.addEventListener) {
    form.addEventListener("submit", validateInput, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateInput);
  }
  console.log(">Leaving createEventListeners function");
}
function checkValidity() {
  //loops through each form field and evaluates if value is valid for submit
  var chkVal = true;
  var fName = document.forms[0].fname;
  var lName = document.forms[0].lname;
  var email = document.forms[0].email;
  var phone = document.forms[0].phone;
  console.log(">Entering checkValidity Function");
  try { 
  console.log(">>Entering fName Validation TRY " + "form validity: " + formValidity +" validity: " + chkVal);
  if (fName.value === ''){
    //Turns background and border red if field is blank changes chkVal to blank
    fName.style.background = "rgb(255,233,233)"; 
    fName.style.borderColor = "red";
    chkVal = false;
    fName.focus();
  } else {
    //Turns the field white if field is valid
    fName.style.background = "white";
    fName.style.borderColor = "white";
  }
 if (chkVal === false) {
    //throws error if validity is false 
    throw "Please enter your first name.";
    }
    errMsgDiv.style.display = "none";
    errMsgDiv.innerHTML = "";
  }
  catch(msg) {
  errMsgDiv.style.display = "block";
  errMsgDiv.innerHTML = msg;
  formValidity = false;
  return; // exits the function if local validity is false 
  }
  console.log(">>Leaving fName Validation TRY " + "form validity: " + formValidity +" validity: " + chkVal +" First Name: " + fName.value);
  try { 
  console.log(">>Entering lName Validation TRY " + "form validity: " + formValidity +" validity: " + chkVal);
  if (lName.value === ''){
    //follows same try loop as fName field
    lName.style.background = "rgb(255,233,233)";
    lName.style.borderColor = "red";
    chkVal = false;
    lName.focus();
  } else {
    lName.style.background = "white";
    lName.style.borderColor = "white";
  }
  if (chkVal === false) {
    throw "Please enter your last name.";
    }
    errMsgDiv.style.display = "none";
    errMsgDiv.innerHTML = "";
  }
  catch(msg) {
  errMsgDiv.style.display = "block";
  errMsgDiv.innerHTML = msg;
  formValidity = false;
  return;
  }
  console.log(">>Leaving lName Validation TRY " + "form validity: " + formValidity +" validity: " + chkVal +" Last Name: " + lName.value);
  try { 
  console.log(">>Entering email Validation TRY " + "form validity: " + formValidity +" local validity: " + chkVal);
  if (email.value === ''){
    //Follows the previous try loop to validate email
    email.style.background = "rgb(255,233,233)";
    email.style.borderColor = "red";
    chkVal = false;
    email.focus();
    } else {
    email.style.background = "white";
    email.style.borderColor = "white";
    }
  if (chkVal === false) {
    throw "Please enter a valid Email address.";
    }
    errMsgDiv.style.display = "none";
    errMsgDiv.innerHTML = "";
    }
  catch(msg) {
  errMsgDiv.style.display = "block";
  errMsgDiv.innerHTML = msg;
  formValidity = false;
  return;
  }
  console.log(">>Leaving email Validation TRY " + "form validity: " + formValidity +" Local validity: " + chkVal +" email: " + email.value);
  try {
  console.log(">>Entering Age Validation TRY " + "form validity: " + formValidity +" Local validity: ");
  if (isNaN(phone.value) || (phone.value
      === "")) {
    //Uses same TRY loop but also makes sure value is numbers and between ages of 0-80
    phone.style.background = "rgb(255,233,233)";
    phone.style.borderColor = "red";
    chkVal = false;
    phone.focus();
    } else {
    phone.style.background = "white";
    phone.style.borderColor = "white";
    }
  if (chkVal === false) {
    throw "Please enter valid phone number.";
    }
    errMsgDiv.style.display = "none";
    errMsgDiv.innerHTML = "";
    }
  catch(msg) {
  errMsgDiv.style.display = "block";
  errMsgDiv.innerHTML = msg;
  formValidity = false;
  return;
   }
 console.log(">>Leaving Age Validation TRY " + "form validity: " + formValidity +" Local validity: " + chkVal +" phone: " + phone.value);
 console.log(">Leaving checkValidity Function")
}


function init(){
  //call functions to be executed in the following event listener
  console.log(">Entering init function");
	createEventListeners();
	createCheck();
  console.log(">Leaving init function");
}

if (window.addEventListener) {
  //call init() on page load
   console.log("> Adding TC39 Event Listener...");
   window.addEventListener ("load", init, false);
}
else if (window.attachEvent) {
   console.log("> Adding MS Event Listener...");
   window.attachEvent ("onload", init);
}