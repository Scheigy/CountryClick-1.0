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
	
	mult = new Object();
	mult.worker = parseInt(window.localStorage.getItem('upworker'));
	mult.businessman = parseInt(window.localStorage.getItem('upbusinessman'));
	mult.supermarket = parseInt(window.localStorage.getItem('upsupermarket'));
	mult.factory = parseInt(window.localStorage.getItem('upfactory'));
	mult.bank = parseInt(window.localStorage.getItem('upbank'));
	mult.mine = parseInt(window.localStorage.getItem('upmine'));
	mult.president = parseInt(window.localStorage.getItem('uppresident'));
	mult.antimatter = parseInt(window.localStorage.getItem('upantimatter'));
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

	window.localStorage.setItem('upworker', mult.worker);
	window.localStorage.setItem('upbusinessman', mult.businessman);
	window.localStorage.setItem('upsupermarket', mult.supermarket);
	window.localStorage.setItem('upfactory', mult.factory);
	window.localStorage.setItem('upbank', mult.bank);
	window.localStorage.setItem('upmine', mult.mine);
	window.localStorage.setItem('uppresident', mult.president);
	window.localStorage.setItem('upantimatter', mult.antimatter);	
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

function	dollarCounter()
{
	game.money = game.money + (game.prod_money / parseInt(time));
	game.total_money = game.total_money + (game.prod_money / parseInt(time));
	myDollar = document.getElementById('dollar_counter');
	myDollar.innerHTML = changeNumber(game.money) + ' $';
	myDollarProd = document.getElementById('dollar_prod');
	myDollarProd.innerHTML = changeNumber(game.prod_money) + ' $ par seconde';
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

function	addDollar()
{
	game.money = game.money + 1;
	game.total_money = game.total_money + 1;
	myDollar.innerHTML = changeNumber(game.money) + ' $';
	myDollarTotal.innerHTML = 'TOTAL : ' + changeNumber(game.total_money) + ' $';
}

function	calc_prod()
{
	game.prod_money = game.worker * 1 * mult.worker;
	game.prod_money += game.businessman * 5 * mult.businessman;
	game.prod_money += game.supermarket * 15 * mult.supermarket;
	game.prod_money += game.factory * 40 * mult.factory;
	game.prod_money += game.bank * 300 * mult.bank;
	game.prod_money += game.mine * 1000 * mult.mine;
	game.prod_money += game.president * 5000 * mult.president;
	game.prod_money += game.antimatter * 50000 * mult.antimatter;
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

function	my_aff_buildings()
{
	myWorker = document.getElementById('nb_worker');
	myWorker.innerHTML = game.worker + ' ouvrier(s)';
	myWorkerPrice = document.getElementById('worker_cost');
	myWorkerPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.worker, 100)) + ' $';
	
	myBusinessman = document.getElementById('nb_businessman');
	myBusinessman.innerHTML = game.businessman + ' cadre(s)';
	myBusinessmanPrice = document.getElementById('businessman_cost');
	myBusinessmanPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.businessman, 500)) + ' $';

	mySupermarket = document.getElementById('nb_supermarket');
	mySupermarket.innerHTML = game.supermarket + ' supermarché(s)';
	mySupermarketPrice = document.getElementById('supermarket_cost');
	mySupermarketPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.supermarket, 3000)) + ' $';

	myFactory = document.getElementById('nb_factory');
	myFactory.innerHTML = game.factory + ' usine(s)';
	myFactoryPrice = document.getElementById('factory_cost');
	myFactoryPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.factory, 10000)) + ' $';

	myBank = document.getElementById('nb_bank');
	myBank.innerHTML = game.bank + ' banque(s)';
	myBankPrice = document.getElementById('bank_cost');
	myBankPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.bank, 100000)) + ' $';

	myMine = document.getElementById('nb_mine');
	myMine.innerHTML = game.mine + ' mine(s)';
	myMinePrice = document.getElementById('mine_cost');
	myMinePrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.mine, 1000000)) + ' $';

	myPresident = document.getElementById('nb_president');
	myPresident.innerHTML = game.president + ' président(s)';
	myPresidentPrice = document.getElementById('president_cost');
	myPresidentPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.president, 20000000)) + ' $';

	myAntimatter = document.getElementById('nb_antimatter');
	myAntimatter.innerHTML = game.antimatter + ' nuage(s) d\'antimatière';
	myAntimatterPrice = document.getElementById('antimatter_cost');
	myAntimatterPrice.innerHTML = 'Prix : ' + changeNumber(calc_price(game.antimatter, 1128256512)) + ' $';
}

