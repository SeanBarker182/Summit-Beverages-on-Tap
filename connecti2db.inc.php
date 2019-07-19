<?php
  #  Script:			connecti2db.inc.php 
  #  Author:			Sean Barker
  #  Last Updated:		December 5, 2018
  #  Description:		establish a connection to the SQL server
  #  Dependencies:		calling script must assign $dbName
  #				before requiring this file.

    // Assign variables
    $host     = "127.0.0.1";	// must use 127.0.0.1 with mysqli
    $uname    = "sbarker";
    $pass     = "7RWE5jwz90";

    // Connect to SQL Server
    $connection = mysqli_connect($host,$uname,$pass,$dbName) // attempt to connect to MySQL server
      or
    die ("Connection to SQL server could not be established.\n");

    // USE the Database
    $result = mysqli_select_db($connection,$dbName) // attempt to USE chosen database
      or
    die ("<br />$dbName database could not be selected. " . mysqli_error($connection));

?>
