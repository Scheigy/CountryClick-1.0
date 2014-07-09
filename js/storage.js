// JavaScript Document



function	createObject()
{
	game = new Object();
	game.money = 0;
	game.prod_money = 0;
	game.total_money = 0;
	game.worker = 0;
	game.businessman = 0;
	game.supermarket = 0;
	game.factory = 0;
	game.bank = 0;
	game.mine = 0;
	game.president = 0;
	game.antimatter = 0;
	game.upgrade = "000000000000000000000000";
	game.timecounter = 0;
	game.clickcounter = 0;
}

function 	calc_mult(bat)
{
	var result = 1;
	if (game.upgrade[bat * 3] == 2)
		result = 2;
	if (game.upgrade[(bat * 3) + 1] == 2)
		result = 8;
	if (game.upgrade[(bat * 3) + 2] == 2)
		result = 64;
	return (result);
}

function	createMultiplicator()
{
	mult = new Object();
	mult.worker = calc_mult(0);
	mult.businessman = calc_mult(1);
	mult.supermarket = calc_mult(2);
	mult.factory = calc_mult(3);
	mult.bank = calc_mult(4);
	mult.mine = calc_mult(5);
	mult.president = calc_mult(6);
	mult.antimatter = calc_mult(7);
}

var tab_image = new Array(70);
for (var i=0; i< tab_image.length;i++)
	tab_image[i]= new Image();
tab_image[0].src='img/upgrade/locked.png';
tab_image[1].src='img/upgrade/worker1.png';
tab_image[2].src='img/upgrade/worker2.png';
tab_image[3].src='img/upgrade/worker3.png';
tab_image[4].src='img/upgrade/worker4.png';
tab_image[5].src='img/upgrade/businessman1.png';
tab_image[6].src='img/upgrade/businessman2.png';
tab_image[7].src='img/upgrade/businessman3.png';
tab_image[8].src='img/upgrade/businessman4.png';
tab_image[9].src='img/upgrade/supermarket1.png';
tab_image[10].src='img/upgrade/supermarket2.png';
tab_image[11].src='img/upgrade/supermarket3.png';
tab_image[12].src='img/upgrade/supermarket4.png';
tab_image[13].src='img/upgrade/factory1.png';
tab_image[14].src='img/upgrade/factory2.png';
tab_image[15].src='img/upgrade/factory3.png';
tab_image[16].src='img/upgrade/factory4.png';
tab_image[17].src='img/upgrade/bank1.png';
tab_image[18].src='img/upgrade/bank2.png';
tab_image[19].src='img/upgrade/bank3.png';
tab_image[20].src='img/upgrade/bank4.png';
tab_image[21].src='img/upgrade/mine1.png';
tab_image[22].src='img/upgrade/mine2.png';
tab_image[23].src='img/upgrade/mine3.png';
tab_image[24].src='img/upgrade/mine4.png';
tab_image[25].src='img/upgrade/president1.png';
tab_image[26].src='img/upgrade/president2.png';
tab_image[27].src='img/upgrade/president3.png';
tab_image[28].src='img/upgrade/president4.png';
tab_image[29].src='img/upgrade/antimatter1.png';
tab_image[30].src='img/upgrade/antimatter2.png';
tab_image[31].src='img/upgrade/antimatter3.png';
tab_image[32].src='img/upgrade/antimatter4.png';
/*tab_image[33].src='img/upgrade/totalbuild1.png';
tab_image[34].src='img/upgrade/totalbuild2.png';
tab_image[35].src='img/upgrade/totalbuild3.png';
tab_image[36].src='img/upgrade/totalbuild4.png';
tab_image[37].src='img/upgrade/totalbuild5.png';
tab_image[38].src='img/upgrade/totalmoney1.png';
tab_image[39].src='img/upgrade/totalmoney2.png';
tab_image[40].src='img/upgrade/totalmoney3.png';
tab_image[41].src='img/upgrade/totalmoney4.png';
tab_image[42].src='img/upgrade/totalmoney5.png';
tab_image[43].src='img/upgrade/totalmoney6.png';
tab_image[44].src='img/upgrade/totalmoney7.png';
tab_image[45].src='img/upgrade/totalmoney8.png';
tab_image[46].src='img/upgrade/prod1.png';
tab_image[47].src='img/upgrade/prod2.png';
tab_image[48].src='img/upgrade/prod3.png';
tab_image[49].src='img/upgrade/prod4.png';
tab_image[50].src='img/upgrade/prod5.png';
tab_image[51].src='img/upgrade/prod6.png';
tab_image[52].src='img/upgrade/prod7.png';
tab_image[53].src='img/upgrade/prod8.png';
tab_image[54].src='img/upgrade/time1.png';
tab_image[55].src='img/upgrade/time2.png';
tab_image[56].src='img/upgrade/time3.png';
tab_image[57].src='img/upgrade/time4.png';
tab_image[58].src='img/upgrade/time5.png';
tab_image[59].src='img/upgrade/click1.png';
tab_image[60].src='img/upgrade/click2.png';
tab_image[61].src='img/upgrade/click3.png';
tab_image[62].src='img/upgrade/click4.png';
tab_image[63].src='img/upgrade/click5.png';
tab_image[64].src='img/upgrade/upgrade1.png';
tab_image[65].src='img/upgrade/upgrade2.png';
tab_image[66].src='img/upgrade/upgrade3.png';
tab_image[67].src='img/upgrade/upgrade4.png';
tab_image[68].src='img/upgrade/upgrade5.png';
tab_image[69].src='img/upgrade/upgrade6.png';*/


function	setObject()
{	
	game = new Object();
	game.money = parseInt(window.localStorage.getItem('money'));
	game.prod_money = parseInt(window.localStorage.getItem('prod_money'));
	game.total_money = parseInt(window.localStorage.getItem('total_money'));
	game.worker = parseInt(window.localStorage.getItem('worker'));
	game.businessman = parseInt(window.localStorage.getItem('businessman'));
	game.supermarket = parseInt(window.localStorage.getItem('supermarket'));
	game.factory = parseInt(window.localStorage.getItem('factory'));
	game.bank = parseInt(window.localStorage.getItem('bank'));
	game.mine = parseInt(window.localStorage.getItem('mine'));
	game.president = parseInt(window.localStorage.getItem('president'));
	game.antimatter = parseInt(window.localStorage.getItem('antimatter'));
	game.upgrade = window.localStorage.getItem('upgrade');
	game.timecounter = parseInt(window.localStorage.getItem('timecounter'));
	game.clickcounter = parseInt(window.localStorage.getItem('clickcounter'));
	
}

function	changeNumber(nb)
{
	var		new_nb;
	if (nb > 999999999999)
	{
		if ((nb % 1000000000000) == 0)
			new_nb = (nb / 1000000000000).toFixed(0) + ' billion(s)';
		else
			new_nb = (nb / 1000000000000).toFixed(3) + ' billion(s)';
	}
	else if (nb > 999999999)
	{
		if ((nb % 1000000000) == 0)
			new_nb = (nb / 1000000000).toFixed(0) + ' milliard(s)';
		else
			new_nb = (nb / 1000000000).toFixed(3) + ' milliard(s)';
	}
	else if (nb > 999999)
	{
		if ((nb % 1000000) == 0)
			new_nb = (nb / 1000000).toFixed(0) + ' million(s)';
		else
			new_nb = (nb / 1000000).toFixed(3) + ' million(s)';
	}
	else if (nb > 999)
	{
		new_nb = parseInt((nb / 1000)) + ' ';
		if ((nb % 1000) < 10)
			new_nb += '00';
		else if ((nb % 1000) < 100)
			new_nb += '0';
		new_nb += parseInt((nb % 1000));
	}
	else
		return (parseInt(nb));
	return (new_nb);
}

function	prodColor()
{
	var	color;

	if ((timer_bonusBuilding > 0) || (timer_bonusRandom > 0))
		color = 'green';
	else if (timer_strike > 0)
		color = 'red';
	else
		color = 'white';
	return (color);
}

