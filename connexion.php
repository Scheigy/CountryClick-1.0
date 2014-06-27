<?php
include("fonctions.php");
include("header.php");
?>
<div class="container">
	<section id="unique">
		<?php
		$bdd = connectBDD();

		$line = 'SELECT pseudo FROM `user` WHERE `pseudo` = "' . $_POST['pseudo'] . '" AND `password` = "' . sha1($_POST['password']) . '"';

		$request = $bdd->prepare($line);

		$result = $request->execute();

		if ($return = $request->fetch())
		{
			echo 'Bonjour <strong>' . $_POST['pseudo'] . '</strong> :)<br />';
echo 'Vous allez être redirigé dans 10 secondes. <a href="game_page.php" title="Jouer!">Cliquez ici si la redirection ne se fait pas.</a>';
header ("Refresh: 10;URL=game_page.php");
}
else
{
	echo "Connexion échouée. Vérifiez vos informations et réesayez.<br />";
	echo 'Vous allez être redirigé dans 10 secondes. <a href="index.php" title="Jouer!">Cliquez ici si la redirection ne se fait pas.</a>';
	header ("Refresh: 10;URL=index.php");
}

?>
</section>
</div>