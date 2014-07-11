<?php

include_once('header.php');
include_once('fonctions.php');

$line = 'SELECT * FROM game WHERE pseudo = \'' . $_GET['user'] . '\'';
$bdd = connectBDD();
$req = $bdd->prepare($line);

$req->execute();

$line2 = 'SELECT * FROM user WHERE pseudo = \'' . $_GET['user'] . '\'';
$req2 = $bdd->prepare($line2);

$req2->execute();

$table_game = $req->fetch();
$table_user = $req2->fetch();


$imgUrl = array('dev' => "avatar_dev.png", 
	'alpha' => "avatar_alpha.png",
	'simple' => "avatar_simple.png");


$dev = array(0 => "Scheigy",
	1 => "sacha",
	2 => "TCB-IP");

function getImg($list, $user, $imgUrl, $dev)
{
	$i = 0;
	while (isset($dev[$i]))
	{
		if ($dev[$i++] == $user)
			return $imgUrl['dev'];
	}
	if ($list['alpha'] == 'Oui')
		return $imgUrl['alpha'];
	return $imgUrl['simple'];
}

function getPercentageUpgrades($upgrade)
{
	$i = 0;
	$nb = 0;

	while (isset($upgrade[$i]))
	{
		if ($upgrade[$i++] == 2)
			$nb++;
	}
	return (number_format((($nb / 24) * 100), 2));
}

function getPercentageAchievements($data)
{
	$i = 0;
	$nb = 0;

	while (isset($data[$i]))
	{
		$nb += $data[$i++];
	}
	$nb = $nb / 69 * 100;
	return number_format($nb, 2);
}

?>

<div class="container">

	<section id="unique">
		<div id="return" style="position: absolute; float: left;">
			<a href="members.php" title="Membres"><span class="glyphicon glyphicon-arrow-left"></span> Retour à la liste des membres</a>
		</div>
		<h1>Page de <?php echo $_GET['user'] ?></h1>
		<?php
		function force($number)
		{
			if ($number == NULL)
				return 0;
			else
				return $number;
		}

		if ($table_user['alpha'] == 'Oui')
			echo "<h3>A joué à l'Alpha</h3>";
		else if ($table_user['alpha'] == 'Dev')
			echo "<h3>Dev'</h3>";
		echo "<img onmouseover='animationAvatar(1, 0, 1);' onmouseout='animationAvatar(0, 0, 1);' id='profileAvatar' src='img/" . getImg($table_user, $_GET['user'], $imgUrl, $dev) . "' alt='Avatar'/><br />";
		?>
		<div id="tableProfile" style="text-align: left;" class="table-responsive">
			<table class="table">
				<thead>
					<th>Argent actuel</th>
					<th>Argent total</th>
					<th>Production</th>
					<th><img class="profileImg" src="img/worker.png"/></th>
					<th><img class="profileImg" src="img/businessman.png"/></th>
					<th><img class="profileImg" src="img/supermarket.png"/></th>
					<th><img class="profileImg" src="img/factory.png"/></th>
					<th><img class="profileImg" src="img/bank.png"/></th>
					<th><img class="profileImg" src="img/mine.png"/></th>
					<th><img class="profileImg" src="img/president.png"/></th>
					<th><img class="profileImg" src="img/cloud.png"/></th>
					<th>Améliorations</th>
					<th>Succès</th>
				</thead>
				<tbody>

					<tr>
						<td><?php echo number_format($table_game['money'], 0, ' ', ' ') . " $"; ?></td>
						<td><?php echo number_format($table_game['total_money'], 0, ' ', ' ') . " $"; ?></td>
						<td><?php echo number_format($table_game['prod_money'], 0, ' ', ' ') . " $/sec"; ?></td>
						<td><?php echo force($table_game['worker']); ?></td>
						<td><?php echo force($table_game['businessman']); ?></td>
						<td><?php echo force($table_game['supermarket']); ?></td>
						<td><?php echo force($table_game['factory']); ?></td>
						<td><?php echo force($table_game['bank']); ?></td>
						<td><?php echo force($table_game['mine']); ?></td>
						<td><?php echo force($table_game['president']); ?></td>
						<td><?php echo force($table_game['antimatter']); ?></td>
						<td><?php echo getPercentageUpgrades($table_game['upgrade']) . " %"; ?></td>
						<td><?php echo getPercentageAchievements($table_game['achiev']) . " %"; ?></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<?php include_once('footer.php'); ?>
</div>
</body>
</html>
