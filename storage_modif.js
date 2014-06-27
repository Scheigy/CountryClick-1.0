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
}

function	dollarCounter()
{
	game.money = game.money + (game.prod_money / 2);
	game.total_money = game.total_money + (game.prod_money / 2);
	myDollar = document.getElementById('dollar_counter');
	myDollar.innerHTML = game.money + ' $';
	myDollarProd = document.getElementById('dollar_prod');
	myDollarProd.innerHTML = game.prod_money + ' $ par seconde';
	myDollarTotal = document.getElementById('dollar_total');
	myDollarTotal.innerHTML = 'TOTAL :<br/>' + game.total_money + ' $';
}

function	lcStorage()
{
	if (window.localStorage.length == 0)
	{
		createObject();
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
	myDollar.innerHTML = game.money + ' $';
	myDollarTotal.innerHTML = 'TOTAL :<br/>' + game.total_money + ' $';
}

function	calc_prod()
{
	game.prod_money = game.worker * 1;
	game.prod_money += game.businessman * 5;
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
		myWorker.innerHTML = game.worker + ' worker(s)';
		myWorkerPrice.innerHTML = 'Prix : ' + calc_price(game.worker, 100) + ' $';
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
		myBusinessmanPrice.innerHTML = 'Prix : ' + calc_price(game.businessman, 500) + ' $';
		calc_prod();
	}
}

function	my_aff_buildings()
{
	myWorker = document.getElementById('nb_worker');
	myWorker.innerHTML = game.worker + ' worker(s)';
	myWorkerPrice = document.getElementById('worker_cost');
	myWorkerPrice.innerHTML = 'Prix : ' + calc_price(game.worker, 100) + ' $';
	
	myBusinessman = document.getElementById('nb_businessman');
	myBusinessman.innerHTML = game.businessman + ' cadre(s)';
	myBusinessmanPrice = document.getElementById('businessman_cost');
	myBusinessmanPrice.innerHTML = 'Prix : ' + calc_price(game.businessman, 500) + ' $';
}

function	addUpgrade_worker()
{
	if (((game.money - 1000) >= 0) && game.upgrade[0] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[0] == 2;
	}
	if (((game.money - 10000) >=0) && game.upgrade[1] == 1 && game.upgrade[0] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[1] == 2;
	}
	if (((game.money - 100000) >=0) && game.upgrade[2] == 1 && game.upgrade[1] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[2] == 2;
	}
}

function	addUpgrade_businessman()
{
	if (((game.money - 10000) >= 0) && game.upgrade[3] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[3] == 2;
	}
	if (((game.money - 100000) >=0) && game.upgrade[4] == 1 && game.upgrade[3] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[4] == 2;
	}
	if (((game.money - 1000000) >=0) && game.upgrade[5] == 1 && game.upgrade[4] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[5] == 2;
	}
}

function	addUpgrade_supermarket()
{
	if (((game.money - 100000) >= 0) && game.upgrade[6] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[6] == 2;
	}
	if (((game.money - 1000000) >=0) && game.upgrade[7] == 1 && game.upgrade[6] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[7] == 2;
	}
	if (((game.money - 10000000) >=0) && game.upgrade[8] == 1 && game.upgrade[7] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[8] == 2;
	}
}

function	addUpgrade_factory()
{
	if (((game.money - 1000000) >= 0) && game.upgrade[9] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[9] == 2;
	}
	if (((game.money - 10000000) >=0) && game.upgrade[10] == 1 && game.upgrade[9] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[10] == 2;
	}
	if (((game.money - 100000000) >=0) && game.upgrade[11] == 1 && game.upgrade[10] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[11] == 2;
	}
}

function	addUpgrade_bank()
{
	if (((game.money - 10000000) >= 0) && game.upgrade[12] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[12] == 2;
	}
	if (((game.money - 100000000) >=0) && game.upgrade[13] == 1 && game.upgrade[12] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[13] == 2;
	}
	if (((game.money - 1000000000) >=0) && game.upgrade[14] == 1 && game.upgrade[13] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[14] == 2;
	}
}

function	addUpgrade_mine()
{
	if (((game.money - 100000000) >= 0) && game.upgrade[15] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[15] == 2;
	}
	if (((game.money - 1000000000) >=0) && game.upgrade[16] == 1 && game.upgrade[15] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[16] == 2;
	}
	if (((game.money - 10000000000) >=0) && game.upgrade[17] == 1 && game.upgrade[16] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[17] == 2;
	}
}

