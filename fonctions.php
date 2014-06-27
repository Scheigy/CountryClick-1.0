<?php 
function connectBDD()
{	
	try
	{
		$bdd = new  PDO('mysql:host=localhost;dbname=countryclick', 'root', '');
	}
	catch(Exception $e)
	{
		die('Erreur : '.$e->getMessage());
	}
	return ($bdd);
}

function existingUser($pseudo, $bdd)
{
	$line = 'SELECT pseudo FROM user WHERE pseudo = "' . $_POST['pseudo'] . '"';
	
	$request = $bdd->prepare($line);

	$result = $request->execute();

	$return = $request->fetch();

if ($return)
	return 0;
else
	return 1;
}

function existingMail($mail, $bdd)
{
	$line = 'SELECT mail FROM user WHERE mail = "' . $_POST['mail'] . '"';
	
	$request = $bdd->prepare($line);

	$result = $request->execute();

	$return = $request->fetch();

if ($return)
	return 0;
else
	return 1;
}
?>