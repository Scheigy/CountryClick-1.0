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
								<td>" . $list[$i]['pseudo'] . "</td>
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

			$bdd = connectBDD();

			$line = 'SELECT pseudo FROM user ORDER BY pseudo ASC';

			$req = $bdd->prepare($line);

			if ($req->execute())
			{
				$list = $req->fetchAll();

				$i = 0;

				while (!empty($list[$i]))
					echo '<a href="members/?pseudo=' . $list[$i]['pseudo'] . '" title="Page membre">' . $list[$i++]['pseudo'] . "</a><br />";
			}
			else {
				echo "Database connection error.";
			}



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