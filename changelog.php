<?php include_once("header.php"); ?>

<div class="container">
	<div class="row">
		<section id="unique">
			<h1>Changelog</h1>
			<ul class="nav nav-tabs">
				<li class="dropdown">
					<a data-toggle="dropdown" class="dropdown-toggle" href="#">Version <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a data-toggle="tab" href="#dropdown3">A venir</a></li>
						<li><a data-toggle="tab" href="#dropdown2">Bêta 1.0</a></li>
						<li><a data-toggle="tab" href="#dropdown1">Les Alphas</a></li>
					</ul>
				</li>
			</ul>
			<div class="tab-content">
				
				<div id="dropdown3" class="tab-pane fade active">
					<h2>A venir</h2>
					<p>
						Country Click est un jeu en perpétuelle évolution. La liste ci-dessous est bien sûr non-exhaustive car nous avons une foultitude d'idées en tête que nous préparons secrètement.<br />
						- Boutique Premium. Cela ne changera en rien votre façon habituelle de jouer si vous ne voulez rien payer.<br />
					</p>
				</div>

				<div id="dropdown2" class="tab-pane fade">
					<h2>Bêta 1.0</h2>
					<h3>Nouveautés</h3>
					<p>
						- Liste des membres et classement<br />
						- Les sauvegardes sont stockés sur votre compte, vous pouvez désormais jouer sur d'autres ordinateurs/navigateurs avec la même sauvegarde.<br />
					</p>
					<h3>Gameplay</h3>
					<p>
						- Des grèves d'ouvriers viendront parfois ralentir votre progression		
					</p>
					<h3>Correction de bugs</h3>
					<p>
						- Il n'est plus possible d'obtenir le bonus en vendant et en rachetant les bâtiments<br />
						- Les succès sont conservés après la revente des bâtiments<br />
						- Les prix s'affichent désormais correctement après une certaine somme
					</p>
				</div>

				<div id="dropdown1" class="tab-pane fade">
					<h2>Alpha 1.4 (04/07/14)</h2>
					<p>					
						<h3>Gameplay</h3>
						- Les succès sont désormais disponible.<br />
					</p>
					<h2>Alpha 1.3 (02/07/14)</h2>
					<p>
						<h3>Gameplay</h3>
						- Une chance d'avoir un bonus d'une durée de vingt secondes n'importe quand<br />
						__________
						<h3>PHP</h3>
						- Possibilité de supprimer son compte<br />
						__________
						<h3>Mise en page</h3>
						- Le menu peut être rangé pour avoir plus d'espace<br />
						- On voit quel bâtiment on peut acheter avec notre argent plus facilement<br />
					</p>
					<h2>Alpha 1.2 (31/06/14)</h2>
					<p>
						<h3>Divers</h3>
						- Nom de nomaine countryclick.fr<br />
						__________
						<h3>Gameplay</h3>
						- Bonus lors de l'obtention de 100 bâtiments au total<br />
						- Augmentation de l'augmentation des clics en fonction du nombre d'upgrade<br />
						__________
						<h3>PHP</h3>
						- Système de session (impossible d'accéder à la page de jeu sans être connecté)<br />
						__________
						<h3>Mise en page</h3>
						- Ajout d'un lien vers la page de jeu dans le menu<br />
						- Le changelog est beau<br />
					</p>
					<h2>Alpha 1.1 (28/06/14)</h2>
					<p><h3>Gameplay</h3>
						- Ajout d'un bonus temporaire à partir de 100 bâtiments d'un même type<br />
						- Augmentation du nombre de $ gagnés par clic<br />
						__________
						<h3>Mise en page</h3>
						- Ajout de la "social bar"<br />
						- Modification des infos sur les bénéfices à l'achat d'un upgrade<br />
						- Ajout des upgrades au centre<br />
						- Ajout d'un changelog (si si!)<br />
						- Ajout d'animations sur les bâtiments quand la souris est dessus<br />
						__________
						<h3>Correction de bugs</h3>
						- Amélioration de l'affichage sur des plus petites résolutions<br />
						- Correction du bug qui permettait de gagner plus quand le curseur n'est pas sur la page <br />
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
<?php include_once("footer.php"); ?>
</body>
</html>