function	prodMoney()
{
	var	texte;

	if ((timer_bonusBuilding > 0) || (timer_bonusRandom > 0))
	{
		texte = (changeNumber(game.prod_money) + ' $ par seconde').big();
		if (document.getElementById('msg').style.display == 'none')
		{
			document.getElementById('msg').style.display = 'block';
			document.getElementById('msg').innerHTML = '<marquee>Félicitation vous avez un bonus x 20 </marquee>';
		}
	}
	else
	{
		texte = (changeNumber(game.prod_money) + ' $ par seconde');
		document.getElementById('msg').style.display = 'none';
	}
	return (texte);
}

function	dollarCounter()
{
	game.money = game.money + (game.prod_money / parseInt(time));
	game.total_money = game.total_money + (game.prod_money / parseInt(time));
	myDollar = document.getElementById('dollar_counter');
	myDollar.innerHTML = changeNumber(game.money) + ' $';
	calc_prod();
	myDollarProd = document.getElementById('dollar_prod');
	myDollarProd.style.color = prodColor();
	myDollarProd.innerHTML = prodMoney();
	myDollarTotal = document.getElementById('dollar_total');
	myDollarTotal.innerHTML = 'TOTAL : ' + changeNumber(game.total_money) + ' $';
}

function	Start()
{
		setObject();
		createMultiplicator();
		sendData(game);
}

function	clickValue()
{
	var i = 0;
	var value = 1;

	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			value *= 2;
		i += 1;
	}
	return (value);
}

function	addDollar()
{
	game.clickcounter = game.clickcounter + 1;
	game.money = game.money + clickValue();
	game.total_money = game.total_money + clickValue();
	myDollar.innerHTML = changeNumber(game.money) + ' $';
	myDollarTotal.innerHTML = 'TOTAL : ' + changeNumber(game.total_money) + ' $';
}

function    lowerMalus(malus)
{
	if (malus == 0)
		return (malus + 0.5);
	return (1);
}

function	calc_prod()
{
	game.prod_money = game.worker * 1 * mult.worker * onStrike();
	game.prod_money += game.businessman * 5 * mult.businessman;
	game.prod_money += game.supermarket * 15 * mult.supermarket;
	game.prod_money += game.factory * 40 * mult.factory * lowerMalus(onStrike());
	game.prod_money += game.bank * 300 * mult.bank;
	game.prod_money += game.mine * 1000 * mult.mine;
	game.prod_money += game.president * 5000 * mult.president;
	game.prod_money += game.antimatter * 50000 * mult.antimatter;
	game.prod_money = game.prod_money * bonusCalculator();
}

function	calc_price(nb, price)
{
	return(parseInt(price * Math.pow(1.15, nb)));
}

