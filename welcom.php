<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>java script </title>
<link rel="stylesheet" type="text/css" href="css.css">
<script type="text/javascript" src="main.js"> 
 </script>
</head>
<body>
<?php
  $uname=$_POST['username'];
  $pass =$_POST['password'];
   $hp= sha1($pass);
  echo $uname;
  echo "<br>";
  echo $hp;
echo "Hello World!";
?>
  
  
  
		<!-- <p id="p1">This is first paragraph</p>-->
		<!-- <p>This is second Paragraph </p> -->
		<!--<button onclick="f1()">Click</button> -->
	
	</body>
	
<html>
