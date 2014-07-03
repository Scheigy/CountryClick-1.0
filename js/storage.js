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

function	createMultiplicator()
{
	mult = new Object();
	mult.worker = 1;
	mult.businessman = 1;
	mult.supermarket = 1;
	mult.factory = 1;
	mult.bank = 1;
	mult.mine = 1;
	mult.president = 1;
	mult.antimatter = 1;
	mult.dollar_valor = 1;
}

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
	
	mult = new Object();
	mult.worker = parseInt(window.localStorage.getItem('upworker'));
	mult.businessman = parseInt(window.localStorage.getItem('upbusinessman'));
	mult.supermarket = parseInt(window.localStorage.getItem('upsupermarket'));
	mult.factory = parseInt(window.localStorage.getItem('upfactory'));
	mult.bank = parseInt(window.localStorage.getItem('upbank'));
	mult.mine = parseInt(window.localStorage.getItem('upmine'));
	mult.president = parseInt(window.localStorage.getItem('uppresident'));
	mult.antimatter = parseInt(window.localStorage.getItem('upantimatter'));
	mult.dollar_valor = parseInt(window.localStorage.getItem('dollar_boost'));
}

function	createStorage()
{
	window.localStorage.setItem('money', game.money);
	window.localStorage.setItem('prod_money', game.prod_money);
	window.localStorage.setItem('total_money', game.total_money);
	window.localStorage.setItem('worker', game.worker);
	window.localStorage.setItem('businessman', game.businessman);
	window.localStorage.setItem('supermarket', game.supermarket);
	window.localStorage.setItem('factory', game.factory);
	window.localStorage.setItem('bank', game.bank);
	window.localStorage.setItem('mine', game.mine);
	window.localStorage.setItem('president', game.president);
	window.localStorage.setItem('antimatter', game.antimatter);
	window.localStorage.setItem('upgrade', game.upgrade);
	window.localStorage.setItem('timecounter', game.timecounter);
	window.localStorage.setItem('clickcounter', game.clickcounter);

	window.localStorage.setItem('upworker', mult.worker);
	window.localStorage.setItem('upbusinessman', mult.businessman);
	window.localStorage.setItem('upsupermarket', mult.supermarket);
	window.localStorage.setItem('upfactory', mult.factory);
	window.localStorage.setItem('upbank', mult.bank);
	window.localStorage.setItem('upmine', mult.mine);
	window.localStorage.setItem('uppresident', mult.president);
	window.localStorage.setItem('upantimatter', mult.antimatter);
	window.localStorage.setItem('dollar_boost', mult.dollar_valor);
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

function	lcStorage()
{
	if (window.localStorage.length == 0)
	{
		createObject();
		createMultiplicator();
		createStorage();
		alert('Bienvenue');
	}
	else
		setObject();
}

function	clickValue()
{
	var i = 0;
	var value = 1;

	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			value *= 2;
		i += 3;
	}
	i = 1;
	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			value *= 4;
		i += 3;
	}
	i = 2;
	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			value *= 8;
		i += 3;
	}
	return (value);
}

function	addDollar()
{
	game.clickcounter = game.clickcounter + 1;
	game.money = game.money + clickValue() * bonusCalculator();
	game.total_money = game.total_money + clickValue() * bonusCalculator();
	myDollar.innerHTML = changeNumber(game.money) + ' $';
	myDollarTotal.innerHTML = 'TOTAL : ' + changeNumber(game.total_money) + ' $';
}

function    lowerMalus(malus)
{
	return (malus + 0.5);
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
		calc_prod();
	}
}