function	addWorker()
{
	if ((game.money - calc_price(game.worker, 100)) >= 0)
	{ 
		game.money = game.money - calc_price(game.worker, 100);
		game.worker = game.worker + 1;
		myWorker.innerHTML = game.worker + ' ouvrier(s)';
		myWorkerPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.worker, 100)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addBusinessman()
{
	if ((game.money - calc_price(game.businessman, 500)) >= 0)
	{ 
		game.money = game.money - calc_price(game.businessman, 500);
		game.businessman = game.businessman + 1;
		myBusinessman.innerHTML = game.businessman + ' cadre(s)';
		myBusinessmanPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.businessman, 500)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addSupermarket()
{
	if ((game.money - calc_price(game.supermarket, 3000)) >= 0)
	{ 
		game.money = game.money - calc_price(game.supermarket, 3000);
		game.supermarket = game.supermarket + 1;
		mySupermarket.innerHTML = game.supermarket + ' supermarché(s)';
		mySupermarketPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.supermarket, 3000)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addFactory()
{
	if ((game.money - calc_price(game.factory, 10000)) >= 0)
	{ 
		game.money = game.money - calc_price(game.factory, 10000);
		game.factory = game.factory + 1;
		myFactory.innerHTML = game.factory + ' usine(s)';
		myFactoryPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.factory, 10000)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addBank()
{
	if ((game.money - calc_price(game.bank, 100000)) >= 0)
	{ 
		game.money = game.money - calc_price(game.bank, 100000);
		game.bank = game.bank + 1;
		myBank.innerHTML = game.bank + ' banque(s)';
		myBankPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.bank, 100000)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addMine()
{
	if ((game.money - calc_price(game.mine, 1000000)) >= 0)
	{ 
		game.money = game.money - calc_price(game.mine, 1000000);
		game.mine = game.mine + 1;
		myMine.innerHTML = game.mine + ' mine(s)';
		myMinePrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.mine, 1000000)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addPresident()
{
	if ((game.money - calc_price(game.president, 20000000)) >= 0)
	{ 
		game.money = game.money - calc_price(game.president, 20000000);
		game.president = game.president + 1;
		myPresident.innerHTML = game.president + ' président(s)';
		myPresidentPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.president, 20000000)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

function	addAntimatter()
{
	if ((game.money - calc_price(game.antimatter, 1128256512)) >= 0)
	{ 
		game.money = game.money - calc_price(game.antimatter, 1128256512);
		game.antimatter = game.antimatter + 1;
		myAntimatter.innerHTML = game.antimatter + ' nuage(s) d\'antimatière';
		myAntimatterPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.antimatter, 1128256512)) + ' $';
		my_aff_total_buildings();
		calc_prod();
	}
}

////////////////////////////////////////Vente///////////////////////////////////////////////////////////////


function	calc_sell_price(nb, price)
{
	return(parseInt((price * Math.pow(1.15, nb)) / 2));
}

function	sellWorker(nb)
{
	while (nb > 0)
	{
		if (game.worker > 0)
		{ 
			game.money = game.money + calc_sell_price(game.worker, 100);
			game.worker = game.worker - 1;
			myWorker.innerHTML = game.worker + ' ouvrier(s)';
			myWorkerPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.worker, 100)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellBusinessman(nb)
{
	while (nb > 0)
	{
		if (game.businessman > 0)
		{ 
			game.money = game.money + calc_sell_price(game.businessman, 500);
			game.businessman = game.businessman - 1;
			myBusinessman.innerHTML = game.businessman + ' cadre(s)';
			myBusinessmanPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.businessman, 500)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellSupermarket(nb)
{
	while (nb > 0)
	{
		if (game.supermarket > 0)
		{ 
			game.money = game.money + calc_sell_price(game.supermarket, 3000);
			game.supermarket = game.supermarket - 1;
			mySupermarket.innerHTML = game.supermarket + ' supermarché(s)';
			mySupermarketPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.supermarket, 3000)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellFactory(nb)
{
	while (nb > 0)
	{
		if (game.factory > 0)
		{ 
			game.money = game.money + calc_sell_price(game.factory, 10000);
			game.factory = game.factory - 1;
			myFactory.innerHTML = game.factory + ' usine(s)';
			myFactoryPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.factory, 10000)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellBank(nb)
{
	while (nb > 0)
	{
		if (game.bank > 0)
		{ 
			game.money = game.money + calc_sell_price(game.bank, 100000);
			game.bank = game.bank - 1;
			myBank.innerHTML = game.bank + ' banque(s)';
			myBankPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.bank, 100000)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellMine(nb)
{
	while (nb > 0)
	{
		if (game.mine > 0)
		{ 
			game.money = game.money + calc_sell_price(game.mine, 1000000);
			game.mine = game.mine - 1;
			myMine.innerHTML = game.mine + ' mine(s)';
			myMinePrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.mine, 1000000)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellPresident(nb)
{
	while (nb > 0)
	{
		if (game.president > 0)
		{ 
			game.money = game.money + calc_sell_price(game.president, 20000000);
			game.president = game.president - 1;
			myPresident.innerHTML = game.president + ' président(s)';
			myPresidentPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.president, 20000000)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

function	sellAntimatter(nb)
{
	while (nb > 0)
	{
		if (game.antimatter > 0)
		{ 
			game.money = game.money + calc_sell_price(game.antimatter, 1128256512);
			game.antimatter = game.antimatter - 1;
			myAntimatter.innerHTML = game.antimatter + ' nuage(s) d\'antimatière';
			myAntimatterPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.antimatter, 1128256512)) + ' $';
			calc_prod();
			my_aff_total_buildings();
		}
		nb -= 1;
	}
}

/*==================================================================================================================*/

function	my_backgrounds()
{
	if (game.money < calc_price(game.worker, 100))
		elemWorker.style.opacity = 0.7;
	else
		elemWorker.style.opacity = 1;
	if (game.money < calc_price(game.businessman, 500))
		elemBusinessman.style.opacity = 0.7;
	else
		elemBusinessman.style.opacity = 1;
	if (game.money < calc_price(game.supermarket, 3000))
		elemSupermarket.style.opacity = 0.7;
	else
		elemSupermarket.style.opacity = 1;
	if (game.money < calc_price(game.factory, 10000))
		elemFactory.style.opacity = 0.7;
	else
		elemFactory.style.opacity = 1;
	if (game.money < calc_price(game.bank, 100000))
		elemBank.style.opacity = 0.7;
	else
		elemBank.style.opacity = 1;
	if (game.money < calc_price(game.mine, 1000000))
		elemMine.style.opacity = 0.7;
	else
		elemMine.style.opacity = 1;
	if (game.money < calc_price(game.president, 20000000))
		elemPresident.style.opacity = 0.7;
	else
		elemPresident.style.opacity = 1;
	if (game.money < calc_price(game.antimatter, 1128256512))
		elemAntimatter.style.opacity = 0.7;
	else
		elemAntimatter.style.opacity = 1;
}

function    my_aff_total_buildings()
{
	document.getElementById('total_buildings').innerHTML = (game.worker + game.businessman + game.supermarket + game.factory + game.bank + game.mine + game.president + game.antimatter);
}

function	my_aff_buildings()
{
	myWorker = document.getElementById('nb_worker');
	myWorker.innerHTML = game.worker + ' ouvrier(s)';
	myWorkerPrice = document.getElementById('worker_cost');
	myWorkerPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.worker, 100)) + ' $';
	myWorkerBenefit = document.getElementById('worker_benefit');
	myWorkerBenefit.innerHTML = 'Bénéfice : ' + (changeNumber(mult.worker) * onStrike()) + ' $/sec';
	if (game.total_money < 500)
		document.getElementById('businessman_button').style.display = 'none';
	else
	{
		document.getElementById('businessman_button').style.display = 'block';
		myBusinessman = document.getElementById('nb_businessman');
		myBusinessman.innerHTML = game.businessman + ' cadre(s)';
		myBusinessmanPrice = document.getElementById('businessman_cost');
		myBusinessmanPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.businessman, 500)) + ' $';
		myBusinessmanBenefit = document.getElementById('businessman_benefit');
		myBusinessmanBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5 * mult.businessman) + ' $/sec';
	}

	if (game.total_money < 3000)
		document.getElementById('supermarket_button').style.display = 'none';
	else
	{
		document.getElementById('supermarket_button').style.display = 'block';
		mySupermarket = document.getElementById('nb_supermarket');
		mySupermarket.innerHTML = game.supermarket + ' supermarché(s)';
		mySupermarketPrice = document.getElementById('supermarket_cost');
		mySupermarketPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.supermarket, 3000)) + ' $';
		mySupermarketBenefit = document.getElementById('supermarket_benefit');
		mySupermarketBenefit.innerHTML = 'Bénéfice : ' + changeNumber(15 * mult.supermarket) + ' $/sec';
	}

	if (game.total_money < 10000)
		document.getElementById('factory_button').style.display = 'none';
	else
	{
		document.getElementById('factory_button').style.display = 'block';
		myFactory = document.getElementById('nb_factory');
		myFactory.innerHTML = game.factory + ' usine(s)';
		myFactoryPrice = document.getElementById('factory_cost');
		myFactoryPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.factory, 10000)) + ' $';
		myFactoryBenefit = document.getElementById('factory_benefit');
		myFactoryBenefit.innerHTML = 'Bénéfice : ' + changeNumber(40 * mult.factory * lowerMalus(onStrike())) + ' $/sec';
	}

	if (game.total_money < 100000)
		document.getElementById('bank_button').style.display = 'none';
	else
	{
		document.getElementById('bank_button').style.display = 'block';
		myBank = document.getElementById('nb_bank');
		myBank.innerHTML = game.bank + ' banque(s)';
		myBankPrice = document.getElementById('bank_cost');
		myBankPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.bank, 100000)) + ' $';
		myBankBenefit = document.getElementById('bank_benefit');
		myBankBenefit.innerHTML = 'Bénéfice : ' + changeNumber(300 * mult.bank) + ' $/sec';
	}

	if (game.total_money < 1000000)
		document.getElementById('mine_button').style.display = 'none';
	else
	{
		document.getElementById('mine_button').style.display = 'block';
		myMine = document.getElementById('nb_mine');
		myMine.innerHTML = game.mine + ' mine(s)';
		myMinePrice = document.getElementById('mine_cost');
		myMinePrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.mine, 1000000)) + ' $';
		myMineBenefit = document.getElementById('mine_benefit');
		myMineBenefit.innerHTML = 'Bénéfice : ' + changeNumber(1000 * mult.mine) + ' $/sec';
	}

	if (game.total_money < 20000000)
		document.getElementById('president_button').style.display = 'none';
	else
	{
		document.getElementById('president_button').style.display = 'block';
		myPresident = document.getElementById('nb_president');
		myPresident.innerHTML = game.president + ' président(s)';
		myPresidentPrice = document.getElementById('president_cost');
		myPresidentPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.president, 20000000)) + ' $';
		myPresidentBenefit = document.getElementById('president_benefit');
		myPresidentBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5000 * mult.president) + ' $/sec';
	}

	if (game.total_money < 1128256512)
		document.getElementById('antimatter_button').style.display = 'none';
	else
	{
		document.getElementById('antimatter_button').style.display = 'block';
		myAntimatter = document.getElementById('nb_antimatter');
		myAntimatter.innerHTML = game.antimatter + ' nuage(s) d\'antimatière';
		myAntimatterPrice = document.getElementById('antimatter_cost');
		myAntimatterPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.antimatter, 1128256512)) + ' $';
		myAntimatterBenefit = document.getElementById('antimatter_benefit');
		myAntimatterBenefit.innerHTML = 'Bénéfice : ' + changeNumber(50000 * mult.antimatter) + ' $/sec';
	}
}

function setCharAt(str,index,chr) 
{
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function	addUpgrade_worker1()
{
	if (((game.money - 1000) >= 0) && game.upgrade[0] == '1')
	{
		game.money = game.money - 1000;
		game.upgrade = setCharAt(game.upgrade, 0, '2');
		mult.worker = 2;
		upWorker = document.getElementById('one');
		upWorker.innerHTML = 'x 2';
	}
	calc_prod();
	myWorkerBenefit.innerHTML = 'Bénéfice : ' + changeNumber(mult.worker) + ' $/sec';
}

function	addUpgrade_worker2()
{	
	if (((game.money - 10000) >=0) && game.upgrade[1] == '1' && game.upgrade[0] == '2')
	{
		game.money = game.money - 10000;
		game.upgrade = setCharAt(game.upgrade, 1, '2');
		mult.worker = 8;
		upWorker2 = document.getElementById('two');
		upWorker2.innerHTML = 'x 4';
	}
	calc_prod();
	myWorkerBenefit.innerHTML = 'Bénéfice : ' + changeNumber(mult.worker) + ' $/sec';
}

function	addUpgrade_worker3()
{
	if (((game.money - 100000) >=0) && game.upgrade[2] == '1' && game.upgrade[1] == '2')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 2, '2');
		mult.worker = 64;
		upWorker = document.getElementById('three');
		upWorker.innerHTML = 'x 8';
	}
	calc_prod();
	myWorkerBenefit.innerHTML = 'Bénéfice : ' + changeNumber(mult.worker) + ' $/sec';
}

function	addUpgrade_businessman1()
{
	if (((game.money - 10000) >= 0) && game.upgrade[3] == '1')
	{
		game.money = game.money - 10000;
		game.upgrade = setCharAt(game.upgrade, 3, '2');
		mult.businessman = 2;
		upBusinessman = document.getElementById('four');
		upBusinessman.innerHTML = 'x 2';
	}
	calc_prod();
	myBusinessmanBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5 * mult.businessman) + ' $/sec';
}

