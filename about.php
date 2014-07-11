<?php include("header.php"); ?>
<div class="container">
	<section id="unique">
		<h1>Le crou</h1>
		<p>
			Country Click est un projet de fin de première année à Epitech.<br />
			Nous avons décidés de réaliser ce jeu pour perfectionner nos connaissances en Web.
		</p>
		<p>
			N'hésitez pas à passer la souris sur les photos pour en savoir plus sur nous !<br />
		</p>

		<figure>
			<img src="img/mael.png" alt="Maël">
			<figcaption>MAEL SCHWEIGHARDT<br />Développement Web</figcaption>
		</figure>
		<figure>
		<img src="img/sacha.jpg" alt="Sacha">
			<figcaption>SACHA AVAZASHVILI<br />Développement JS</figcaption>
		</figure>
		<figure>
			<img src="img/brunne.jpg" alt="Brunne">
			<figcaption>STEEVEN BRUNNER<br />Développement JS</figcaption>
		</figure>
		<figure>
			<img src="img/ququ.png" alt="Quentin">
			<figcaption>QUENTIN KERGUELEN<br />Graphiste</figcaption>
		</figure><br />
		<h2>Nous faire un don <3</h2>
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="hosted_button_id" value="A68WEMDWP54HY">
			<input type="image" height="15%" width="15%" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - la solution de paiement en ligne la plus simple et la plus sécurisée !">
			<img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
		</form>

	</section>
	<?php include("footer.php"); ?>
</body>
</html>