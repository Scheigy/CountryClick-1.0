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
			if (isset($_POST['setcookie']))
				setcookie("userSession", $_POST['pseudo'], time()+60*60*24*30);
			$_SESSION['pseudo'] = $_POST['pseudo'];
			echo 'Bonjour <strong>' . $_POST['pseudo'] . '</strong> :)<br />';
echo 'Vous allez être redirigé. <a href="game_page.php" title="Jouer!">Cliquez ici si la redirection ne se fait pas.</a>';
header ("Refresh: 2;URL=game_page.php");
}
else
{
	echo "Connexion échouée. Vérifiez vos informations et réesayez.<br />";
	echo 'Vous allez être redirigé. <a href="index.php" title="Jouer!">Cliquez ici si la redirection ne se fait pas.</a>';
	header ("Refresh: 2;URL=index.php");
}

?>
</section>
</div>