function	addUpgrade_businessman2()
{	
	if (((game.money - 100000) >=0) && game.upgrade[4] == '1' && game.upgrade[3] == '2')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 4, '2');
		mult.businessman = 8;
		upBusinessman = document.getElementById('five');
		upBusinessman.innerHTML = 'x 4';
	}
	calc_prod();
	myBusinessmanBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5 * mult.businessman) + ' $/sec';
}

function	addUpgrade_businessman3()
{
	if (((game.money - 1000000) >=0) && game.upgrade[5] == '1' && game.upgrade[4] == '2')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 5, '2');
		mult.businessman = 64;
		upBusinessman = document.getElementById('six');
		upBusinessman.innerHTML = 'x 8';
	}
	calc_prod();
	myBusinessmanBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5 * mult.businessman) + ' $/sec';
}

function	addUpgrade_supermarket1()
{
	if (((game.money - 100000) >= 0) && game.upgrade[6] == '1')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 6, '2');
		mult.supermarket = 2;
		upSupermarket = document.getElementById('seven');
		upSupermarket.innerHTML = 'x 2';
	}
	calc_prod();
	mySupermarketBenefit.innerHTML = 'Bénéfice : ' + changeNumber(15 * mult.supermarket) + ' $/sec';
}

function	addUpgrade_supermarket2()
{	
	if (((game.money - 1000000) >=0) && game.upgrade[7] == '1' && game.upgrade[6] == '2')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 7, '2');
		mult.supermarket = 8;
		upSupermarket = document.getElementById('eight');
		upSupermarket.innerHTML = 'x 4';
	}
	calc_prod();
	mySupermarketBenefit.innerHTML = 'Bénéfice : ' + changeNumber(15 * mult.supermarket) + ' $/sec';
}

function	addUpgrade_supermarket3()
{
	if (((game.money - 10000000) >=0) && game.upgrade[8] == '1' && game.upgrade[7] == '2')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 8, '2');
		mult.supermarket = 64;
		upSupermarket = document.getElementById('nine');
		upSupermarket.innerHTML = 'x 8';
	}
	calc_prod();
	mySupermarketBenefit.innerHTML = 'Bénéfice : ' + changeNumber(15 * mult.supermarket) + ' $/sec';
}

function	addUpgrade_factory1()
{
	if (((game.money - 1000000) >= 0) && game.upgrade[9] == '1')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 9, '2');
		mult.factory = 2;
		upFactory = document.getElementById('ten');
		upFactory.innerHTML = 'x 2';
	}
	calc_prod();
	myFactoryBenefit.innerHTML = 'Bénéfice : ' + changeNumber(40 * mult.factory) + ' $/sec';
}

function	addUpgrade_factory2()
{	
	if (((game.money - 10000000) >=0) && game.upgrade[10] == '1' && game.upgrade[9] == '2')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 10, '2');
		mult.factory = 8;
		upFactory = document.getElementById('eleven');
		upFactory.innerHTML = 'x 4';
	}
	calc_prod();
	myFactoryBenefit.innerHTML = 'Bénéfice : ' + changeNumber(40 * mult.factory) + ' $/sec';
}

function	addUpgrade_factory3()
{
	if (((game.money - 100000000) >=0) && game.upgrade[11] == '1' && game.upgrade[10] == '2')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 11, '2');
		mult.factory = 64;
		upFactory = document.getElementById('twelve');
		upFactory.innerHTML = 'x 8';
	}
	calc_prod();
	myFactoryBenefit.innerHTML = 'Bénéfice : ' + changeNumber(40 * mult.factory) + ' $/sec';
}

function	addUpgrade_bank1()
{
	if (((game.money - 10000000) >= 0) && game.upgrade[12] == '1')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 12, '2');
		mult.bank = 2;
		upBank = document.getElementById('thirteen');
		upBank.innerHTML = 'x 2';
	}
	calc_prod();
	myBankBenefit.innerHTML = 'Bénéfice : ' + changeNumber(300 * mult.bank) + ' $/sec';
}

function	addUpgrade_bank2()
{
	if (((game.money - 100000000) >=0) && game.upgrade[13] == '1' && game.upgrade[12] == '2')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 13, '2');
		mult.bank = 8;
		upBank = document.getElementById('fourteen');
		upBank.innerHTML = 'x 4';
	}
	calc_prod();
	myBankBenefit.innerHTML = 'Bénéfice : ' + changeNumber(300 * mult.bank) + ' $/sec';
}

function	addUpgrade_bank3()
{
	if (((game.money - 1000000000) >=0) && game.upgrade[14] == '1' && game.upgrade[13] == '2')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 14, '2');
		mult.bank = 64;
		upBank = document.getElementById('fifteen');
		upBank.innerHTML = 'x 8';
	}
	calc_prod();
	myBankBenefit.innerHTML = 'Bénéfice : ' + changeNumber(300 * mult.bank) + ' $/sec';
}

function	addUpgrade_mine1()
{
	if (((game.money - 100000000) >= 0) && game.upgrade[15] == '1')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 15, '2');
		mult.mine = 2;
		upMine = document.getElementById('sixteen');
		upMine.innerHTML = 'x 2';
	}
	calc_prod();
	myMineBenefit.innerHTML = 'Bénéfice : ' + changeNumber(1000 * mult.mine) + ' $/sec';
}

function	addUpgrade_mine2()
{
	if (((game.money - 1000000000) >=0) && game.upgrade[16] == '1' && game.upgrade[15] == '2')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 16, '2');
		mult.mine = 8;
		upMine = document.getElementById('seventeen');
		upMine.innerHTML = 'x 4';
	}
	calc_prod();
	myMineBenefit.innerHTML = 'Bénéfice : ' + changeNumber(1000 * mult.mine) + ' $/sec';
}

function	addUpgrade_mine3()
{
	if (((game.money - 10000000000) >=0) && game.upgrade[17] == '1' && game.upgrade[16] == '2')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 17, '2');
		mult.mine = 64;
		upMine = document.getElementById('eighteen');
		upMine.innerHTML = 'x 8';
	}
	calc_prod();
	myMineBenefit.innerHTML = 'Bénéfice : ' + changeNumber(1000 * mult.mine) + ' $/sec';
}

function	addUpgrade_president1()
{
	if (((game.money - 1000000000) >= 0) && game.upgrade[18] == '1')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 18, '2');
		mult.president = 2;
		upPresident = document.getElementById('nineteen');
		upPresident.innerHTML = 'x 2';
	}
	calc_prod();
	myPresidentBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5000 * mult.president) + ' $/sec';
}

function	addUpgrade_president2()
{
	if (((game.money - 10000000000) >=0) && game.upgrade[19] == '1' && game.upgrade[18] == '2')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 19, '2');
		mult.president = 8;
		upPresident = document.getElementById('twenty');
		upPresident.innerHTML = 'x 4';
	}
	calc_prod();
	myPresidentBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5000 * mult.president) + ' $/sec';
}

function	addUpgrade_president3()
{
	if (((game.money - 100000000000) >=0) && game.upgrade[20] == '1' && game.upgrade[19] == '2')
	{
		game.money = game.money - 100000000000;
		game.upgrade = setCharAt(game.upgrade, 20, '2');
		mult.president = 64;
		upPresident = document.getElementById('twenty-one');
		upPresident.innerHTML = 'x 8';
	}
	calc_prod();
	myPresidentBenefit.innerHTML = 'Bénéfice : ' + changeNumber(5000 * mult.president) + ' $/sec';
}

function	addUpgrade_antimatter1()
{
	if (((game.money - 10000000000) >= 0) && game.upgrade[21] == '1')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 21, '2');
		mult.antimatter = 2;
		upAntimatter = document.getElementById('twenty-two');
		upAntimatter.innerHTML = 'x 2';
	}
	calc_prod();
	myAntimatterBenefit.innerHTML = 'Bénéfice : ' + changeNumber(50000 * mult.antimatter) + ' $/sec';
}

