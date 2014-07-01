<?php

include("header.php");

if (empty($_SESSION['pseudo']))
	header("Location: game_session.php");

?>


<script>
if (confirm('Cette action est definitive. Souhaitez-vous vraiment supprimer votre compte ?'))
{
	document.location.href="deleteaccount.php";
}
else
{
	document.location.href="index.php";
}
</script>