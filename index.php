<!DOCTYPE html>
<html>

<head>
	<title>DARIUS Dashboard 2022</title>
	<!--<link rel="stylesheet" type="text/css" href="main.css" />-->
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel='stylesheet' href='styles.css'/>
    
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
</script>
</head>
<body>
<header id="header" class="w3-bar w3-top w3-card w3-blue">
  <div title = "Main Menu" class="w3-hover-none w3-button w3-bar-item" onclick="toggle('small_menu');"><i class="fa fa-code"></i></div> 
  <div class="w3-bar-item w3-padding">DARIUS</div>
</header>
<div style="height: 59px;"></div>
<div class="w3-row">
<div id="small_menu" class="">
					<?php include ('nav.php'); ?> </div>
     <div class="w3-col l2">&nbsp;</div>
     <div class="w3-col l10">
     <div class="main w3-row">

     <?php
		include ('home.php');
		include ('regional.php');
		include ('market-kpi.php');
		include ('market.php');
		
		if (isset($_GET["page"])) {
			$page = $_GET["page"];
			switch ($page) {
				case "home":
					showHome();
					break;
				case "regional":
					showRegional();
					break;
				case "market-kpi":
					showMarketKPI();
					break;
				case "market":
					showMarket();
					break;
			} 
		} else {
			showHome();
		}
		?>
      </div>
      </div>
    
	</div>
<div>
 <footer id="footer" class="w3-bottom w3-bar w3-padding" style="z-index: 2;">&copy; 2022 Cirrolytix Research Services</footer>
</div>



  <script src="controls.js"></script>
</body>