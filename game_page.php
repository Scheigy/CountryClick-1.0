<?php 
include("header.php"); 
if (empty($_SESSION['pseudo']))
	header("Location: game_session.php");
?>

<div style="display:none;" id="pop_up">
	<p id="pop_up_p" ><span class="glyphicon glyphicon-info-sign"></span> Vos impôts sont trop chers, vous perdez 25% de vos ouvriers.</p>
	<button type="submit" id="pop_up_button" class="btn-lg btn-danger"><span class="glyphicon glyphicon-ok-sign"></span> Ok</button>
</div>

<div id="achievements">
	<a href="#"><span id="crossAch" class="cross glyphicon glyphicon-remove" onclick="closePop_up('achievements');"></span></a>
	<h1>Succès</h1>
	<a href="#" data-tooltip="Acheter 1 ouvrier" data-placement="top"><img class="achImg" id ="1_worker" src="img/upgrade/locked.png" alt="worker" /></a>
	<a href="#" data-tooltip="Acheter 30 ouvriers" data-placement="top"><img class="achImg" id ="2_worker" src="img/upgrade/locked.png" alt="worker" /></a>
	<a href="#" data-tooltip="Acheter 80 ouvriers" data-placement="top"><img class="achImg" id ="3_worker" src="img/upgrade/locked.png" alt="worker" /></a>
	<a href="#" data-tooltip="Acheter 150 ouvriers" data-placement="top"><img class="achImg" id ="4_worker" src="img/upgrade/locked.png" alt="worker" /></a>
	<a href="#" data-tooltip="Acheter 1 cadre" data-placement="top"><img class="achImg" id ="1_businessman" src="img/upgrade/locked.png" alt="businessman" /></a>
	<a href="#" data-tooltip="Acheter 30 cadres" data-placement="top"><img class="achImg" id ="2_businessman" src="img/upgrade/locked.png" alt="businessman" /></a>
	<a href="#" data-tooltip="Acheter 80 cadres" data-placement="top"><img class="achImg" id ="3_businessman" src="img/upgrade/locked.png" alt="businessman" /></a>
	<a href="#" data-tooltip="Acheter 150 cadres" data-placement="top"><img class="achImg" id ="4_businessman" src="img/upgrade/locked.png" alt="businessman" /></a><br />
	<a href="#" data-tooltip="Acheter 1 supermarché" data-placement="top"><img class="achImg" id ="1_supermarket" src="img/upgrade/locked.png" alt="supermarket" /></a>
	<a href="#" data-tooltip="Acheter 30 supermarchés" data-placement="top"><img class="achImg" id ="2_supermarket" src="img/upgrade/locked.png" alt="supermarket" /></a>
	<a href="#" data-tooltip="Acheter 80 supermarchés" data-placement="top"><img class="achImg" id ="3_supermarket" src="img/upgrade/locked.png" alt="supermarket" /></a>
	<a href="#" data-tooltip="Acheter 150 supermarchés" data-placement="top"><img class="achImg" id ="4_supermarket" src="img/upgrade/locked.png" alt="supermarket" /></a>
	<a href="#" data-tooltip="Acheter 1 usine" data-placement="top"><img class="achImg" id ="1_factory" src="img/upgrade/locked.png" alt="factory" /></a>
	<a href="#" data-tooltip="Acheter 30 usines" data-placement="top"><img class="achImg" id ="2_factory" src="img/upgrade/locked.png" alt="factory" /></a>
	<a href="#" data-tooltip="Acheter 80 usines" data-placement="top"><img class="achImg" id ="3_factory" src="img/upgrade/locked.png" alt="factory" /></a>
	<a href="#" data-tooltip="Acheter 150 usines" data-placement="top"><img class="achImg" id ="4_factory" src="img/upgrade/locked.png" alt="factory" /></a><br />	
	<a href="#" data-tooltip="Acheter 1 banque" data-placement="top"><img class="achImg" id ="1_bank" src="img/upgrade/locked.png" alt="bank" /></a>
	<a href="#" data-tooltip="Acheter 30 banques" data-placement="top"><img class="achImg" id ="2_bank" src="img/upgrade/locked.png" alt="bank" /></a>
	<a href="#" data-tooltip="Acheter 80 banques" data-placement="top"><img class="achImg" id ="3_bank" src="img/upgrade/locked.png" alt="bank" /></a>
	<a href="#" data-tooltip="Acheter 150 banques" data-placement="top"><img class="achImg" id ="4_bank" src="img/upgrade/locked.png" alt="bank" /></a>
	<a href="#" data-tooltip="Acheter 1 mine" data-placement="top"><img class="achImg" id ="1_mine" src="img/upgrade/locked.png" alt="mine" /></a>
	<a href="#" data-tooltip="Acheter 30 mines" data-placement="top"><img class="achImg" id ="2_mine" src="img/upgrade/locked.png" alt="mine" /></a>
	<a href="#" data-tooltip="Acheter 80 mines" data-placement="top"><img class="achImg" id ="3_mine" src="img/upgrade/locked.png" alt="mine" /></a>
	<a href="#" data-tooltip="Acheter 150 mines" data-placement="top"><img class="achImg" id ="4_mine" src="img/upgrade/locked.png" alt="mine" /></a><br />
	<a href="#" data-tooltip="Acheter 1 président" data-placement="top"><img class="achImg" id ="1_president" src="img/upgrade/locked.png" alt="president" /></a>
	<a href="#" data-tooltip="Acheter 30 présidents" data-placement="top"><img class="achImg" id ="2_president" src="img/upgrade/locked.png" alt="president" /></a>
	<a href="#" data-tooltip="Acheter 80 présidents" data-placement="top"><img class="achImg" id ="3_president" src="img/upgrade/locked.png" alt="president" /></a>
	<a href="#" data-tooltip="Acheter 150 présidents" data-placement="top"><img class="achImg" id ="4_president" src="img/upgrade/locked.png" alt="president" /></a>
	<a href="#" data-tooltip="Acheter 1 nuage d'antimatière" data-placement="top"><img class="achImg" id ="1_antimatter" src="img/upgrade/locked.png" alt="antimatter" /></a>
	<a href="#" data-tooltip="Acheter 30 nuages d'antimatière" data-placement="top"><img class="achImg" id ="2_antimatter" src="img/upgrade/locked.png" alt="antimatter" /></a>
	<a href="#" data-tooltip="Acheter 80 nuages d'antimatière" data-placement="top"><img class="achImg" id ="3_antimatter" src="img/upgrade/locked.png" alt="antimatter" /></a>
	<a href="#" data-tooltip="Acheter 150 nuages d'antimatière" data-placement="top"><img class="achImg" id ="4_antimatter" src="img/upgrade/locked.png" alt="antimatter" /></a><br />
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_totalbuild" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_totalbuild" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_totalbuild" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_totalbuild" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_totalbuild" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a><br />
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="6_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="7_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="8_totalmoney" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_prod" src="img/upgrade/locked.png" alt="Lock" /></a><br />
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="6_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="7_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="8_prod" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_time" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_time" src="img/upgrade/locked.png" alt="Lock" /></a>
	<a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_time" src="img/upgrade/locked.png" alt="Lock" /></a><br />
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_time" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_time" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_click" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_click" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_click" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_click" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_click" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="1_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a><br />
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="2_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="3_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="4_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="5_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a>
    <a href="#" data-tooltip="Locked" data-placement="top"><img class="achImg" id ="6_upgrade" src="img/upgrade/locked.png" alt="Lock" /></a>