function	addUpgrade_antimatter2()
{
	if (((game.money - 100000000000) >=0) && game.upgrade[22] == '1' && game.upgrade[21] == '2')
	{
		game.money = game.money - 100000000000;
		game.upgrade = setCharAt(game.upgrade, 22, '2');
		mult.antimatter = 8;
		upAntimatter = document.getElementById('twenty-three');
		upAntimatter.innerHTML = 'x 4';
	}
	calc_prod();
	myAntimatterBenefit.innerHTML = 'Bénéfice : ' + changeNumber(50000 * mult.antimatter) + ' $/sec';
}

function	addUpgrade_antimatter3()
{
	if (((game.money - 1000000000000) >=0) && game.upgrade[23] == '1' && game.upgrade[22] == '2')
	{
		game.money = game.money - 1000000000000;
		game.upgrade = setCharAt(game.upgrade, 23, '2');
		mult.antimatter = 64;
		upAntimatter = document.getElementById('twenty-four');
		upAntimatter.innerHTML = 'x 8';
	}
	calc_prod();
	myAntimatterBenefit.innerHTML = 'Bénéfice : ' + changeNumber(50000 * mult.antimatter) + ' $/sec';
}

function	unlock_upgrades()
{
	/*upgrades workers*/
	if (game.worker >= 10 && game.upgrade[0] != '2')
		game.upgrade = setCharAt(game.upgrade, 0, '1');
	if (game.worker >= 50 && game.upgrade[1] != '2')
		game.upgrade = setCharAt(game.upgrade, 1, '1');
	if (game.worker >= 100 && game.upgrade[2] != '2')
		game.upgrade = setCharAt(game.upgrade, 2, '1');

	/*upgrades businessman*/
	if (game.businessman >= 10 && game.upgrade[3] != '2')
		game.upgrade = setCharAt(game.upgrade, 3, '1');
	if (game.businessman >= 50 && game.upgrade[4] != '2')
		game.upgrade = setCharAt(game.upgrade, 4, '1');
	if (game.businessman >= 100 && game.upgrade[5] != '2')
		game.upgrade = setCharAt(game.upgrade, 5, '1');

	/*upgrades supermarket*/
	if (game.supermarket >= 10 && game.upgrade[6] != '2')
		game.upgrade = setCharAt(game.upgrade, 6, '1');
	if (game.supermarket >= 50 && game.upgrade[7] != '2')
		game.upgrade = setCharAt(game.upgrade, 7, '1');
	if (game.supermarket >= 100 && game.upgrade[8] != '2')
		game.upgrade = setCharAt(game.upgrade, 8, '1');

	/*upgrades factory*/
	if (game.factory >= 10 && game.upgrade[9] != '2')
		game.upgrade = setCharAt(game.upgrade, 9, '1');
	if (game.factory >= 50 && game.upgrade[10] != '2')
		game.upgrade = setCharAt(game.upgrade, 10, '1');
	if (game.factory >= 100 && game.upgrade[11] != '2')
		game.upgrade = setCharAt(game.upgrade, 11, '1');

	/*upgrades bank*/
	if (game.bank >= 10 && game.upgrade[12] != '2')
		game.upgrade = setCharAt(game.upgrade, 12, '1');
	if (game.bank >= 50 && game.upgrade[13] != '2')
		game.upgrade = setCharAt(game.upgrade, 13, '1');
	if (game.bank >= 100 && game.upgrade[14] != '2')
		game.upgrade = setCharAt(game.upgrade, 14, '1');

	/*upgrades mine*/
	if (game.mine >= 10 && game.upgrade[15] != '2')
		game.upgrade = setCharAt(game.upgrade, 15, '1');
	if (game.mine >= 50 && game.upgrade[16] != '2')
		game.upgrade = setCharAt(game.upgrade, 16, '1');
	if (game.mine >= 100 && game.upgrade[17] != '2')
		game.upgrade = setCharAt(game.upgrade, 17, '1');

	/*upgrades president*/
	if (game.president >= 10 && game.upgrade[18] != '2')
		game.upgrade = setCharAt(game.upgrade, 18, '1');
	if (game.president >= 50 && game.upgrade[19] != '2')
		game.upgrade = setCharAt(game.upgrade, 19, '1');
	if (game.president >= 100 && game.upgrade[20] != '2')
		game.upgrade = setCharAt(game.upgrade, 20, '1');

	/*upgrades antimatter*/
	if (game.antimatter >= 10 && game.upgrade[21] != '2')
		game.upgrade = setCharAt(game.upgrade, 21, '1');
	if (game.antimatter >= 50 && game.upgrade[22] != '2')
		game.upgrade = setCharAt(game.upgrade, 22, '1');
	if (game.antimatter >= 100 && game.upgrade[23] != '2')
		game.upgrade = setCharAt(game.upgrade, 23, '1');
}

function	my_aff_upgrades()
{
	upWorker1 = document.getElementById('one');
	if (mult.worker == 2 || mult.worker == 8 || mult.worker == 64)
		upWorker1.innerHTML = 'x 2';
	else
		upWorker1.innerHTML = '1 K'	
	upWorker2 = document.getElementById('two');
	if (mult.worker == 8 || mult.worker == 64)
		upWorker2.innerHTML = 'x 4';
	else
		upWorker2.innerHTML = '10 K'
	upWorker3 = document.getElementById('three');
	if (mult.worker == 64)
		upWorker3.innerHTML = 'x 8';
	else
		upWorker3.innerHTML = '100 K'
	
	upBusinessman1 = document.getElementById('four');
	if (mult.businessman == 2 || mult.businessman == 8 || mult.businessman == 64)
		upBusinessman1.innerHTML = 'x 2';
	else
		upBusinessman1.innerHTML = '10 K'	
	upBusinessman2 = document.getElementById('five');
	if (mult.businessman == 8 || mult.businessman == 64)
		upBusinessman2.innerHTML = 'x 4';
	else
		upBusinessman2.innerHTML = '100 K'
	upBusinessman3 = document.getElementById('six');
	if (mult.businessman == 64)
		upBusinessman3.innerHTML = 'x 8';
	else
		upBusinessman3.innerHTML = '1 M'
	
	upSupermarket1 = document.getElementById('seven');
	if (mult.supermarket == 2 || mult.supermarket == 8 || mult.supermarket == 64)
		upSupermarket1.innerHTML = 'x 2';
	else
		upSupermarket1.innerHTML = '100 K'	
	upSupermarket2 = document.getElementById('eight');
	if (mult.supermarket == 8 || mult.supermarket == 64)
		upSupermarket2.innerHTML = 'x 4';
	else
		upSupermarket2.innerHTML = '1 M'
	upSupermarket3 = document.getElementById('nine');
	if (mult.supermarket == 64)
		upSupermarket3.innerHTML = 'x 8';
	else
		upSupermarket3.innerHTML = '10 M'
	
	upFactory1 = document.getElementById('ten');
	if (mult.factory == 2 || mult.factory == 8 || mult.factory == 64)
		upFactory1.innerHTML = 'x 2';
	else
		upFactory1.innerHTML = '1 M'	
	upFactory2 = document.getElementById('eleven');
	if (mult.factory == 8 || mult.factory == 64)
		upFactory2.innerHTML = 'x 4';
	else
		upFactory2.innerHTML = '10 M'
	upFactory3 = document.getElementById('twelve');
	if (mult.factory == 64)
		upFactory3.innerHTML = 'x 8';
	else
		upFactory3.innerHTML = '100 M'
	
	upBank1 = document.getElementById('thirteen');
	if (mult.bank == 2 || mult.bank == 8 || mult.bank == 64)
		upBank1.innerHTML = 'x 2';
	else
		upBank1.innerHTML = '10 M'	
	upBank2 = document.getElementById('fourteen');
	if (mult.bank == 8 || mult.bank == 64)
		upBank2.innerHTML = 'x 4';
	else
		upBank2.innerHTML = '100 M'
	upBank3 = document.getElementById('fifteen');
	if (mult.bank == 64)
		upBank3.innerHTML = 'x 8';
	else
		upBank3.innerHTML = '1 Mrd'
	
	upMine1 = document.getElementById('sixteen');
	if (mult.mine == 2 || mult.mine == 8 || mult.mine == 64)
		upMine1.innerHTML = 'x 2';
	else
		upMine1.innerHTML = '100 M'	
	upMine2 = document.getElementById('seventeen');
	if (mult.mine == 8 || mult.mine == 64)
		upMine2.innerHTML = 'x 4';
	else
		upMine2.innerHTML = '1 Mrd'
	upMine3 = document.getElementById('eighteen');
	if (mult.mine == 64)
		upMine3.innerHTML = 'x 8';
	else
		upMine3.innerHTML = '10 Mrd'
	
	upPresident1 = document.getElementById('nineteen');
	if (mult.president == 2 || mult.president == 8 || mult.president == 64)
		upPresident1.innerHTML = 'x 2';
	else
		upPresident1.innerHTML = '1 Mrd'	
	upPresident2 = document.getElementById('twenty');
	if (mult.president == 8 || mult.president == 64)
		upPresident2.innerHTML = 'x 4';
	else
		upPresident2.innerHTML = '10 Mrd'
	upPresident3 = document.getElementById('twenty-one');
	if (mult.president == 64)
		upPresident3.innerHTML = 'x 8';
	else
		upPresident3.innerHTML = '100 Mrd'
	
	upAntimatter1 = document.getElementById('twenty-two');
	if (mult.antimatter == 2 || mult.antimatter == 8 || mult.antimatter == 64)
		upAntimatter1.innerHTML = 'x 2';
	else
		upAntimatter1.innerHTML = '10 Mrd'	
	upAntimatter2 = document.getElementById('twenty-three');
	if (mult.antimatter == 8 || mult.antimatter == 64)
		upAntimatter2.innerHTML = 'x 4';
	else
		upAntimatter2.innerHTML = '100 Mrd'
	upAntimatter3 = document.getElementById('twenty-four');
	if (mult.antimatter == 64)
		upAntimatter3.innerHTML = 'x 8';
	else
		upAntimatter3.innerHTML = '1 B';
}