////////////////////////////////////////Vente///////////////////////////////////////////////////////////////
/*

function	calc_sell_price()
{
	return(parseInt((price * Math.pow(1.15, nb)) / 2));	
}

function	sellWorker()
{
	if (game.worker > 0)
	{ 
		game.money = game.money + calc_sell_price(game.worker, 100);
		game.worker = game.worker - 1;
		myWorker.innerHTML = game.worker + ' ouvrier(s)';
		myWorkerPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.worker, 100)) + ' $';
		calc_prod();
	}
}

function	sellBusinessman()
{
	if (game.businessman > 0)
	{ 
		game.money = game.money + calc_sell_price(game.businessman, 500);
		game.businessman = game.businessman - 1;
		myBusinessman.innerHTML = game.businessman + ' cadre(s)';
		myBusinessmanPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.businessman, 500)) + ' $';
		calc_prod();
	}
}

function	sellSupermarket()
{
	if (game.supermarket > 0)
	{ 
		game.money = game.money + calc_sell_price(game.supermarket, 3000);
		game.supermarket = game.supermarket - 1;
		mySupermarket.innerHTML = game.supermarket + ' supermarché(s)';
		mySupermarketPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.supermarket, 3000)) + ' $';
		calc_prod();
	}
}

function	sellFactory()
{
	if (game.factory > 0)
	{ 
		game.money = game.money + calc_sell_price(game.factory, 10000);
		game.factory = game.factory - 1;
		myFactory.innerHTML = game.factory + ' usine(s)';
		myFactoryPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.factory, 10000)) + ' $';
		calc_prod();
	}
}

function	sellBank()
{
	if (game.bank > 0)
	{ 
		game.money = game.money + calc_sell_price(game.bank, 100000);
		game.bank = game.bank - 1;
		myBank.innerHTML = game.bank + ' banque(s)';
		myBankPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.bank, 100000)) + ' $';
		calc_prod();
	}
}

function	sellMine()
{
	if (game.mine > 0)
	{ 
		game.money = game.money + calc_sell_price(game.mine, 1000000);
		game.mine = game.mine - 1;
		myMine.innerHTML = game.mine + ' mine(s)';
		myMinePrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.mine, 1000000)) + ' $';
		calc_prod();
	}
}

function	sellPresident()
{
	if (game.president > 0)
	{ 
		game.money = game.money + calc_sell_price(game.president, 20000000);
		game.president = game.president - 1;
		myPresident.innerHTML = game.president + ' président(s)';
		myPresidentPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.president, 20000000)) + ' $';
		calc_prod();
	}
}

function	sellAntimatter()
{
	if (game.antimatter > 0)
	{ 
		game.money = game.money + calc_sell_price(game.antimatter, 1128256512);
		game.antimatter = game.antimatter - 1;
		myAntimatter.innerHTML = game.antimatter + ' nuage(s) d\'antimatière';
		myAntimatterPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.antimatter, 1128256512)) + ' $';
		calc_prod();
	}
}
*/
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
		myFactoryBenefit.innerHTML = 'Bénéfice : ' + changeNumber(40 * mult.factory) + ' $/sec';
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
	if (game.worker >= 100)
		game.upgrade = setCharAt(game.upgrade, 2, '1');

	/*upgrades businessman*/
	if (game.businessman >= 10 && game.upgrade[3] != '2')
		game.upgrade = setCharAt(game.upgrade, 3, '1');
	if (game.businessman >= 50 && game.upgrade[4] != '2')
		game.upgrade = setCharAt(game.upgrade, 4, '1');
	if (game.businessman >= 100)
		game.upgrade = setCharAt(game.upgrade, 5, '1');

	/*upgrades supermarket*/
	if (game.supermarket >= 10 && game.upgrade[6] != '2')
		game.upgrade = setCharAt(game.upgrade, 6, '1');
	if (game.supermarket >= 50 && game.upgrade[7] != '2')
		game.upgrade = setCharAt(game.upgrade, 7, '1');
	if (game.supermarket >= 100)
		game.upgrade = setCharAt(game.upgrade, 8, '1');

	/*upgrades factory*/
	if (game.factory >= 10 && game.upgrade[9] != '2')
		game.upgrade = setCharAt(game.upgrade, 9, '1');
	if (game.factory >= 50 && game.upgrade[10] != '2')
		game.upgrade = setCharAt(game.upgrade, 10, '1');
	if (game.factory >= 100)
		game.upgrade = setCharAt(game.upgrade, 11, '1');

	/*upgrades bank*/
	if (game.bank >= 10 && game.upgrade[12] != '2')
		game.upgrade = setCharAt(game.upgrade, 12, '1');
	if (game.bank >= 50 && game.upgrade[13] != '2')
		game.upgrade = setCharAt(game.upgrade, 13, '1');
	if (game.bank >= 100)
		game.upgrade = setCharAt(game.upgrade, 14, '1');

	/*upgrades mine*/
	if (game.mine >= 10 && game.upgrade[15] != '2')
		game.upgrade = setCharAt(game.upgrade, 15, '1');
	if (game.mine >= 50 && game.upgrade[16] != '2')
		game.upgrade = setCharAt(game.upgrade, 16, '1');
	if (game.mine >= 100)
		game.upgrade = setCharAt(game.upgrade, 17, '1');

	/*upgrades president*/
	if (game.president >= 10 && game.upgrade[18] != '2')
		game.upgrade = setCharAt(game.upgrade, 18, '1');
	if (game.president >= 50 && game.upgrade[19] != '2')
		game.upgrade = setCharAt(game.upgrade, 19, '1');
	if (game.president >= 100)
		game.upgrade = setCharAt(game.upgrade, 20, '1');

	/*upgrades antimatter*/
	if (game.antimatter >= 10 && game.upgrade[21] != '2')
		game.upgrade = setCharAt(game.upgrade, 21, '1');
	if (game.antimatter >= 50 && game.upgrade[22] != '2')
		game.upgrade = setCharAt(game.upgrade, 22, '1');
	if (game.antimatter >= 100)
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

