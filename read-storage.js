// Author: Sean Barker                         
// Date:   December 1, 2018                    
// Description: Summit Beverages on Tap Project
if (sessionStorage.getItem('rental') != null) {
 document.getElementById("rentals").checked = true;
}
if (sessionStorage.getItem('event') != null) {
 document.getElementById("events").checked = true;
}
if (sessionStorage.getItem('sub') != null) {
 document.getElementById("subscriptions").checked = true;
}