function	addUpgrade_president()
{
	if (((game.money - 1000000000) >= 0) && game.upgrade[18] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[18] == 2;
	}
	if (((game.money - 10000000000) >=0) && game.upgrade[19] == 1 && game.upgrade[18] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[19] == 2;
	}
	if (((game.money - 100000000000) >=0) && game.upgrade[20] == 1 && game.upgrade[19] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[20] == 2;
	}
}

function	addUpgrade_antimatter()
{
	if (((game.money - 10000000000) >= 0) && game.upgrade[21] == 1)
	{
		game.money = game.money - 1000;
		game.upgrade[21] == 2;
	}
	if (((game.money - 100000000000) >=0) && game.upgrade[22] == 1 && game.upgrade[21] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[22] == 2;
	}
	if (((game.money - 1000000000000) >=0) && game.upgrade[23] == 1 && game.upgrade[22] == 2)
	{
		game.money = game.money - 1000;
		game.upgrade[23] == 2;
	}
}

function	unlock_upgrades()
{
	/*upgrades workers*/
	if (document.getElementById('nb_worker') >= 10)
		game.upgrade[0] = '1';
	if (document.getElementById('nb_worker') >= 50)
		game.upgrade[1] = '1';
	if (document.getElementById('nb_worker') >= 100)
		game.upgrade[2] = '1';
		
	/*upgrades businessman*/
	if (document.getElementById('nb_businessman') >= 10)
		game.upgrade[3] = '1';
	if (document.getElementById('nb_businessman') >= 50)
		game.upgrade[4] = '1';
	if (document.getElementById('nb_businessman') >= 100)
		game.upgrade[5] = '1';
		
		/*upgrades supermarket*/
	if (document.getElementById('nb_supermarket') >= 10)
		game.upgrade[6] = 1;
	if (document.getElementById('nb_supermarket') >= 50)
		game.upgrade[7] = 1;
	if (document.getElementById('nb_supermarket') >= 100)
		game.upgrade[8] = 1;
		
		/*upgrades factory*/
	if (document.getElementById('nb_factory') >= 10)
		game.upgrade[9] = 1;
	if (document.getElementById('nb_factory') >= 50)
		game.upgrade[10] = 1;
	if (document.getElementById('nb_factory') >= 100)
		game.upgrade[11] = 1;
		
		/*upgrades bank*/
	if (document.getElementById('nb_bank') >= 10)
		game.upgrade[12] = 1;
	if (document.getElementById('nb_bank') >= 50)
		game.upgrade[13] = 1;
	if (document.getElementById('nb_bank') >= 100)
		game.upgrade[14] = 1;
		
		/*upgrades mine*/
	if (document.getElementById('nb_mine') >= 10)
		game.upgrade[15] = 1;;
	if (document.getElementById('nb_mine') >= 50)
		game.upgrade[16] = 1;
	if (document.getElementById('nb_mine') >= 100)
		game.upgrade[17] = 1;
		
		/*upgrades president*/
	if (document.getElementById('nb_president') >= 10)
		game.upgrade[18] = 1;
	if (document.getElementById('nb_president') >= 50)
		game.upgrade[19] = 1;
	if (document.getElementById('nb_president') >= 100)
		game.upgrade[20] = 1;
		
		/*upgrades antimatter*/
	if (document.getElementById('nb_antimatter') >= 10)
		game.upgrade[21] = 1;
	if (document.getElementById('nb_antimatter') >= 50)
		game.upgrade[22] = 1;
	if (document.getElementById('nb_antimatter') >= 100)
		game.upgrade[23] = 1;
}


function	buy_upgrade1()
{
	
}

lcStorage();
my_aff_buildings();
calc_prod();
window.setInterval(function(){dollarCounter()}, 500);
window.setInterval(function(){createStorage()}, 5000);
elemDollar = document.getElementById("dollar");
elemDollar.onclick = addDollar;
elemSave = document.getElementById("save_button");
elemSave.onclick = createStorage;
elemWorker = document.getElementById("worker_button");
elemWorker.onclick = addWorker;
elemBusinessman = document.getElementById("businessman_button");
elemBusinessman.onclick = addBusinessman;
elemUpgrade_worker = document.getElementById("one");
elemUpgrade_worker.onclick = addUpgrade_worker;