function	AC()
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
}

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
		strike = Math.floor((Math.random() * (14400 * time)) + 1);
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

///////////////////////////////////Achievement/////////////////////////////////////
/*

function	time_counter()
{
	game.timecounter = game.timecounter + 1;
}

function	nb_click_achievements()
{
	str = "0000";
	if (game.clickcounter >= 100)
		str = setCharAt(str, 0, '1');
	if (game.clickcounter >= 1000)
		str = setCharAt(str, 1, '1');
	if (game.clickcounter >= 10000)
		str = setCharAt(str, 2, '1');
	if (game.clickcounter >= 100000)
		str = setCharAt(str, 3, '1');
	return (str);
}

function	prod_dollar_achievements()
{
	str = "0000000";
	if (game.prod_money >= 10)
		str = setCharAt(str, 0, '1');
	if (game.prod_money >= 1000)
		str = setCharAt(str, 1, '1');
	if (game.prod_money >= 50000)
		str = setCharAt(str, 2, '1');
	if (game.prod_money >= 500000)
		str = setCharAt(str, 3, '1');
	if (game.prod_money >= 10000000)
		str = setCharAt(str, 4, '1');
	if (game.prod_money >= 100000000)
		str = setCharAt(str, 5, '1');
	if (game.prod_money >= 10000000000)
		str = setCharAt(str, 6, '1');
	return (str);
}

function	upgrades_bought_achievements()
{
	str = "000000";
	var i = 0;
	var unlocked = 0;
	while (i < 24)
	{
		if (game.upgrade[i] == '2')
			unlocked = unlocked + 1;
		i = i + 1;	
	}
	if (unlocked >= 1)
		str = setCharAt(str, 0, '1');
	if (unlocked >= 5)
		str = setCharAt(str, 1, '1');
	if (unlocked >= 10)
		str = setCharAt(str, 2, '1');
	if (unlocked >= 15)
		str = setCharAt(str, 3, '1');
	if (unlocked >= 20)
		str = setCharAt(str, 4, '1');
	if (unlocked >= 24)
		str = setCharAt(str, 5, '1');
	return (str);
}

function	call_achievements_functions()
{
	unlock_workers_achievements();
	unlock_businessmen_achievements();
	unlock_supermarkets_achievements();
	unlock_factory_achievements();
	unlock_banks_achievements();
	unlock_mines_achievements();
	unlock_presidents_achievements();
	unlock_antimatter_achievements();

	unlock_totalbuildings_achievements();
	time_played_achievements();
	nb_click_achievements();
	total_dollar_achievements();
	prod_dollar_achievements();
	upgrades_bought_achievements();
}

function	my_aff_worker_achievements()
{
	1_worker = document.getElementById('1_worker');
	if (game.worker >= 1)
		1_worker.innerHTML = '1wo';
	else
		1_worker.innerHTML = 'lock'
			
	2_worker = document.getElementById('2_worker');
	if (game.worker >= 30)
		2_worker.innerHTML = '30wo';
	else
		2_worker.innerHTML = 'lock'
		
	3_worker = document.getElementById('3_worker');
	if (game.worker >= 80)
		3_worker.innerHTML = '80wo';
	else
		3_worker.innerHTML = 'lock'
		
	4_worker = document.getElementById('4_worker');
	if (game.worker >= 150)
		4_worker.innerHTML = '150wo';
	else
		4_worker.innerHTML = 'lock'
}

function	my_aff_businessman_achievements()
{
	1_businessman = document.getElementById('1_businessman');
	if (game.businessman >= 1)
		1_businessman.innerHTML = '1bu';
	else
		1_businessman.innerHTML = 'lock'
			
	2_businessman = document.getElementById('2_businessman');
	if (game.businessman >= 30)
		2_businessman.innerHTML = '30bu';
	else
		2_businessman.innerHTML = 'lock'
		
	3_businessman = document.getElementById('3_businessman');
	if (game.businessman >= 80)
		3_businessman.innerHTML = '80bu';
	else
		3_businessman.innerHTML = 'lock'
		
	4_businessman = document.getElementById('4_businessman');
	if (game.businessman >= 150)
		4_businessman.innerHTML = '150bu';
	else
		4_businessman.innerHTML = 'lock'
}

function	my_aff_supermarket_achievements()
{
	1_supermarket = document.getElementById('1_supermarket');
	if (game.supermarket >= 1)
		1_supermarket.innerHTML = '1su';
	else
		1_supermarket.innerHTML = 'lock'
			
	2_supermarket = document.getElementById('2_supermarket');
	if (game.supermarket >= 30)
		2_supermarket.innerHTML = '30su';
	else
		2_supermarket.innerHTML = 'lock'
		
	3_supermarket = document.getElementById('3_supermarket');
	if (game.supermarket >= 80)
		3_supermarket.innerHTML = '80su';
	else
		3_supermarket.innerHTML = 'lock'
		
	4_supermarket = document.getElementById('4_supermarket');
	if (game.supermarket >= 150)
		4_supermarket.innerHTML = '150su';
	else
		4_supermarket.innerHTML = 'lock'
}

function	my_aff_factory_achievements()
{
	1_factory = document.getElementById('1_factory');
	if (game.factory >= 1)
		1_factory.innerHTML = '1fa';
	else
		1_factory.innerHTML = 'lock'
			
	2_factory = document.getElementById('2_factory');
	if (game.factory >= 30)
		2_factory.innerHTML = '30fa';
	else
		2_factory.innerHTML = 'lock'
		
	3_factory = document.getElementById('3_factory');
	if (game.factory >= 80)
		3_factory.innerHTML = '80fa';
	else
		3_factory.innerHTML = 'lock'
		
	4_factory = document.getElementById('4_factory');
	if (game.factory >= 150)
		4_factory.innerHTML = '150fa';
	else
		4_factory.innerHTML = 'lock'	
}

function	my_aff_bank_achievements()
{
	1_bank = document.getElementById('1_bank');
	if (game.bank >= 1)
		1_bank.innerHTML = '1ba';
	else
		1_bank.innerHTML = 'lock'
			
	2_bank = document.getElementById('2_bank');
	if (game.bank >= 30)
		2_bank.innerHTML = '30ba';
	else
		2_bank.innerHTML = 'lock'
		
	3_bank = document.getElementById('3_bank');
	if (game.bank >= 80)
		3_bank.innerHTML = '80ba';
	else
		3_bank.innerHTML = 'lock'
		
	4_bank = document.getElementById('4_bank');
	if (game.bank >= 150)
		4_bank.innerHTML = '150ba';
	else
		4_bank.innerHTML = 'lock'	
}

function	my_aff_mine_achievements()
{
	1_mine = document.getElementById('1_mine');
	if (game.mine >= 1)
		1_mine.innerHTML = '1mi';
	else
		1_mine.innerHTML = 'lock'
			
	2_mine = document.getElementById('2_mine');
	if (game.mine >= 30)
		2_mine.innerHTML = '30mi';
	else
		2_mine.innerHTML = 'lock'
		
	3_mine = document.getElementById('3_mine');
	if (game.mine >= 80)
		3_mine.innerHTML = '80mi';
	else
		3_mine.innerHTML = 'lock'
		
	4_mine = document.getElementById('4_mine');
	if (game.mine >= 150)
		4_mine.innerHTML = '150mi';
	else
		4_mine.innerHTML = 'lock'	
}

function	my_aff_president_achievements()
{
	1_president = document.getElementById('1_president');
	if (game.president >= 1)
		1_president.innerHTML = '1pr';
	else
		1_president.innerHTML = 'lock'
			
	2_president = document.getElementById('2_president');
	if (game.president >= 30)
		2_president.innerHTML = '30pr';
	else
		2_president.innerHTML = 'lock'
		
	3_president = document.getElementById('3_president');
	if (game.president >= 80)
		3_president.innerHTML = '80pr';
	else
		3_president.innerHTML = 'lock'
		
	4_president = document.getElementById('4_president');
	if (game.president >= 120)
		4_president.innerHTML = '120pr';
	else
		4_president.innerHTML = 'lock'	
}

function	my_aff_antimatter_achievements()
{
	1_antimatter = document.getElementById('1_antimatter');
	if (game.antimatter >= 1)
		1_antimatter.innerHTML = '1an';
	else
		1_antimatter.innerHTML = 'lock'
			
	2_antimatter = document.getElementById('2_antimatter');
	if (game.antimatter >= 30)
		2_antimatter.innerHTML = '30an';
	else
		2_antimatter.innerHTML = 'lock'
		
	3_antimatter = document.getElementById('3_antimatter');
	if (game.antimatter >= 80)
		3_antimatter.innerHTML = '80an';
	else
		3_antimatter.innerHTML = 'lock'
		
	4_antimatter = document.getElementById('4_antimatter');
	if (game.antimatter >= 120)
		4_antimatter.innerHTML = '120an';
	else
		4_antimatter.innerHTML = 'lock'	
}

function	my_aff_totalbat_achievements()
{
	1_totalbuild = document.getElementById('1_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 50)
		1_totalbuild.innerHTML = '50all';
	else
		1_totalbuild.innerHTML = 'lock'
			
	2_totalbuild = document.getElementById('2_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 100)
		2_totalbuild.innerHTML = '100all';
	else
		2_totalbuild.innerHTML = 'lock'
		
	3_totalbuild = document.getElementById('3_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 500)
		3_totalbuild.innerHTML = '500all';
	else
		3_totalbuild.innerHTML = 'lock'
		
	4_totalbuild = document.getElementById('4_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 1000)
		4_totalbuild.innerHTML = '1000all';
	else
		4_totalbuild.innerHTML = 'lock'
		
	5_totalbuild = document.getElementById('5_totalbuild');
	if (game.worker + game.businessman + game.supermarket + game.factory + 
		game.bank + game.mine + game.president + game.antimatter >= 2000)
		5_totalbuild.innerHTML = '2000all';
	else
		5_totalbuild.innerHTML = 'lock'	
}

function	my_aff_totalmoney_achievements()
{			
	1_totalmoney = document.getElementById('1_totalmoney');
	if (game.total_money >= 100)
		1_totalmoney.innerHTML = '$total';
	else
		1_totalmoney.innerHTML = 'lock'
		
	2_totalmoney = document.getElementById('2_totalmoney');
	if (game.total_money >= 1000)
		2_totalmoney.innerHTML = '$total';
	else
		2_totalmoney.innerHTML = 'lock'
		
	3_totalmoney = document.getElementById('3_totalmoney');
	if (game.total_money >= 100000)
		3_totalmoney.innerHTML = '$total';
	else
		3_totalmoney.innerHTML = 'lock'
		
	4_totalmoney = document.getElementById('4_totalmoney');
	if (game.total_money >= 1000000)
		4_totalmoney.innerHTML = '$total';
	else
		4_totalmoney.innerHTML = 'lock'
		
	5_totalmoney = document.getElementById('5_totalmoney');
	if (game.total_money >= 100000000)
		5_totalmoney.innerHTML = '$total';
	else
		5_totalmoney.innerHTML = 'lock'	
		
	6_totalmoney = document.getElementById('6_totalmoney');
	if (game.total_money >= 1000000000)
		6_totalmoney.innerHTML = '$total';
	else
		6_totalmoney.innerHTML = 'lock'	
		
	7_totalmoney = document.getElementById('7_totalmoney');
	if (game.total_money >= 100000000000)
		7_totalmoney.innerHTML = '$total';
	else
		7_totalmoney.innerHTML = 'lock'
	
	8_totalmoney = document.getElementById('8_totalmoney');
	if (game.total_money >= 100000000000000)
		8_totalmoney.innerHTML = '$total';
	else
		8_totalmoney.innerHTML = 'lock'
		
}

function	my_aff_prod_achievements()
{
	achiev_55 = document.getElementById('55_a');
	if (game.prod_money >= 1)
		achiev_55.innerHTML = '$prod';
	else
		achiev_55.innerHTML = 'lock'

	achiev_56 = document.getElementById('56_a');
	if (game.prod_money >= 10)
		achiev_56.innerHTML = '$prod';
	else
		achiev_56.innerHTML = 'lock'

	achiev_57 = document.getElementById('57_a');
	if (game.prod_money >= 100)
		achiev_57.innerHTML = '$prod';
	else
		achiev_57.innerHTML = 'lock'
		
	achiev_58 = document.getElementById('58_a');
	if (game.prod_money >= 1000)
		achiev_58.innerHTML = '$prod';
	else
		achiev_58.innerHTML = 'lock'
		
	achiev_59 = document.getElementById('59_a');
	if (game.prod_money >= 10000)
		achiev_59.innerHTML = '$prod';
	else
		achiev_59.innerHTML = 'lock'
		
	achiev_60 = document.getElementById('60_a');
	if (game.prod_money >= 100000)
		achiev_60.innerHTML = '$prod';
	else
		achiev_60.innerHTML = 'lock'
		
	achiev_61 = document.getElementById('61_a');
	if (game.prod_money >= 1000000)
		achiev_61.innerHTML = '$prod';
	else
		achiev_61.innerHTML = 'lock'	
	
	achiev_62 = document.getElementById('62_a');
	if (game.prod_money >= 10000000)
		achiev_62.innerHTML = '$prod';
	else
		achiev_62.innerHTML = 'lock'	
}

function	my_aff_timeplayed_achievements()
{
	achiev_55 = document.getElementById('55_a');
	if (game.prod_money >= 1)
		achiev_55.innerHTML = '$prod';
	else
		achiev_55.innerHTML = 'lock'

	achiev_56 = document.getElementById('56_a');
	if (game.prod_money >= 10)
		achiev_56.innerHTML = '$prod';
	else
		achiev_56.innerHTML = 'lock'	
	
	
}

function	time_played_achievements()
{
	str = "00000"
	if (game.timecounter >= 6) // 30min
		str = setCharAt(str, 0, '1');
	if (game.timecounter >= 12) // 1h
		str = setCharAt(str, 1, '1');
	if (game.timecounter >= 288) // 1j
		str = setCharAt(str, 2, '1');
	if (game.timecounter >= 864) // 3j
		str = setCharAt(str, 3, '1');
	if (game.timecounter >= 2016) // 1semaine
		str = setCharAt(str, 4, '1');
	return (str);
}

*/
////////////////////////////////////////////////////////////////////////////////////////////////