</div>

<div class="pop" id="upgrade">
	<a href="#"><span id="crossAch" class="cross glyphicon glyphicon-remove" onclick="closePop_up('upgrade');"></span></a>

	<h1>Améliorations</h1><br />
	<div class="row" style="text-align:center;">
		<div class="col-lg-offset-3 col-lg-2 col-md-2 col-xs-2">x10</div>
		<div class="col-lg-offset-1 col-lg-2 col-md-2 col-xs-2">x50</div>
		<div class="col-lg-offset-1 col-lg-2 col-md-2 col-xs-2">x100</div>
	</div>
	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Ouvrier</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="one">1 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="two">10 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="three">100 K</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Cadre</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="four">10 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="five">100 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="six">1 000 K</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Supermarché</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="seven">100 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="eight">1 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="nine">10 000 K</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Usine</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="ten">1 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="eleven">10 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="twelve">100 000 K</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Banque</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="thirteen">10 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="fourteen">100 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="fifteen">1 M</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Mine</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="sixteen">100 000 K</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="seventeen">1 M</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="eighteen">10 M</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Président</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="nineteen">1 M</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="twenty">10 M</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="twenty-one">100 M</div>
	</div>

	<div class="row">
		<div class="col-lg-1 col-md-1 col-xs-1">Nuage d'antimatière</div>
		<div class="square col-lg-offset-2 col-lg-2 col-md-2 col-xs-2" id="twenty-two">10 M</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="twenty-three">100 M</div>
		<div class="col-lg-offset-1 square col-lg-2 col-md-2 col-xs-2" id="twenty-four">1 000 M</div>
	</div>
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
				<div id="msg"></div>
				<div id="buildings">
					<h1>Vos bâtiments</h1>
					<p>Coming soon</p>
					<div class="spriteLine">Ouvrier(s)</div>
					<div class="spriteLine">Cadre(s)</div>
					<div class="spriteLine">Supermarché(s)</div>
					<div class="spriteLine">Usine(s)</div>
					<div class="spriteLine">Banque(s)</div>
					<div class="spriteLine">Mine(s)</div>
					<div class="spriteLine">Président(s)</div>
					<div class="spriteLine last">Nuage(s) d'antimatière</div>
				</div>

				<div class="row" id="central_menu">
					<button type="submit" onclick="displayPop_up('upgrade');" class="btn-lg btn-info">Améliorations</button>
					<button type="submit" onclick="displayPop_up('achievements');" class="btn-lg btn-info">Succès</button>
				</div>

			</section>

			<section id="right" class="col-lg-offset-1 col-xs-4 col-lg-3">
				<div style="text-align:center;"><p>Total des bâtiments : <span id="total_buildings">NULL</span></p></div>
				
				<div onMouseOut="disappearSell('Worker');"; onMouseOver="appearSell('Worker');">
					<div class="row worker_div" id="worker_button">
						<img class="col-lg-4 worker_img" src="img/Worker.png" alt="worker" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_worker" class="nb_worker">0 worker(s)</div>
							<div id="worker_cost" class="worker_cost">Prix : 0$</div>
							<div id="worker_benefit" class="worker_benefit">Bénéfice : 1 $/sec</div>
						</div>
					</div>
					<div id="sellWorker" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Worker" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Worker" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllWorker" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Businessman')"; onMouseOver="appearSell('Businessman');">
					<div class="row worker_div" id="businessman_button">
						<img class="col-lg-4 worker_img" src="img/Businessman.png" alt="businessman" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_businessman" class="nb_worker">1 cadre(s)</div>
							<div id="businessman_cost" class="worker_cost">Prix : 0$</div>
							<div id="businessman_benefit" class="worker_benefit">Bénéfice : 5 $/sec</div>
						</div>
					</div>
					<div id="sellBusinessman" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Businessman" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Businessman" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllBusinessman" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Supermarket')"; onMouseOver="appearSell('Supermarket');">
					<div class="row worker_div" id="supermarket_button">
						<img class="col-lg-4 worker_img" src="img/Supermarket.png" alt="supermarket" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_supermarket" class="nb_worker">1 supermarché(s)</div>
							<div id="supermarket_cost" class="worker_cost">Prix : 0$</div>
							<div id="supermarket_benefit" class="worker_benefit">Bénéfice : 15 $/sec</div>
						</div>
					</div>
					<div id="sellSupermarket" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Supermarket" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Supermarket" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllSupermarket" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Factory')"; onMouseOver="appearSell('Factory');">
					<div class="row worker_div" id="factory_button">
						<img class="col-lg-4 worker_img" src="img/Factory.png" alt="factory" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_factory" class="nb_worker">1 usine(s)</div>
							<div id="factory_cost" class="worker_cost">Prix : 0$</div>
							<div id="factory_benefit" class="worker_benefit">Bénéfice : 40 $/sec</div>
						</div>
					</div>
					<div id="sellFactory" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Factory" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Factory" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllFactory" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Bank')"; onMouseOver="appearSell('Bank');">
					<div class="row worker_div" id="bank_button">
						<img class="col-lg-4 worker_img" src="img/Bank.png" alt="bank" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_bank" class="nb_worker">1 banque(s)</div>
							<div id="bank_cost" class="worker_cost">Prix : 0$</div>
							<div id="bank_benefit" class="worker_benefit">Bénéfice : 300 $/sec</div>
						</div>
					</div>
					<div id="sellBank" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Bank" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Bank" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllBank" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Mine')"; onMouseOver="appearSell('Mine');">
					<div class="row worker_div" id="mine_button">
						<img class="col-lg-4 worker_img" src="img/Mine.png" alt="mine" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_mine" class="nb_worker">1 mine(s)</div>
							<div id="mine_cost" class="worker_cost">Prix : 0$</div>
							<div id="mine_benefit" class="worker_benefit">BénéficeBénéfice : 1 000 $/sec</div>
						</div>
					</div>
					<div id="sellMine" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Mine" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Mine" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllMine" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('President')"; onMouseOver="appearSell('President');">
					<div class="row worker_div" id="president_button">
						<img class="col-lg-4 worker_img" src="img/President.png" alt="president" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_president" class="nb_worker">1 président(s)</div>
							<div id="president_cost" class="worker_cost">Prix : 0$</div>
							<div id="president_benefit" class="worker_benefit">Bénéfice : 5 000 $/sec</div>
						</div>
					</div>
					<div id="sellPresident" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1President" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10President" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllPresident" class="sellLink">Tout</span></span>
					</div>
				</div>

				<div onMouseOut="disappearSell('Antimatter')"; onMouseOver="appearSell('Antimatter');">
					<div class="row worker_div" id="antimatter_button">
						<img class="col-lg-4 worker_img" src="img/Antimater.png" alt="antimater" />
						<div class="text col-lg-offset-1 col-lg-7">
							<div id="nb_antimatter" class="nb_worker">1 nuage(s) d'antimatière</div>
							<div id="antimatter_cost" class="worker_cost">Prix : 0$</div>
							<div id="antimatter_benefit" class="worker_benefit">Bénéfice : 50 000 $/sec</div>
						</div>
					</div>
					<div id="sellAntimatter" style="display:none;" class="sell">
						<span class="col-lg-3">Vendre</span>
						<span class="col-lg-3"><span id="sell1Antimatter" class="sellLink">1</span></span>
						<span class="col-lg-3"><span id="sell10Antimatter" class="sellLink">10</span></span>
						<span class="col-lg-3"><span id="sellAllAntimatter" class="sellLink">Tout</span></span>
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
<script src="js/storage.js"> </script>
<?php include("footer.php"); ?>
</body>
</html>