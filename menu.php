<?php
if (!empty($_SESSION['pseudo']))
{
	echo'<ul id="menu">
	<span class="case"><li><a href="index.php" title="Accueil">Accueil</a></li></span>
	<span class="case"><li><a href="game_page.php" title="Jouer">Jouer</a></li></span>
	<span class="case"><li><a href="members.php" title="Membres">Membres</a></li></span>
	<span class="case"><li><a href="account.php" title="Mon compte">Mon compte</a></li></span>
	<span class="case"><li><a data-tooltip="Non disponible pour l\'instant" data-placement="left" href="contact.php" title="Contact">Contact</a></li></span>
	<span class="case"><li><a href="about.php" title="A propos">A propos</a></li></span>
	<span class="case"><li><a href="deconnexion.php" title="Déconnexion">Déconnexion</a></li></span>
	<span class="case"><li><a data-tooltip="Supportez le jeu!" data-placement="left" style="color:yellow;" href="#">PREMIUM</a></li></span>
</ul>';
}

else
{
	echo'<ul id="menu">
	<span class="case"><li><a href="index.php" title="Accueil">Accueil</a></li></span>
	<span class="case"><li><a href="members.php" title="Membres">Membres</a></li></span>
	<span class="case"><li><a href="contact.php" title="Contact">Contact</a></li></span>
	<span class="case"><li><a href="about.php" title="A propos">A propos</a></li></span>
</ul>';
}