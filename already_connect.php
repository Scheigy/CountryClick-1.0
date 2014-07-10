<section class="col-lg-offset-1 col-lg-5" style="text-align:center;">
	<h2>Vos parties</h2>
	Fonctionnalité à venir

	<div style="border: 1px solid black;">
		<a href="game_page.php"><h3>Partie 1</h3></a>
		<p>
			<?php
			$bdd = connectBDD();
			$req = $bdd->prepare('SELECT money, timecounter FROM game WHERE pseudo = \'' . $_SESSION["pseudo"] . '\'');
			if ($req->execute())
			{
				$result = $req->fetchAll();

				echo "Temps de jeu: " . gmdate('H:i:s', $result[0]['timecounter']) . "<br />
				Dollars: . " . $result[0]['money'];
				echo "<br />" . $result[0]['timecounter'];
			}
			?>
		</p>
	</div>

	<div style="border: 1px solid black; border-top: 1px dashed black;">
		<a href="#"><h3>Partie 2</h3></a>
		<p>
			Temps de jeu: <br />
			Dollars: 
		</p>
	</div>

	<div style="border: 1px solid black; border-top: 1px dashed black;">
		<a href="#"><h3>Partie 3</h3></a>
		<p>
			Temps de jeu: <br />
			Dollars: 
		</p>
	</div>
</section>