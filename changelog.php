<?php include("header.php"); ?>

<body>
	<div class="container">
		<div class="row">
			<section id="unique">
				<h1>Changelog</h1>
				<ul class="nav nav-tabs">
					<li class="dropdown">
						<a data-toggle="dropdown" class="dropdown-toggle" href="#">Version <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a data-toggle="tab" href="#dropdown3">A venir</a></li>
							<li><a data-toggle="tab" href="#dropdown2">1.2</a></li>
							<li><a data-toggle="tab" href="#dropdown1">1.1</a></li>
						</ul>
					</li>
				</ul>
				<div class="tab-content">
					<div id="dropdown3" class="tab-pane fade">
						<p>
							<h3>A venir</h3>
							- Récupération de votre sauvegarde sur d'autres machines/navigateurs<br />
							- Succès<br />
						</p>
					</div>
					<div id="dropdown2" class="tab-pane fade active">
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
					</div>
					<div id="dropdown1" class="tab-pane fade">
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
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>