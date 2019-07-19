// Author: Sean Barker                         
// Date:   December 1, 2018                    
// Description: Summit Beverages on Tap Project
var rent = document.getElementById("rent");
var event = document.getElementById("event");
var subscriptions = document.getElementById("subscriptions");
//Create function to hide rentals information div
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Create function to hide event information div
function eventFunction() {
    var x = document.getElementById("eventDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//Create function to hide subscriptions information div
function subFunction() {
    var x = document.getElementById("subDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function clickDom() {
// Create event to listen for click and call corresponding function
console.log("Entering clickDom() function");
   if (rent.addEventListener) {
    rent.addEventListener("click", myFunction, false);
  } else if (rent.attachEvent) {
    rent.attachEvent("onclick", myFunction);
  } if (event.addEventListener) {
    event.addEventListener("click", eventFunction, false);
  } else if (event.attachEvent) {
    event.attachEvent("onclick", eventFunction); 
  } if (subscriptions.addEventListener) {
    subscriptions.addEventListener("click", subFunction, false);
  } else if (subscriptions.attachEvent) {
    subscriptions.attachEvent("onclick", subFunction);
  }
console.log("<Leaving clickDom() function");
} 

if (window.addEventListener) {
   console.log("> Adding TC39 Event Listener...");
   window.addEventListener ("load", clickDom, false);
}
else if (window.attachEvent) {
   console.log("> Adding MS Event Listener...");
   window.attachEvent ("onload", clickDom);
}