/*function	AC()
{
	if (game.money > game.total_money)
	{
		window.localStorage.clear();
		createObject();
		createMultiplicator();
		createStorage();
		my_aff_buildings();
		my_aff_upgrades();
		alert('Tricheur');
	}
}*/

// Evenemets Fixes
function	bonusBuilding()
{
	timer_bonusBuilding -= (1 / time);
	if (timer_bonusBuilding < 0)
		timer_bonusBuilding = -1;
	return (20);
}

function	bonusRandom()
{
	timer_bonusRandom -= (1 / time);
	return (20);
}

function	bonusCalculator()
{
	var	nb_building;
	var random;
	var multiplicator;

	multiplicator = 1;
	nb_building = game.worker + game.businessman + game.supermarket + game.factory + game.bank + game.mine + game.president + game.antimatter;
	random = Math.floor((Math.random() * (3600 * time)) + 1);
	
	if (random == 1)
		timer_bonusRandom = 20;
	if (timer_bonusRandom > 0)
		multiplicator *= bonusRandom();

	if ((nb_building % 100) == 0 && timer_bonusBuilding == 0)
		timer_bonusBuilding = 20;
	if (timer_bonusBuilding > 0)
		multiplicator *= bonusBuilding();
	if ((nb_building % 100) != 0 && timer_bonusBuilding == -1)
		timer_bonusBuilding = 0;
	return (multiplicator);
}

function	onStrike()
{
	var strike = 0;

	if (game.worker > 50)
		strike = Math.floor((Math.random() * (28800 * time)) + 1);
	if (strike == 1) 
		timer_strike = 600;
	if (timer_strike == 600)
	{
		document.getElementById('pop_up').style.display = 'block';
		document.getElementById('pop_up_p').innerHTML = '<span class="glyphicon glyphicon-info-sign"></span> Attention ! Vos ouvriers en ont marre de travailler! Les usines produisent moins! Ils font GREVE!!!';
	}
	if (timer_strike > 0)
	{
		timer_strike -= (1 / time);
		return (0);
	}
	return (1);
}

time = 10;
timer_bonusBuilding = -1;
timer_bonusRandom = -1;
timer_strike = -1;
interval = setInterval(function(){
	dollarCounter();
	unlock_upgrades();
	my_backgrounds();
}, 100);
window.onload = function() { 
	window.onfocus = function() { 
		time = 10;
		clearInterval(interval);
		interval = setInterval(function(){
			dollarCounter();
			unlock_upgrades();
			my_backgrounds();
		}, 100);
	};
	window.onblur = function() {
		time = 1;
		clearInterval(interval);
		interval = setInterval(function(){
			dollarCounter();
			unlock_upgrades();
			my_backgrounds();
		}, 1000);
	}
};


									// ACHIEVEMENTS //

function	time_counter()
{
	game.timecounter = game.timecounter + 1;
}

function	my_aff_worker_achievements()
{
	first_worker = document.getElementById('1_worker');
	if (game.worker >= 1)
		document.getElementById("1_worker").src = tab_image[1].src;
			
	second_worker = document.getElementById('2_worker');
	if (game.worker >= 30)
		document.getElementById("2_worker").src = tab_image[2].src;
		
	third_worker = document.getElementById('3_worker');
	if (game.worker >= 80)
		document.getElementById("3_worker").src = tab_image[3].src;
		
	fourth_worker = document.getElementById('4_worker');
	if (game.worker >= 150)
		document.getElementById("4_worker").src = tab_image[4].src;
}

function	my_aff_businessman_achievements()
{
	first_businessman = document.getElementById('1_businessman');
	if (game.businessman >= 1)
		document.getElementById("1_businessman").src = tab_image[5].src;
			
	second_businessman = document.getElementById('2_businessman');
	if (game.businessman >= 30)
		document.getElementById("2_businessman").src = tab_image[6].src;
		
	third_businessman = document.getElementById('3_businessman');
	if (game.businessman >= 80)
		document.getElementById("3_businessman").src = tab_image[7].src;
		
	fourth_businessman = document.getElementById('4_businessman');
	if (game.businessman >= 150)
		document.getElementById("4_businessman").src = tab_image[8].src;
}

function	my_aff_supermarket_achievements()
{
	first_supermarket = document.getElementById('1_supermarket');
	if (game.supermarket >= 1)
		document.getElementById("1_supermarket").src = tab_image[9].src;
			
	second_supermarket = document.getElementById('2_supermarket');
	if (game.supermarket >= 30)
		document.getElementById("2_supermarket").src = tab_image[10].src;
		
	third_supermarket = document.getElementById('3_supermarket');
	if (game.supermarket >= 80)
		document.getElementById("3_supermarket").src = tab_image[11].src;
		
	fourth_supermarket = document.getElementById('4_supermarket');
	if (game.supermarket >= 150)
		document.getElementById("4_supermarket").src = tab_image[12].src;
}

function	my_aff_factory_achievements()
{
	first_factory = document.getElementById('1_factory');
	if (game.factory >= 1)
		document.getElementById("1_factory").src = tab_image[13].src;
			
	second_factory = document.getElementById('2_factory');
	if (game.factory >= 30)
		document.getElementById("2_factory").src = tab_image[14].src;
		
	third_factory = document.getElementById('3_factory');
	if (game.factory >= 80)
		document.getElementById("3_factory").src = tab_image[15].src;
		
	fourth_factory = document.getElementById('4_factory');
	if (game.factory >= 150)
		document.getElementById("4_factory").src = tab_image[16].src;
}

function	my_aff_bank_achievements()
{
	first_bank = document.getElementById('1_bank');
	if (game.bank >= 1)
		document.getElementById("1_bank").src = tab_image[17].src;
			
	second_bank = document.getElementById('2_bank');
	if (game.bank >= 30)
		document.getElementById("2_bank").src = tab_image[18].src;
		
	third_bank = document.getElementById('3_bank');
	if (game.bank >= 80)
		document.getElementById("3_bank").src = tab_image[19].src;
		
	fourth_bank = document.getElementById('4_bank');
	if (game.bank >= 150)
		document.getElementById("4_bank").src = tab_image[20].src;	
}

function	my_aff_mine_achievements()
{
	first_mine = document.getElementById('1_mine');
	if (game.mine >= 1)
		document.getElementById("1_mine").src = tab_image[21].src;
			
	second_mine = document.getElementById('2_mine');
	if (game.mine >= 30)
		document.getElementById("2_mine").src = tab_image[22].src;
		
	third_mine = document.getElementById('3_mine');
	if (game.mine >= 80)
		document.getElementById("3_mine").src = tab_image[23].src;
		
	fourth_mine = document.getElementById('4_mine');
	if (game.mine >= 150)
		document.getElementById("4_mine").src = tab_image[24].src;	
}

