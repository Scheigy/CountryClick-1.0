<?php include("header.php"); ?>
<div class="container">
	<div class="row">
		<section class="col-lg-12" id="unique">
			<h1>Mon compte</h1>
			<h2>Modifier mon mot de passe</h2>
			Fonction désactivée pour l'instant.
			<form class="form-horizontal" role="form" action="changepwd.php" method="post">

				<div class="form-group">
					<label for="inputOldpwd" class="col-sm-offset-3 col-sm-3 control-label">Ancien mot de passe</label>
					<div class="col-sm-2">
						<input type="password" name="oldpwd" class="form-control" id="inputOldwd" placeholder="Ancien mot de passe" required>
					</div>
				</div>

				<div class="form-group">
					<label for="inputNewpwd" class="col-sm-offset-3 col-sm-3 control-label">Nouveau mot de passe</label>
					<div class="col-sm-2">
						<input type="password" name="newpwd" class="form-control" id="inputNewpwd" placeholder="Nouveau mot de passe" required>
					</div>
				</div>
				
				<div class="form-group">
					<label for="inputNewpwd2" class="col-sm-offset-3 col-sm-3 control-label">Confirmer nouveau mot de passe</label>
					<div class="col-sm-2">
						<input type="password" name="newpwd2" class="form-control" id="inputNewpwd2" placeholder="Confirmation" required>
					</div>
				</div>

			</form><br />
			<h2>Effacer la sauvegarde</h2><br/>
			<input class="submit btn-lg btn-danger" type="submit" name="Valider" onclick="if (confirm('Voulez vous vraiment supprimer votre sauvegarde ?')){
			window.localStorage.clear();}" value="Réinistialiser"/><br /><br />
		</div>
	</div>
</div>
</div>
</body>
</html>