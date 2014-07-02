<?php include("header.php"); ?>
<section class="container" id="unique">
	<h1>Contact</h1><br />
	Fonction désactivée pour l'instant.
	<form class="form-horizontal" role="form" action="sendmsg.php" method="post">
		<div class="form-group">
			<label for="selectSubject" class="col-sm-offset-2 col-sm-3 control-label">Raison de votre message</label>
			<div class="col-sm-5">
				<select class="form-control">
					<option>Signaler un bug</option>
					<option>Questions diverses</option>
					<option>Partenariat</option>
					<option>Copyright</option>
				</select>
			</div>
		</div>
		<div class="form-group">
			<label for="inputContent" class="col-sm-offset-2 col-sm-3 control-label">Contenu</label>
			<div class="col-sm-5">
				<textarea name="inputContent" class="form-control" rows="10" placeholder="Veuillez taper ici votre message" required></textarea>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-7">
				<button type="submit" class="btn-lg btn-primary">Envoyer</button>
			</div>
		</div>
	</form>
</section>
<?php include("footer.php"); ?>
</body>
</html>