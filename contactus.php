<?php
/*	Author:	Sean Barker
	Date Written:   12/3/18
	Dependencies:	contact.html
	Description:	Processing script contact page

*/
$firstName 		= $_POST['fname'];
$lastName 		= $_POST['lname'];
$emailAddress 		= $_POST['email'];
$phone 			= $_POST['phone'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>SBT - Thank You</title>
  <meta charset="utf-8" />
  <meta name="description" content="Local Beverage Supply">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript,Beverages,Local,Fort Wayne, Indiana">
  <meta name="author" content="Sean Barker">
  <link rel="stylesheet" href="thankyou.css" />
  <link href="https://fonts.googleapis.com/css?family=Oswald|Unlock" rel="stylesheet">
</head>
<figure id='wrapper'>
<body>
<div id='head'>
  <img src="images/logo.jpg" alt="Summit Beverages on Tap">
</div>
<div id="nav">
<ul>
  <li><a href="index.html">HOME</a></li>
  <li><a href="about.html">ABOUT</a></li>
  <li><a href="packages.html">PACKAGES</a></li>
   <li><a href="beverages.html">BEVERAGES</a></li>
   <li><a href="contact.html">CONTACT</a></li>
   <li><a href="location.html">LOCATION</a></li>
</ul>
</div>
<div class="HeadImg"id="ThankYouImg"> 
  <img src="images/SBTlg.png" alt="Cold brew pouring in glass">
</div>
<main>
 <h1>Thank you, <?php echo $firstName ?>!</h1>
 <p>We appreciate your interest in the Summit Beverages on Tap. 
<?php
if (!empty($_POST['packages'])&&!empty($_POST['beverages']))
{
	$packages = $_POST['packages'];
	$beverages = $_POST['beverages'];
	echo "One of our Beverage Specialists will send you information about the following packages:</p>\n";
	echo "<ul>\n";
	foreach($packages as $packageElement)
	{
		switch ($packageElement)
		{
			case 0: $packageName = "Rentals";
					break;
			case 1:	$packageName = "Events";
					break;
			case 2:	$packageName = "Subscriptions";
					break;
			case 3: $packageName = "Other";
					break;
					} // END SWITCH 
		echo "\t<li class='list'>$packageName</li>\n";
		echo "</ul>\n";
	}
	echo "<p>As well as the following beverages:</p>\n";
	echo "<ul>\n";
	foreach($beverages as $beverageElement)
	{
		switch ($beverageElement)
		{
			case 0: $beverageName = "Summit Cold Brew - Nitro Cold Brew";
					break;
			case 1:	$beverageName = "Summit Cold Brew - Original Cold Brew";
					break;
			case 2:	$beverageName = "Summit Cold Brew - Chocolate Chip Pancake";
					break;
			case 3: $beverageName = "Summit Cold Brew - Crimson";
					break;
			case 4: $beverageName = "Crossroads Kombutcha - Mango + Strawberry";
					break;
			case 5: $beverageName = "Crossroads Kombutcha - Blueberry + Sage";
					break;
			case 6: $beverageName = "Crossroads Kombutcha - Raspberry + Rose Hips";
					break;
			case 7: $beverageName = "Crossroads Kombutcha - Apricot + Ginger";
					break;
			case 8: $beverageName = "Bukàl Beverage Co. - Indus";
					break;
			case 9: $beverageName = "Bukàl Beverage Co. - Mekong";
					break;
			case 10: $beverageName = "Bukàl Beverage Co. - Yangtze";
					break;
					} // END SWITCH 
		echo "\t<li class='list'>$beverageName</li>\n";
	}
	echo "</ul>\n";
} // END IF (!EMPTY($_POST['packages']))
else if (!empty($_POST['packages']))
{
	$packages = $_POST['packages'];
	echo "One of our Beverage Specialists will send you information about the following packages:</p>\n";
	echo "<ul>\n";
	foreach($packages as $packageElement)
	{
		switch ($packageElement)
		{
			case 0: $packageName = "Rentals";
					break;
			case 1:	$packageName = "Events";
					break;
			case 2:	$packageName = "Subscriptions";
					break;
			case 3: $packageName = "Other";
					break;
					} // END SWITCH 
		echo "\t<li>$packageName</li>\n";
	}
	echo "</ul>\n";
} // END IF (!EMPTY($_POST['beverages']))
else if (!empty($_POST['beverages']))
{
	$beverages = $_POST['beverages'];
	echo "One of our Beverage Specialists will send you information about the following beverages:</p>\n";
	echo "<ul>\n";
	foreach($beverages as $beverageElement)
	{
		switch ($beverageElement)
		{
			case 0: $beverageName = "Summit Cold Brew - Nitro Cold Brew";
					break;
			case 1:	$beverageName = "Summit Cold Brew - Original Cold Brew";
					break;
			case 2:	$beverageName = "Summit Cold Brew - Chocolate Chip Pancake";
					break;
			case 3: $beverageName = "Summit Cold Brew - Crimson";
					break;
			case 4: $beverageName = "Crossroads Kombutcha - Mango + Strawberry";
					break;
			case 5: $beverageName = "Crossroads Kombutcha - Blueberry + Sage";
					break;
			case 6: $beverageName = "Crossroads Kombutcha - Raspberry + Rose Hips";
					break;
			case 7: $beverageName = "Crossroads Kombutcha - Apricot + Ginger";
					break;
			case 8: $beverageName = "Bukàl Beverage Co. - Indus";
					break;
			case 9: $beverageName = "Bukàl Beverage Co. - Mekong";
					break;
			case 10: $beverageName = "Bukàl Beverage Co. - Yangtze";
					break;
					} // END SWITCH 
		echo "\t<li>$beverageName</li>\n";
		}
	echo "</ul>\n";
}
 else 
{
	echo " You did not express interest in any of our packages or beverages.  One of our Beverage Specialists will contact you as soon as possible. </p>\n";
}

echo "<p>We will contact you at your email address, <code>$emailAddress</code>. Thank you again!</p> 
</main>\n";
?>
<footer>
<div class="footer"> 
  <h2>SUMMIT BEVERAGES ON TAP</h2>
  <p>&copy; <span id="year"></span>. All rights reserved.</p>
</div>
</footer>
<script>
   var currentYear = new Date().getFullYear();
   var dateContainer = document.getElementById("year");
   dateContainer.innerHTML = currentYear;
</script>
</body>
</figure>
</html>
