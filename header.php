<?php
session_start();
include_once('secure.php');

echo SQL_verifyUser();

if (empty($_SESSION['pseudo']) && !empty($_COOKIE['userSession']))
{
	if (isset($_COOKIE['userSession']))
		$_SESSION['pseudo'] = $_COOKIE['userSession'];
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<html xmlns="http://www.w3.org/1999/xhtml">
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="icon" type="image/png" href="img/favicon.png" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Country Click - Bêta 1.0</title>
</head>
<body>
	<header id="header" class="row">
		<div class="col-lg-12">
			<a href="index.php" title="Index"><img src="img/logo.png" alt="Logo"/></a>

			<div id="social_bar">
				<a href="https://www.facebook.com/countryclick" target="_blank" title="Facebook">
					<img class="social_element" src="img/facebook.png" alt="facebook" />
				</a>
				<a href="https://twitter.com/share" target="_blank" data-via="Scheigy" data-lang="fr" data-hashtags="countryclick" title="">
					<script>
						!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
					</script>
					<img class="social_element" src="img/twitter.png" alt="twitter" />
				</a>
				<a href="#" title="">
					<img class="social_element" src="img/google_plus.png" alt="google_plus" />
				</a>
			</div>
			<?php include_once("menu.php"); ?>
		</div>
	</header>
	<div id="exButton"><a href="#" title="expand"><img src="img/expand.png" alt="expand" /></a></div>