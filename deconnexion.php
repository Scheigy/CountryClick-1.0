<?php
unset($_COOKIE['userSession']);

var_dump($_COOKIE);

include('header.php');

session_destroy();

?>
<div class="container">
	<section id="unique">
		<p>
			Vous êtes bien déconnecté. Vous allez être redirigé dans 5 secondes. 
			<a href="index.php" title="Accueil">Cliquez ici si la redirection ne se fait pas.</a>
		</p>
	</section>

	<?php

	header ("Refresh: 5;URL=index.php");

	?>

</div>
</body>
</html>