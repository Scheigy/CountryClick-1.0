<?php 
include("header.php"); 
if (empty($_SESSION['pseudo']))
	header("Location: game_session.php");
?>

<div style="display:none;" id="pop_up">
	<p><span class="glyphicon glyphicon-info-sign"></span> Vos impôts sont trop chers, vous perdez 25% de vos ouvriers.</p>
	<button type="submit" id="pop_up_button" class="btn-lg btn-danger"><span class="glyphicon glyphicon-ok-sign"></span> Ok</button>
</div>
<div class="container">
	<div id="wrap">
		<div class="row" id="first_row">

			<section id="left" class="col-xs-4 col-lg-3">
				<div id="dollar_panel">
					<h1>Vos ressources</h1><br />
					<div class="infos" id="dollar_counter">0 $</div><br />
					<div id="dollar">
						<img src="img/dollar2.png" alt="dollar" />
					</div><br />
					<div class="infos" id="dollar_prod">0 $ par seconde</div><br />
					<div class="infos" id="dollar_total">TOTAL : 0 $</div><br />
				</div>
			</section>

			<section id="central" class="col-lg-offset-1 col-xs-4 col-lg-4">
				<div id="msg"><marquee>printf("Coucou\n");</marquee></div>
				<div id="upgrade">
					<h1>Améliorations</h1><br />

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="one">1 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="two">10 K</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="three">100 K</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="four">10 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="five">100 K</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="six">1 000 K</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="seven">100 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="eight">1 000 K</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="nine">10 000 K</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="ten">1 000 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="eleven">10 000 K</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="twelve">100 000 K</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="thirteen">10 000 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="fourteen">100 000 K</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="fifteen">1 M</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="sixteen">100 000 K</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="seventeen">1 M</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="eighteen">10 M</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="nineteen">1 M</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="twenty">10 M</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="twenty-one">100 M</div>
					</div>

					<div class="row">
						<div class="square col-lg-3 col-md-3 col-xs-3" id="twenty-two">10 M</div>
						<div class="col-lg-offset-1 square col-lg-4 col-md-4 col-xs-4" id="twenty-three">100 M</div>
						<div class="col-lg-offset-1 square col-lg-3 col-md-3 col-xs-3" id="twenty-four">1 000 M</div>
					</div>
				</div>

				<div class="row" id="central_menu">
					<button type="submit" class="btn-lg btn-success">Bâtiments</button>
					<button type="submit" class="btn-lg btn-warning">Améliorations</button>
					<button type="submit" class="btn-lg btn-danger">Succès</button>
				</div>

			</section>

			<section id="right" class="col-lg-offset-1 col-xs-4 col-lg-3">

				<div class="row worker_div" id="worker_button">
					<img class="col-lg-4 worker_img" src="img/Worker.png" alt="worker" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_worker" class="nb_worker">0 worker(s)</div>
						<div id="worker_cost" class="worker_cost">Prix : 0$</div>
						<div id="worker_benefit" class="worker_benefit">Bénéfice : 1 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="businessman_button">
					<img class="col-lg-4 worker_img" src="img/Businessman.png" alt="businessman" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_businessman" class="nb_worker">1 cadre(s)</div>
						<div id="businessman_cost" class="worker_cost">Prix : 0$</div>
						<div id="businessman_benefit" class="worker_benefit">Bénéfice : 5 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="supermarket_button">
					<img class="col-lg-4 worker_img" src="img/Supermarket.png" alt="supermarket" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_supermarket" class="nb_worker">1 supermarché(s)</div>
						<div id="supermarket_cost" class="worker_cost">Prix : 0$</div>
						<div id="supermarket_benefit" class="worker_benefit">Bénéfice : 15 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="factory_button">
					<img class="col-lg-4 worker_img" src="img/Factory.png" alt="factory" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_factory" class="nb_worker">1 usine(s)</div>
						<div id="factory_cost" class="worker_cost">Prix : 0$</div>
						<div id="factory_benefit" class="worker_benefit">Bénéfice : 40 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="bank_button">
					<img class="col-lg-4 worker_img" src="img/Bank.png" alt="bank" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_bank" class="nb_worker">1 banque(s)</div>
						<div id="bank_cost" class="worker_cost">Prix : 0$</div>
						<div id="bank_benefit" class="worker_benefit">Bénéfice : 300 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="mine_button">
					<img class="col-lg-4 worker_img" src="img/Mine.png" alt="mine" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_mine" class="nb_worker">1 mine(s)</div>
						<div id="mine_cost" class="worker_cost">Prix : 0$</div>
						<div id="mine_benefit" class="worker_benefit">BénéficeBénéfice : 1 000 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="president_button">
					<img class="col-lg-4 worker_img" src="img/President.png" alt="president" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_president" class="nb_worker">1 président(s)</div>
						<div id="president_cost" class="worker_cost">Prix : 0$</div>
						<div id="president_benefit" class="worker_benefit">Bénéfice : 5 000 $/sec</div>
					</div>
				</div>

				<div class="row worker_div" id="antimatter_button">
					<img class="col-lg-4 worker_img" src="img/Antimater.png" alt="antimater" />
					<div class="text col-lg-offset-1 col-lg-7">
						<div id="nb_antimatter" class="nb_worker">1 nuage(s) d'antimatière</div>
						<div id="antimatter_cost" class="worker_cost">Prix : 0$</div>
						<div id="antimatter_benefit" class="worker_benefit">Bénéfice : 50 000 $/sec</div>
					</div>
				</div>
			</section>

		</div>
		<div class="row">
			<div class="col-xs-3" id="save_button">
				<img src="img/disquette.png" alt="disquette" />
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="js/storage.js"> </script>
<?php include("footer.php"); ?>
</body>
</html>