<?php

include ("header.php");
include ("fonctions.php");

$bdd = connectBDD();

$line = "DELETE FROM `user` WHERE `pseudo` = '" . $_SESSION['pseudo'] . "'";
$line2 = "DELETE FROM `game` WHERE `pseudo` = '" . $_SESSION['pseudo'] . "'";

$request = $bdd->prepare($line);
$request2 = $bdd->prepare($line2);

$result = $request->execute();
$result2 = $request2->execute();

if ($result && $result2)
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