function	my_aff_president_achievements()
{
	first_president = document.getElementById('1_president');
	if (game.president >= 1)
		document.getElementById("1_president").src = tab_image[25].src;
			
	second_president = document.getElementById('2_president');
	if (game.president >= 30)
		document.getElementById("2_president").src = tab_image[26].src;
		
	third_president = document.getElementById('3_president');
	if (game.president >= 80)
		document.getElementById("3_president").src = tab_image[27].src;
		
	fourth_president = document.getElementById('4_president');
	if (game.president >= 150)
		document.getElementById("4_president").src = tab_image[28].src;	
}

function	my_aff_antimatter_achievements()
{
	first_antimatter = document.getElementById('1_antimatter');
	if (game.antimatter >= 1)
		document.getElementById("1_antimatter").src = tab_image[29].src;
			
	second_antimatter = document.getElementById('2_antimatter');
	if (game.antimatter >= 30)
		document.getElementById("2_antimatter").src = tab_image[30].src;
		
	third_antimatter = document.getElementById('3_antimatter');
	if (game.antimatter >= 80)
		document.getElementById("3_antimatter").src = tab_image[31].src;
		
	fourth_antimatter = document.getElementById('4_antimatter');
	if (game.antimatter >= 150)
		document.getElementById("4_antimatter").src = tab_image[32].src;	
}
/*
function	my_aff_totalbuilding_achievements()
{
	first_totalbuild = document.getElementById('1_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 50)
		document.getElementById("1_totalbuild").src = tab_image[33].src;
			
	second_totalbuild = document.getElementById('2_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 100)
		document.getElementById("2_totalbuild").src = tab_image[34].src;
	
	third_totalbuild = document.getElementById('3_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 500)
		document.getElementById("3_totalbuild").src = tab_image[35].src;
		
	fourth_totalbuild = document.getElementById('4_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 1000)
		document.getElementById("4_totalbuild").src = tab_image[36].src;
		
	fifth_totalbuild = document.getElementById('5_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 2000)
		document.getElementById("5_totalbuild").src = tab_image[37].src;	
}

function	my_aff_totalmoney_achievements()
{			
	first_totalmoney = document.getElementById('1_totalmoney');
	if (game.total_money >= 100)
		document.getElementById("1_totalmoney").src = tab_image[38].src;
		
	second_totalmoney = document.getElementById('2_totalmoney');
	if (game.total_money >= 1000)
		document.getElementById("2_totalmoney").src = tab_image[39].src;
		
	third_totalmoney = document.getElementById('3_totalmoney');
	if (game.total_money >= 100000)
		document.getElementById("3_totalmoney").src = tab_image[40].src;
		
	fourth_totalmoney = document.getElementById('4_totalmoney');
	if (game.total_money >= 1000000)
		document.getElementById("4_totalmoney").src = tab_image[41].src;
		
	fifth_totalmoney = document.getElementById('5_totalmoney');
	if (game.total_money >= 100000000)
		document.getElementById("5_totalmoney").src = tab_image[42].src;
		
	sixth_totalmoney = document.getElementById('6_totalmoney');
	if (game.total_money >= 1000000000)
		document.getElementById("6_totalmoney").src = tab_image[43].src;
		
	seventh_totalmoney = document.getElementById('7_totalmoney');
	if (game.total_money >= 100000000000)
		document.getElementById("7_totalmoney").src = tab_image[44].src;
	
	eighth_totalmoney = document.getElementById('8_totalmoney');
	if (game.total_money >= 100000000000000)

		document.getElementById("8_totalmoney").src = tab_image[45].src;
}

function	my_aff_prod_achievements()
{
	first_prod = document.getElementById('1_prod');
	if (game.prod_money >= 1)
		document.getElementById("1_prod").src = tab_image[46].src;
		
	second_prod = document.getElementById('2_prod');
	if (game.prod_money >= 10)
		document.getElementById("2_prod").src = tab_image[47].src;


	third_prod = document.getElementById('3_prod');
	if (game.prod_money >= 100)
		document.getElementById("3_prod").src = tab_image[48].src;
		
	fourth_prod = document.getElementById('4_prod');
	if (game.prod_money >= 1000)
		document.getElementById("4_prod").src = tab_image[49].src;
		
	fifth_prod = document.getElementById('5_prod');
	if (game.prod_money >= 10000)
		document.getElementById("5_prod").src = tab_image[50].src;
		
	sixth_prod = document.getElementById('6_prod');
	if (game.prod_money >= 100000)
		document.getElementById("6_prod").src = tab_image[51].src;
		
	seventh_prod = document.getElementById('7_prod');
	if (game.prod_money >= 1000000)
		document.getElementById("7_prod").src = tab_image[52].src;
	
	eighth_prod = document.getElementById('8_prod');
	if (game.prod_money >= 10000000)
		document.getElementById("8_prod").src = tab_image[53].src;
}

function	my_aff_timeplayed_achievements()
{
	first_time = document.getElementById('1_time');
	if (game.timecounter >= 6)
		document.getElementById("1_time").src = tab_image[54].src;

	second_time = document.getElementById('2_time');
	if (game.timecounter >= 12)
		document.getElementById("2_time").src = tab_image[55].src;
		
	third_time = document.getElementById('3_time');
	if (game.timecounter >= 288)
		document.getElementById("3_time").src = tab_image[56].src;
		
	fourht_time = document.getElementById('4_time');
	if (game.timecounter >= 864)
		document.getElementById("4_time").src = tab_image[57].src;
		
	fifth_time = document.getElementById('5_time');
	if (game.timecounter >= 2016)
		document.getElementById("5_time").src = tab_image[58].src;
}

function	my_aff_nb_click_achievements()
{
	first_click = document.getElementById('1_click');
	if (game.clickcounter >= 1)
		document.getElementById("1_click").src = tab_image[59].src;
	
	second_click = document.getElementById('2_click');
	if (game.clickcounter >= 100)
		document.getElementById("2_click").src = tab_image[60].src;
		
	third_click = document.getElementById('3_click');
	if (game.clickcounter >= 1000)
		document.getElementById("3_click").src = tab_image[61].src;
		
	fourth_click = document.getElementById('4_click');
	if (game.clickcounter >= 10000)
		document.getElementById("4_click").src = tab_image[62].src;
		
	fifth_click = document.getElementById('5_click');
	if (game.clickcounter >= 50000)
		document.getElementById("5_click").src = tab_image[63].src;
}

function	my_aff_upgrades_bought_achievements()
{
	var i = 0;
	var unlocked = 0;
	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			unlocked = unlocked + 1;
		i = i + 1;	
	}
	first_upgrade = document.getElementById('1_upgrade');
	if (unlocked >= 1)
		document.getElementById("1_upgrade").src = tab_image[64].src;
	
	second_upgrade = document.getElementById('2_upgrade');
	if (unlocked >= 5)
		document.getElementById("2_upgrade").src = tab_image[65].src;
		
	third_upgrade = document.getElementById('3_upgrade');
	if (unlocked >= 10)
		document.getElementById("3_upgrade").src = tab_image[66].src;
		
	fourth_upgrade = document.getElementById('4_upgrade');
	if (unlocked >= 15)
		document.getElementById("4_upgrade").src = tab_image[67].src;
		
	fifth_upgrade = document.getElementById('5_upgrade');
	if (unlocked >= 20)
		document.getElementById("5_upgrade").src = tab_image[68].src;
		
	sixth_upgrade = document.getElementById('6_upgrade');
	if (unlocked >= 24)
		document.getElementById("6_upgrade").src = tab_image[69].src;
}
*/


function	call_achievements_functions()
{
	my_aff_worker_achievements();
	my_aff_businessman_achievements();
	my_aff_supermarket_achievements();
	my_aff_factory_achievements();
	my_aff_bank_achievements();
	my_aff_mine_achievements();
	my_aff_president_achievements();
	my_aff_antimatter_achievements();
	/*my_aff_totalbuilding_achievements();
	my_aff_timeplayed_achievements();
	my_aff_nb_click_achievements();
	my_aff_total_dollar_achievements();
	my_aff_prod_dollar_achievements();
	my_aff_upgrades_bought_achievements();*/
}


