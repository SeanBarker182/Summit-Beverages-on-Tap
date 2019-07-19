/* AJAX Framework for PHP/MySQL Query in SDEV 250 Lab13 
   Author:        Sean Barker
   Date Written:   11/31/2018
   Description:    Creates query selector and displays values with AJAX
*/

//Browser Support Code
function ajaxFunction(selectedVal){
	var ajaxRequest; // The variable that makes the AJAX magic possible!
	try{
		// REAL BROWSERS
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	if (selectedVal == "companyCode")
	{
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4) 
		{
			var beverageDisplay = document.getElementById('beverage'); 
			beverageDisplay.innerHTML = ajaxRequest.responseText;
		} // close IF READYSTATE
	}	// close ONREADYSTATECHANGE FUNCTION
	var companySelect = document.getElementById('companyCode').value;
	console.log("Entering ajaxRequest: companySelect= " + companySelect);
	ajaxRequest.open("GET", "beverage-info-query.php?companyCode=" + companySelect, true); 
	ajaxRequest.send(null);	
	} // end IF DATALIST
	// Creates a function that will receive course information sent from the server
	if (selectedVal == "beverage")
	{
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4)
		{
			var descriptionFill = document.getElementById('catalog');
			descriptionFill.innerHTML = ajaxRequest.responseText; 
		} // close IF READYSTATE
	} // close ONREADYSTATECHANGE FUNCTION
	var companyCode = document.getElementById('companyCode').value;		
	var beverage = document.getElementById('beverage').value;
	// creates query string to recieve server information
	var queryString = "?companyCode=" + companyCode + "&bevNum=" + beverage; 
	console.log("Entering queryString ajaxRequest: queryString= " + queryString);
	ajaxRequest.open("GET", "beverage-info-query.php" + queryString, true);
	ajaxRequest.send(null);
	} //END IF COURSE
	}// END AJAXFUNCTION