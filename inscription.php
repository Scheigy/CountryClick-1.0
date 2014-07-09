<?php

include("fonctions.php");
include("header.php");

?>
<div class="container">
	<section id="unique">
		<?php
		$bdd = connectBDD();

		$check = 0;

		if ($_POST['password'] != $_POST['password2'])
		{
			echo 'Les mots de passe ne correspondent pas<br />';
			echo 'Vous allez être redirigé dans 5 secondes. <a href="form_inscription.php" title="Inscription">Cliquez ici si la redirection ne se fait pas.</a>';
			header ("Refresh: 5;URL=form_inscription.php");
		}
		else
		{
			if (existingUser($_POST['pseudo'], $bdd) && existingMail($_POST['mail'], $bdd))
			{
				if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL))
				{
					if ((!empty($_POST['pseudo'])) && (!empty($_POST['mail'])) && (!empty($_POST['password'])))
					{
						$request = $bdd->prepare('INSERT INTO user (pseudo, mail, password, prenom, nom, sexe, pays) 
							VALUES (:pseudo, :mail, :password, :prenom, :nom, :sexe, :pays)');

						if (($request->execute(array(
							'pseudo' => htmlspecialchars($_POST['pseudo']),
							'password' => sha1($_POST['password']),
							'mail' => htmlspecialchars($_POST['mail']),
							'prenom' => htmlspecialchars($_POST['firstName']),
							'nom' => htmlspecialchars($_POST['lastName']),
							'sexe' => htmlspecialchars($_POST['sex']),
							'pays' => htmlspecialchars($_POST['country']),
							))))
						{
							$gameData = $bdd->prepare('INSERT INTO game (pseudo) VALUES (:pseudo)');
							$gameData->execute(array('pseudo' => htmlspecialchars($_POST['pseudo'])));
							$check = 1;
							$_SESSION['pseudo'] = $_POST['pseudo'];
							echo 'Inscription réussie, bienvenue <strong>' . $_POST['pseudo'] . '</strong> !<br />';
							echo 'Vous allez être redirigé dans 5 secondes. <a href="game_page.php" title="Jouer">Cliquez ici si la redirection ne se fait pas.</a>';
							header ("Refresh: 5;URL=game_page.php");
						}
						else
							"Eh merde...";
					}
					else
						echo "Erreur dans les formulaires, merci de réesayer.<br />";
				}
				else
					echo "Mail incorrect<br />";
			}
			else
				echo "Pseudo ou mail déjà utilisé. Merci de vérifier vos informations.<br />";

			if ($check != 1)
			{
				echo 'Vous allez être redirigé dans 5 secondes. <a href="index.php" title="Accueil">Cliquez ici si la redirection ne se fait pas.</a>';
				header ("Refresh: 5;URL=index.php");
			}
		}
		?>
	</section>
	<script src="js/footer.js"></script>
</div>