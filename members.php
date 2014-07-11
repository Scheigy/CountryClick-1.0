<?php  
include("header.php");
include("fonctions.php");
?>
<div class="container">
	<section id="unique">
		<h1>Membres</h1>

		<div class="row">
			<input class="col-lg-offset-4 col-lg-2 btn-lg btn-primary" type="submit"  onclick="blockMember('listMember');" value="Liste"/>
			<input class="col-lg-2 btn-lg btn-primary" type="submit" onclick="blockMember('ladder');" value="Classement"/>
		</div>

		<div id="ladder">
			<h2>Classement</h2>
			<?php

			$bdd = connectBDD();

			$line = 'SELECT pseudo, total_money FROM game ORDER BY total_money DESC';

			$req = $bdd->prepare($line);

			if ($req->execute())
			{
				$list = $req->fetchAll();
			}
			else {
				echo "Database connection error.";
			}

			$i = 0;

			?>
			<div style="text-align: left;" class="table-responsive">
				<table class="table">
					<thead>
						<th>#</th>
						<th>Pseudo</th>
						<th>Argent total</th>
					</thead>
					<tbody>
						<?php
						while (isset($list[$i]))
						{
							echo "
							<tr>
								<td>" . ($i + 1) . "</td>
								<td><a href='profile.php?user=" . $list[$i]['pseudo'] . "' title='Profil de " . $list[$i]['pseudo'] . "'>" . $list[$i]['pseudo'] . "</a></td>
								<td>" . number_format($list[$i]['total_money'], 0, ' ', ' ') . "</td>
							</tr>";
							$i++;
						};
						?>
					</tbody>
				</table>
			</div>
		</div>

		<div id="listMember">
			<h2>Liste des membres</h2>

			<?php

			$imgUrl = array('dev' => "avatar_dev.png", 
				'alpha' => "avatar_alpha.png",
				'simple' => "avatar_simple.png");


			$dev = array(0 => "Scheigy",
				1 => "sacha",
				2 => "TCB-IP");

			$bdd = connectBDD();

			$line = 'SELECT * FROM user ORDER BY pseudo ASC';

			$req = $bdd->prepare($line);

			if ($req->execute())
			{
				function getImg($list, $imgUrl, $dev)
				{
					$i = 0;
					while (isset($dev[$i]))
					{
						if ($dev[$i++] == $list['pseudo'])
							return $imgUrl['dev'];
					}
					if ($list['alpha'] == 'Oui')
						return $imgUrl['alpha'];
					return $imgUrl['simple'];
				}

				function transformDate($date)
				{
					$today = new DateTime();
					$user = new DateTime($date);
					if ($today->diff($user)->m == '0')
					{
						if($today->diff($user)->d == '0')
							return "Aujourd'hui";
						else
							return $today->diff($user)->format('%d jours');
					}
					return $today->diff($user)->format('%m mois');
				}

				$list = $req->fetchAll();

				$i = 0;
				?>
				<div class="container">
					<div style="text-align: left;" class="table-responsive">
						<table class="table">
							<thead>
								<th width="1%"></th>
								<th>Pseudo</th>
								<th>Inscrit depuis</th>
							</thead>
							<tbody>
								<?php
								$nbClass = 0;
								while (!empty($list[$i]))
								{

									echo "<tr>
									<td><img onmouseover='animationAvatar(1, " . $nbClass . ", 0);' onmouseout='animationAvatar(0, " . $nbClass . ", 0);' style='border-radius: 150px;' id='profileAvatar' class='avatar' src='img/" . getImg($list[$i], $imgUrl, $dev) . "'/></td>
									<td><a href='profile.php?user=" . $list[$i]['pseudo'] . "' title='Profil de " . $list[$i]['pseudo'] . "'>" . $list[$i]['pseudo'] . "</a></td>
									<td>" . transformDate($list[$i++]['date_inscription']) . "</td>
								</tr>";
								$nbClass++;
							}
						}
						?>
					</tbody>
				</table>
			</div>
		</div>

		<?php


		?>
	</div>
</section>
</div>
<?php include_once("footer.php"); ?>
<script>
	blockMember(null);
</script>
</body>
</html>