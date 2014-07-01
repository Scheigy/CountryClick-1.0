<?php

include ("header.php");
include ("fonctions.php");

$bdd = connectBDD();

$line = "DELETE FROM `user` WHERE `pseudo` = '" . $_SESSION['pseudo'] . "'";

$request = $bdd->prepare($line);

$result = $request->execute();

if ($result)
{
	echo '<script>
	alert("Compte supprimée avec succès");
	document.location.href="index.php";
</script>';
session_destroy();
}
else
	echo '<script>
alert("Votre compte n\'a pas pu être supprimé");
document.location.href="index.php";
</script>';

?>