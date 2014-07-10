<?php

include_once('fonctions.php');

function SQL_verifyUser()
{
	$bdd = connectBDD();

	$line = 'SELECT pseudo FROM user WHERE `pseudo` = \'' . $_SESSION["pseudo"] . '\'';

	$req = $bdd->prepare($line);

	if (($req->execute()))
	{
		$result = $req->fetch();
		if (isset($result['pseudo']))
			return 0;
		else
			return 1;
	}
	return 1;
}
?>