function reparation()
{
	if (game.upgrade.length != 24)
	{
		game.upgrade = '000000000000000000000000';
		createMultiplicator();
		alert('Suite à un problème avec les upgrades, ils ont été réinitialisés. Nous sommes désolés pour les inconvénients.');
	}
}

Start();
my_aff_buildings();
my_aff_total_buildings();
my_aff_upgrades();
calc_prod();
reparation();
my_aff_upgrades();
setInterval(function(){time_counter();}, 300000);
setInterval(function(){sendData(game); my_aff_buildings(); call_achievements_functions();}, 30000);
elemDollar = document.getElementById("dollar");
elemDollar.onclick = addDollar;
elemSave = document.getElementById("save_button");
elemSave.onclick = function(){createStorage; alert('Partie sauvegardée');};
elemWorker = document.getElementById("worker_button");
elemWorker.onclick = addWorker;
elemBusinessman = document.getElementById("businessman_button");
elemBusinessman.onclick = addBusinessman;
elemSupermarket = document.getElementById("supermarket_button");
elemSupermarket.onclick = addSupermarket;
elemFactory = document.getElementById("factory_button");
elemFactory.onclick = addFactory;
elemBank = document.getElementById("bank_button");
elemBank.onclick = addBank;
elemMine = document.getElementById("mine_button");
elemMine.onclick = addMine;
elemPresident = document.getElementById("president_button");
elemPresident.onclick = addPresident;
elemAntimatter = document.getElementById("antimatter_button");
elemAntimatter.onclick = addAntimatter;

elemPopup = document.getElementById('pop_up_button');
elemPopup.onclick = function() {document.getElementById('pop_up').style.display = 'none';};

document.getElementById("sell1Worker").onclick = function(){sellWorker(1);};
document.getElementById("sell10Worker").onclick = function(){sellWorker(10);};
document.getElementById("sellAllWorker").onclick = function(){sellWorker(game.worker);};

document.getElementById("sell1Businessman").onclick = function(){sellBusinessman(1);};
document.getElementById("sell10Businessman").onclick = function(){sellBusinessman(10);};
document.getElementById("sellAllBusinessman").onclick = function(){sellBusinessman(game.businessman);};

document.getElementById("sell1Supermarket").onclick = function(){sellSupermarket(1);};
document.getElementById("sell10Supermarket").onclick = function(){sellSupermarket(10);};
document.getElementById("sellAllSupermarket").onclick = function(){sellSupermarket(game.supermarket);};

document.getElementById("sell1Factory").onclick = function(){sellFactory(1);};
document.getElementById("sell10Factory").onclick = function(){sellFactory(10);};
document.getElementById("sellAllFactory").onclick = function(){sellFactory(game.factory);};

document.getElementById("sell1Bank").onclick = function(){sellBank(1);};
document.getElementById("sell10Bank").onclick = function(){sellBank(10);};
document.getElementById("sellAllBank").onclick = function(){sellBank(game.bank);};

document.getElementById("sell1Mine").onclick = function(){sellMine(1);};
document.getElementById("sell10Mine").onclick = function(){sellMine(10);};
document.getElementById("sellAllMine").onclick = function(){sellMine(game.mine);};

document.getElementById("sell1President").onclick = function(){sellPresident(1);};
document.getElementById("sell10President").onclick = function(){sellPresident(10);};
document.getElementById("sellAllPresident").onclick = function(){sellPresident(game.president);};

document.getElementById("sell1Antimatter").onclick = function(){sellAntimatter(1);};
document.getElementById("sell10Antimatter").onclick = function(){sellAntimatter(10);};
document.getElementById("sellAllAntimatter").onclick = function(){sellAntimatter(game.antimatter);};
//elemSellWorker.onclick = sellWorker;
/*elemSellBusinessman = document.getElementById("crossBusinessman");
elemSellBusinessman.onclick = sellBusinessman;
elemSellSupermarket = document.getElementById("crossSupermarket");
elemSellSupermarket.onclick = sellSupermarket;
elemSellFactory = document.getElementById("crossFactory");
elemSellFactory.onclick = sellFactory;
elemSellBank = document.getElementById("crossBank");
elemSellBank.onclick = sellBank;
elemSellMine = document.getElementById("crossMine");
elemSellMine.onclick = sellMine;
elemSellPresident = document.getElementById("crossPresident");
elemSellPresident.onclick = sellPresident;
elemSellAntimatter = document.getElementById("crossAntimatter");
elemSellAntimatter.onclick = sellAntimatter;
*/

my_backgrounds();

//upgrades workers
elemUpgrade_worker1 = document.getElementById("one");
elemUpgrade_worker1.onclick = addUpgrade_worker1;
elemUpgrade_worker2 = document.getElementById("two");
elemUpgrade_worker2.onclick = addUpgrade_worker2;
elemUpgrade_worker3 = document.getElementById("three");
elemUpgrade_worker3.onclick = addUpgrade_worker3;

//upgrades businessman
elemUpgrade_businessman1 = document.getElementById("four");
elemUpgrade_businessman1.onclick = addUpgrade_businessman1;
elemUpgrade_businessman2 = document.getElementById("five");
elemUpgrade_businessman2.onclick = addUpgrade_businessman2;
elemUpgrade_businessman3 = document.getElementById("six");
elemUpgrade_businessman3.onclick = addUpgrade_businessman3;

//upgrades supermarket
elemUpgrade_supermarket1 = document.getElementById("seven");
elemUpgrade_supermarket1.onclick = addUpgrade_supermarket1;
elemUpgrade_supermarket2 = document.getElementById("eight");
elemUpgrade_supermarket2.onclick = addUpgrade_supermarket2;
elemUpgrade_supermarket3 = document.getElementById("nine");
elemUpgrade_supermarket3.onclick = addUpgrade_supermarket3;

//upgrades factory
elemUpgrade_factory1 = document.getElementById("ten");
elemUpgrade_factory1.onclick = addUpgrade_factory1;
elemUpgrade_factory2 = document.getElementById("eleven");
elemUpgrade_factory2.onclick = addUpgrade_factory2;
elemUpgrade_factory3 = document.getElementById("twelve");
elemUpgrade_factory3.onclick = addUpgrade_factory3;

//upgrades bank
elemUpgrade_bank1 = document.getElementById("thirteen");
elemUpgrade_bank1.onclick = addUpgrade_bank1;
elemUpgrade_bank2 = document.getElementById("fourteen");
elemUpgrade_bank2.onclick = addUpgrade_bank2;
elemUpgrade_bank3 = document.getElementById("fifteen");
elemUpgrade_bank3.onclick = addUpgrade_bank3;

//upgrades mine
elemUpgrade_mine1 = document.getElementById("sixteen");
elemUpgrade_mine1.onclick = addUpgrade_mine1;
elemUpgrade_mine2 = document.getElementById("seventeen");
elemUpgrade_mine2.onclick = addUpgrade_mine2;
elemUpgrade_mine3 = document.getElementById("eighteen");
elemUpgrade_mine3.onclick = addUpgrade_mine3;

//upgrades president
elemUpgrade_president1 = document.getElementById("nineteen");
elemUpgrade_president1.onclick = addUpgrade_president1;
elemUpgrade_president2 = document.getElementById("twenty");
elemUpgrade_president2.onclick = addUpgrade_president2;
elemUpgrade_president3 = document.getElementById("twenty-one");
elemUpgrade_president3.onclick = addUpgrade_president3;

//upgrades antimatter
elemUpgrade_antimatter1 = document.getElementById("twenty-two");
elemUpgrade_antimatter1.onclick = addUpgrade_antimatter1;
elemUpgrade_antimatter2 = document.getElementById("twenty-three");
elemUpgrade_antimatter2.onclick = addUpgrade_antimatter2;
elemUpgrade_antimatter3 = document.getElementById("twenty-four");
elemUpgrade_antimatter3.onclick = addUpgrade_antimatter3;
