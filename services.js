// Author: Sean Barker                         
// Date:   December 1, 2018                    
// Description: Summit Beverages on Tap Project
//Global 
var packChg = document.getElementById("packages");
var renChg = document.getElementById("rentals");
var evtChg = document.getElementById("events");
var subChg = document.getElementById("subscription");
//Object constructor for services 
var services = function (theTitle, theImg, theAlt, theText, theBtn, theChg){
  console.log("Entering services constructor");
	this.chg =theChg;
  this.title = theTitle;
  this.img = theImg;
  this.alt = theAlt;
  this.text = theText;
  this.id = theBtn;
  this.instances.push(this);
  //Format content is the main function which fills the content and styles the li items to reflect chosen
  this.formatContent =() => {
  document.getElementById("servicesinfo").innerHTML = `<div class="servicesimg"><img src="images/${this.img}.jpg" alt="${this.alt}"></div>
       <div class="servicestxt">
         <h2>${this.title}</h2>
         <hr><br>
         <p>${this.text}</p>
          <br>
       <div> 
        <a href="packages.html" class="learn-more-btn" id="${this.id}">Learn More</a>
      </div>
      </div>`
    this.revertColors();
  this.chg.style.color = "black"
  };
console.log("<Leaving services constructor");
}

// Creates discription text along with the Alt for the objects Img
 
var packagesText = "We have the package to suit your needs. Select the options above to see more information about our services.";
var rentalsText = "Rent kegerators, jockey boxes, or insulated beverage coolers. You can purchase beverages straight from us or provide your own.";
var eventsText = "We can cater to any size or style of events. Request a quote today and we\'ll build a package to fit your needs.";
var subText = "Beverages delivered straight to your buisness or office on a weekly, bi-weekly, or monthly basis. Cancel at anytime.";
var pckAlt = "Insulated Beverage Server";
var renAlt = "Kegerator in office";
var evtAlt = "Summit tasting event";
var subAlt = "Nitro cold brew glass";

// Prototype used to style the li items back to gray when another li is selected
services.prototype.instances = [];
services.prototype.revertColors = function() {
this.instances.forEach(instance => (instance.chg.style.color = "gray"))
console.log(services.prototype.instances);
}
//Creates objects for the services constructor
packages = new services('Packages', 'BeverageServer', pckAlt, packagesText, 'lmPck', packChg);
rentals  = new services('Rentals', 'kegerator', renAlt, rentalsText, 'lmRen', renChg);
events   = new services('Events', 'event', evtAlt, eventsText, 'lmEvt', evtChg);
sub      = new services('Subscriptions', 'subimg', subAlt, subText, 'lmSub', subChg);

//Listen for Li click and call the corresponding function
function createEventListeners() {
   if (packChg.addEventListener) {
    packChg.addEventListener("click", packages.formatContent, false);
  } else if (packChg.attachEvent) {
    packChg.attachEvent("onclick", packages.formatContent);
  } if (renChg.addEventListener) {
    renChg.addEventListener("click", rentals.formatContent, false);
  } else if (renChg.attachEvent) {
    renChg.attachEvent("onclick", rentals.formatContent); 
  } if (evtChg.addEventListener) {
    evtChg.addEventListener("click", events.formatContent, false);
  } else if (evtChg.attachEvent) {
    evtChg.attachEvent("onclick", events.formatContent);
  } if (subChg.addEventListener) {
    subChg.addEventListener("click", sub.formatContent, false);
  } else if (subChg.attachEvent) {
    subChg.attachEvent("onclick", sub.formatContent);
  } 
}
// init is uneeded but good practice if the script needs expanded
function init(){
	createEventListeners();
}

if (window.addEventListener) {
  //call init() on page load
   console.log("> Adding TC39 Event Listener...");
   window.addEventListener ("load", init, false);
}// else if for older MS browser
else if (window.attachEvent) {
   console.log("> Adding MS Event Listener...");
   window.attachEvent ("onload", init);
}

