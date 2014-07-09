<?php

session_start();

include ('fonctions.php');

$bdd = connectBDD();

$line = 'SELECT * FROM game WHERE pseudo = \'' . $_SESSION["pseudo"] . '\'';

$request = $bdd->prepare($line);

if (($request->execute()))
{
	$result = $request->fetch();
	$i = 1;
	while ($i < 15)
		echo $result[$i++] . '<br />';
}

?>