function setCharAt(str,index,chr) 
{
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function	addUpgrade_worker()
{
	if (((game.money - 1000) >= 0) && game.upgrade[0] == '1')
	{
		game.money = game.money - 1000;
		game.upgrade = setCharAt(game.upgrade, 0, '2');
		mult.worker = 2;
		upWorker = document.getElementById('one');
		upWorker.innerHTML = 'x 2';
		calc_prod();
	}
	if (((game.money - 10000) >=0) && game.upgrade[1] == '1' && game.upgrade[0] == '2')
	{
		game.money = game.money - 10000;
		game.upgrade = setCharAt(game.upgrade, 1, '2');
		mult.worker = 8;
		upWorker2 = document.getElementById('two');
		upWorker2.innerHTML = 'x 4';
		calc_prod();
	}
	if (((game.money - 100000) >=0) && game.upgrade[2] == '1' && game.upgrade[1] == '2')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 2, '2');
		mult.worker = 64;
		upWorker = document.getElementById('three');
		upWorker.innerHTML = 'x 8';
		calc_prod();
	}
}

function	addUpgrade_businessman()
{
	if (((game.money - 10000) >= 0) && game.upgrade[3] == '1')
	{
		game.money = game.money - 10000;
		game.upgrade = setCharAt(game.upgrade, 3, '2');
		mult.businessman = 2;
		upBusinessman = document.getElementById('four');
		upBusinessman.innerHTML = 'x 2';
	}
	if (((game.money - 100000) >=0) && game.upgrade[4] == '1' && game.upgrade[3] == '2')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 4, '2');
		mult.businessman = 8;
		upBusinessman = document.getElementById('five');
		upBusinessman.innerHTML = 'x 4';
	}
	if (((game.money - 1000000) >=0) && game.upgrade[5] == '1' && game.upgrade[4] == '2')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 5, '2');
		mult.businessman = 64;
		upBusinessman = document.getElementById('six');
		upBusinessman.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_supermarket()
{
	if (((game.money - 100000) >= 0) && game.upgrade[6] == '1')
	{
		game.money = game.money - 100000;
		game.upgrade = setCharAt(game.upgrade, 6, '2');
		mult.supermarket = 2;
		upSupermarket = document.getElementById('seven');
		upSupermarket.innerHTML = 'x 2';
	}
	if (((game.money - 1000000) >=0) && game.upgrade[7] == '1' && game.upgrade[6] == '2')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 7, '2');
		mult.supermarket = 8;
		upSupermarket = document.getElementById('eight');
		upSupermarket.innerHTML = 'x 4';
	}
	if (((game.money - 10000000) >=0) && game.upgrade[8] == '1' && game.upgrade[7] == '2')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 8, '2');
		mult.supermarket = 64;
		upSupermarket = document.getElementById('nine');
		upSupermarket.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_factory()
{
	if (((game.money - 1000000) >= 0) && game.upgrade[9] == '1')
	{
		game.money = game.money - 1000000;
		game.upgrade = setCharAt(game.upgrade, 9, '2');
		mult.factory = 2;
		upFactory = document.getElementById('ten');
		upFactory.innerHTML = 'x 2';
	}
	if (((game.money - 10000000) >=0) && game.upgrade[10] == '1' && game.upgrade[9] == '2')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 10, '2');
		mult.factory = 8;
		upFactory = document.getElementById('eleven');
		upFactory.innerHTML = 'x 4';
	}
	if (((game.money - 100000000) >=0) && game.upgrade[11] == '1' && game.upgrade[10] == '2')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 11, '2');
		mult.factory = 64;
		upFactory = document.getElementById('twelve');
		upFactory.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_bank()
{
	if (((game.money - 10000000) >= 0) && game.upgrade[12] == '1')
	{
		game.money = game.money - 10000000;
		game.upgrade = setCharAt(game.upgrade, 12, '2');
		mult.bank = 2;
		upBank = document.getElementById('thirteen');
		upBank.innerHTML = 'x 2';
	}
	if (((game.money - 100000000) >=0) && game.upgrade[13] == '1' && game.upgrade[12] == '2')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 13, '2');
		mult.bank = 8;
		upBank = document.getElementById('fourteen');
		upBank.innerHTML = 'x 4';
	}
	if (((game.money - 1000000000) >=0) && game.upgrade[14] == '1' && game.upgrade[13] == '2')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 14, '2');
		mult.bank = 64;
		upBank = document.getElementById('fifteen');
		upBank.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_mine()
{
	if (((game.money - 100000000) >= 0) && game.upgrade[15] == '1')
	{
		game.money = game.money - 100000000;
		game.upgrade = setCharAt(game.upgrade, 15, '2');
		mult.mine = 2;
		upMine = document.getElementById('sixteen');
		upMine.innerHTML = 'x 2';
	}
	if (((game.money - 1000000000) >=0) && game.upgrade[16] == '1' && game.upgrade[15] == '2')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 16, '2');
		mult.mine = 8;
		upMine = document.getElementById('seventeen');
		upMine.innerHTML = 'x 4';
	}
	if (((game.money - 10000000000) >=0) && game.upgrade[17] == '1' && game.upgrade[16] == '2')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 17, '2');
		mult.mine = 64;
		upMine = document.getElementById('eighteen');
		upMine.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_president()
{
	if (((game.money - 1000000000) >= 0) && game.upgrade[18] == '1')
	{
		game.money = game.money - 1000000000;
		game.upgrade = setCharAt(game.upgrade, 18, '2');
		mult.president = 2;
		upPresident = document.getElementById('nineteen');
		upPresident.innerHTML = 'x 2';
	}
	if (((game.money - 10000000000) >=0) && game.upgrade[19] == '1' && game.upgrade[18] == '2')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 19, '2');
		mult.president = 8;
		upPresident = document.getElementById('twenty');
		upPresident.innerHTML = 'x 4';
	}
	if (((game.money - 100000000000) >=0) && game.upgrade[20] == '1' && game.upgrade[19] == '2')
	{
		game.money = game.money - 100000000000;
		game.upgrade = setCharAt(game.upgrade, 20, '2');
		mult.president = 64;
		upPresident = document.getElementById('twenty-one');
		upPresident.innerHTML = 'x 8';
	}
	calc_prod();
}

