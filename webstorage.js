// Author: Sean Barker                         
// Date:   December 13, 2018                    
// Description: Summit Beverages on Tap Project

//Set global variables to refrence buttons and thier error divs
var renBut = document.getElementById("renBut");
var renErr = document.getElementById("renErr");
var evtBut = document.getElementById("evtBut");
var evtErr = document.getElementById("evtErr");
var subBut = document.getElementById("subBut");
var subErr = document.getElementById("subErr");

//Create function to store session storage for rental
function rentalStore() {
//Check for browser compatibility
console.log("Entering function for rentalStore");
if (typeof(Storage) == "undefined") { 
	renErr.innerHTML = "Sorry! Your browser doesn't support this feature";
//if <a> element still says request information store as true use trim to avoid logic error
    } else if (renBut.innerHTML.trim()=="Request Information"){
    sessionStorage.setItem("rental", true);
//innerHTML to format for the remove from web storage 
    renBut.innerHTML = "Remove";
    renErr.innerHTML = "Added to <a class='underline' href='contact.html'>Contact</a> page";
    } else {
	//remove storage and set div and <a> back to defaults
	sessionStorage.removeItem("rental");
	renBut.innerHTML = "Request Information";
	renErr.innerHTML =  "";
    }
   console.log("Leaving rentalStore function");
}
//identical function as above but adapted to serve for event
function eventStore() {
	console.log("Entering function for eventStore");
    if (typeof(Storage) == "undefined") { 
	evtErr.innerHTML = "Sorry! Your browser doesn't support this feature";
    } else if (evtBut.innerHTML.trim()=="Request Information"){
    sessionStorage.setItem("event", true);
    evtBut.innerHTML = "Remove"
    evtErr.innerHTML = "Added to <a class='underline' href='contact.html'>Contact</a> page";
    } else {
	sessionStorage.removeItem("event");
	evtBut.innerHTML = "Request Information";
	evtErr.innerHTML =  "";
   }
   console.log("Leaving eventStore function");
}
//Subscription version of the function
function subStore() {
	console.log("Entering function for subStore");
	if (typeof(Storage) == "undefined") { 
	subErr.innerHTML = "Sorry! Your browser doesn't support this feature";
	}else if (subBut.innerHTML.trim()=="Request Information"){
	sessionStorage.setItem("sub", true);
	subBut.innerHTML = "Remove"
	subErr.innerHTML = "Added to <a class='underline' href='contact.html'>Contact</a> page";
	} else {
	sessionStorage.removeItem("sub");
	subBut.innerHTML = "Request Information";
	subErr.innerHTML =  "";
    }
    console.log("Leaving subStore function");
}
function buttonEl() {
	console.log("Entering buttonEL() event listener");
//XBCEL to listen for click and run corresponding function
	if (renBut.addEventListener) {
    renBut.addEventListener("click", rentalStore, false);
  } //Listen for older MS browser
  	else if (renBut.attachEvent) {
    renBut.attachEvent("onclick", rentalStore);
  } if (evtBut.addEventListener) {
    evtBut.addEventListener("click", eventStore, false);
  } else if (evtBut.attachEvent) {
    evtBut.attachEvent("onclick", eventlStore);
  } if (subBut.addEventListener) {
    subBut.addEventListener("click", subStore, false);
  } else if (subBut.attachEvent) {
    subBut.attachEvent("onclick", subStore);
  }
  console.log("Leaving buttonEL() event listener");
}
if (window.addEventListener) {
  //call buttonEl() on page load
   console.log("> Adding TC39 Event Listener...");
   window.addEventListener ("load", buttonEl, false);
} // else if for older MS browser
else if (window.attachEvent) {
   console.log("> Adding MS Event Listener...");
   window.attachEvent ("onload", buttonEl);
}