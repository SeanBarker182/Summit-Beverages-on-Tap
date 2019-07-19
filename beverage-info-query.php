<?php
/* 	This PHP script is not self-contained. 
	It generates an HTML segment for M13 Lab. */

# DO NOT CHANGE ANYTHING IN THIS SCRIPT.

$dbName = "projectSB"; // DO NOT CHANGE THIS DATABASE NAME

require ("connecti2db.inc.php");
	// Retrieve data from Query String
$companyCode   = $_GET['companyCode'];
$bevNum = $_GET['bevNum'];
	// Escape User Input to help prevent SQL Injection
$companyCode   = mysqli_real_escape_string($connection,stripslashes($companyCode));
if(!isset($bevNum)) // Only program is passed in the GET string
{
	//build the query
$query  = "SELECT bevNum, beverage 
           FROM bevlist
           WHERE companyCode = '$companyCode'
           ORDER BY bevNum";
	//Execute the query
$result = mysqli_query($connection,$query) 
or 
die("<b>Query Failed.</b><br />$query<br />" . mysqli_error($connection));
	//Build Result String
$displayString  = "<select id=\"beverage\" name=\"beverage\">\n";
$displayString .= "\t<option value=\"\" disabled selected>--Choose One--</option>\n";
	// Build a new row/option in the select list for each course returned
	// using an associative array
while($row = mysqli_fetch_assoc($result))
{
	$displayString .= "\t<option value=\"$row[bevNum]\">";
	$displayString .= "$row[beverage]</option>\n";
}// WHILE

$displayString .= "</select>\n";
echo $displayString; // This sends the responseText back to JavaScript
$numRows = mysqli_num_rows($result);

if ($numRows < 1)
{
	echo "<p>No records match your criteria. Try again.</p>\n";
}// IF NUMROWS
}// IF NOT ISSET COURSENUM
else // Both program and courseNum are passed in the GET string
{
$query  = "SELECT description
           FROM bevlist
           WHERE companyCode = '$companyCode'
           AND bevNum = '$bevNum'"; 
	// Execute query or display error message
$result = mysqli_query($connection,$query)
or
die("<b>Query Failed.</b><br />$query<br />" . mysqli_error($connection));
	// Put results into an associative array named $row
$row = mysqli_fetch_assoc($result);
	// Build the string to send to AJAX
$displayString = $row['description'];
	// The echo sends the results to AJAX
echo "$displayString";
} // END IF NUMROWS < 1
?>