function	addUpgrade_antimatter()
{
	if (((game.money - 10000000000) >= 0) && game.upgrade[21] == '1')
	{
		game.money = game.money - 10000000000;
		game.upgrade = setCharAt(game.upgrade, 21, '2');
		mult.antimatter = 2;
		upAntimatter = document.getElementById('twenty-two');
		upAntimatter.innerHTML = 'x 2';
	}
	if (((game.money - 100000000000) >=0) && game.upgrade[22] == '1' && game.upgrade[21] == '2')
	{
		game.money = game.money - 100000000000;
		game.upgrade = setCharAt(game.upgrade, 22, '2');
		mult.antimatter = 8;
		upAntimatter = document.getElementById('twenty-three');
		upAntimatter.innerHTML = 'x 4';
	}
	if (((game.money - 1000000000000) >=0) && game.upgrade[23] == '1' && game.upgrade[22] == '2')
	{
		game.money = game.money - 1000000000000;
		game.upgrade = setCharAt(game.upgrade, 23, '2');
		mult.antimatter = 64;
		upAntimatter = document.getElementById('twenty-four');
		upAntimatter.innerHTML = 'x 8';
	}
	calc_prod();
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
		upAntimatter3.innerHTML = '1 B'
}

// Evenemets Fixes
function	bonusBuilding()
{
	var	nb_building;
	var multiplicator;

	multiplicator = 1;
	nb_building = game.worker + game.businessman + game.supermarket + game.factory + game.bank + game.mine + game.president + game.antimatter;
	if (nb_building == 100)
	{
		multiplicator = 20;
	}
	return (multiplicator);
}