function reparation()
{
	if (game.upgrade.length != 24)
	{
		game.upgrade = '000000000000000000000000';
		createMultiplicator();
		alert('Suite à un problème avec les upgrades, ils ont été réinitialisés. Nous sommes désolés pour les inconvénients.');
	}
}

lcStorage();
my_aff_buildings();
my_aff_total_buildings();
my_aff_upgrades();
calc_prod();
reparation();
my_aff_upgrades();
setInterval(function(){createStorage();
	my_aff_buildings();
	AC();
}, 5000);
setInterval(function() {time_counter();}, 300000);
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
/*
elemSellWorker = document.getElementById("worker_sell");
elemSellWorker.onclick = sellWorker;
elemSellBusinessman = document.getElementById("businessman_sell");
elemSellBusinessman.onclick = sellBusinessman;
elemSellSupermarket = document.getElementById("supermarket_sell");
elemSellSupermarket.onclick = sellSupermarket;
elemSellFactory = document.getElementById("factory_sell");
elemSellFactory.onclick = sellFactory;
elemSellBank = document.getElementById("bank_sell");
elemSellBank.onclick = sellBank;
elemSellMine = document.getElementById("mine_sell");
elemSellMine.onclick = sellMine;
elemSellPresident = document.getElementById("president_sell");
elemSellPresident.onclick = sellPresident;
elemSellAntimatter = document.getElementById("antimatter_sell");
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