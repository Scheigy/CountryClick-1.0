<?php

session_start();

include ('fonctions.php');

$bdd = connectBDD();

foreach ($_POST as $key => $value) 
{
	//$line = "UPDATE game (" . $key . ") VALUES (:value) WHERE pseudo = '" . $_SESSION['pseudo'] . "'";
	$line = "UPDATE game SET " . $key . " = (:value) WHERE pseudo = '" . $_SESSION['pseudo'] . "'";

	echo '______________' . $line . '___________';

	$request = $bdd->prepare($line);

	$request->execute(array('value' => $value));
}

?>