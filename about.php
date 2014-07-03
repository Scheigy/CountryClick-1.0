<?php include("header.php"); ?>
<div class="container">
	<section id="unique">
		<h1>Le crou</h1>
		<p>
			Nous sommes trois étudiants en école d'informatique (Epitech Strasbourg) et Country Click est notre projet personnel lors de notre 1ère année.<br/>
			Nous avons réalisé ce jeu en trois semaines en apprenant différents langages nécessaires pour le développement du jeu, à savoir le
			HTML/CSS, le PHP/MySQL et le JavaScript
		</p>
		<figure>
			<img src="img/sacha.png" alt="Sacha">
			<figcaption>Sacha Avazashvili</figcaption>
		</figure>
		<figure>
			<img src="img/mael.png" alt="Maël">
			<figcaption>Maël Schweighardt</figcaption>
		</figure>
		<figure>
			<img src="img/brunne.png" alt="Brunne">
			<figcaption>Steeven Brunner</figcaption>
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