time = 10;
window.onload = function() { 
    window.onfocus = function() { time = 10;};
    window.onblur = function() {time = 1;}
};
lcStorage();
my_aff_buildings();
my_aff_upgrades();
calc_prod();
//bonusBuilding();
setInterval(function(){dollarCounter();unlock_upgrades();}, 100);
setInterval(function(){createStorage();}, 5000);
elemDollar = document.getElementById("dollar");
elemDollar.onclick = addDollar;
elemSave = document.getElementById("save_button");
elemSave.onclick = function(){createStorage; alert('Partie sauvegardé');};
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

//upgrades workers
elemUpgrade_worker1 = document.getElementById("one");
elemUpgrade_worker1.onclick = addUpgrade_worker;
elemUpgrade_worker2 = document.getElementById("two");
elemUpgrade_worker2.onclick = addUpgrade_worker;
elemUpgrade_worker3 = document.getElementById("three");
elemUpgrade_worker3.onclick = addUpgrade_worker;

//upgrades businessman
elemUpgrade_businessman1 = document.getElementById("four");
elemUpgrade_businessman1.onclick = addUpgrade_businessman;
elemUpgrade_businessman2 = document.getElementById("five");
elemUpgrade_businessman2.onclick = addUpgrade_businessman;
elemUpgrade_businessman3 = document.getElementById("six");
elemUpgrade_businessman3.onclick = addUpgrade_businessman;

//upgrades supermarket
elemUpgrade_supermarket1 = document.getElementById("seven");
elemUpgrade_supermarket1.onclick = addUpgrade_supermarket;
elemUpgrade_supermarket2 = document.getElementById("eight");
elemUpgrade_supermarket2.onclick = addUpgrade_supermarket;
elemUpgrade_supermarket3 = document.getElementById("nine");
elemUpgrade_supermarket3.onclick = addUpgrade_supermarket;

//upgrades factory
elemUpgrade_factory1 = document.getElementById("ten");
elemUpgrade_factory1.onclick = addUpgrade_factory;
elemUpgrade_factory2 = document.getElementById("eleven");
elemUpgrade_factory2.onclick = addUpgrade_factory;
elemUpgrade_factory3 = document.getElementById("twelve");
elemUpgrade_factory3.onclick = addUpgrade_factory;

//upgrades bank
elemUpgrade_bank1 = document.getElementById("thirteen");
elemUpgrade_bank1.onclick = addUpgrade_bank;
elemUpgrade_bank2 = document.getElementById("fourteen");
elemUpgrade_bank2.onclick = addUpgrade_bank;
elemUpgrade_bank3 = document.getElementById("fifteen");
elemUpgrade_bank3.onclick = addUpgrade_bank;

//upgrades mine
elemUpgrade_mine1 = document.getElementById("sixteen");
elemUpgrade_mine1.onclick = addUpgrade_mine;
elemUpgrade_mine2 = document.getElementById("seventeen");
elemUpgrade_mine2.onclick = addUpgrade_mine;
elemUpgrade_mine3 = document.getElementById("eighteen");
elemUpgrade_mine3.onclick = addUpgrade_mine;

//upgrades president
elemUpgrade_president1 = document.getElementById("nineteen");
elemUpgrade_president1.onclick = addUpgrade_president;
elemUpgrade_president2 = document.getElementById("twenty");
elemUpgrade_president2.onclick = addUpgrade_president;
elemUpgrade_president3 = document.getElementById("twenty-one");
elemUpgrade_president3.onclick = addUpgrade_president;

//upgrades antimatter
elemUpgrade_antimatter1 = document.getElementById("twenty-two");
elemUpgrade_antimatter1.onclick = addUpgrade_antimatter;
elemUpgrade_antimatter2 = document.getElementById("twenty-three");
elemUpgrade_antimatter2.onclick = addUpgrade_antimatter;
elemUpgrade_antimatter3 = document.getElementById("twenty-four");
elemUpgrade_antimatter3.onclick = addUpgrade_antimatter;