// Author: Sean Barker                         
// Date:   December 1, 2018                    
// Description: Summit Beverages on Tap Project

//Globals for XBCEL onchange listen 
var companyList = document.getElementById("companyCode");
var beverageList = document.getElementById("beverage");
//XBCEL for change on company dropdown
if(companyList.addEventListener){
	console.log("Entering XBCEL for companyList: company List = " + companyList.value + " beverageList = " + beverageList.value);
	companyList.addEventListener("change",
		function(){
			 ajaxFunction('companyCode');
		}, false);
	//else if for older MS browsers
} else if (companyList.attachEvent){
	companyList.attachEvent("onchange",
		function(){
			 ajaxFunction('companyCode');
		});
console.log("Leaving XBCEL for companyList: company List = " + companyList.value + " beverageList = " + beverageList.value);
}

if(beverageList.addEventListener){
	console.log("Entering XBCEL for beverageList: company List = " + companyList.value + " beverageList = " + beverageList.value);
	beverageList.addEventListener("change",
		function(){
			ajaxFunction('beverage');
		}, false);
} else if (beverageList.attachEvent){
	beverageList.attachEvent("onchange",
		function(){
			ajaxFunction('beverage');
		});
	console.log("Leaving XBCEL for beverageList: company List = " + companyList.value + " beverageList = " + beverageList.value);
}