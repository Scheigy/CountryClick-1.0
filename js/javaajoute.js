// JavaScript Document

/// A ajouter dans le JS principal //////

////////Investissement///////////

/*function	investMoney(money)
{
	var	random = 0;

	random = Math.floor((Math.random() * 20) + 1);
	money = parseInt(money * (random / 10));
	document.getElementById('pop_up').style.display = 'block';
	document.getElementById('pop_up_p').innerHTML = '<span class="glyphicon glyphicon-info-sign"></span> Vous avez gagné ' + parseInt(money) + ' $! Félicitations!';
	return (parseInt(money));
}



/////////Event d'augmentation de production///////
{
//	var nb_building = nb_building = game.worker + game.businessman + game.supermarket + game.factory + game.bank + game.mine + game.president + game.antimatter;
	var random = 0;
	nb_building = 5000;

	if (nb_building > 300)
	{
		random = Math.floor((Math.random() * (10800 * time)) + 1);
		if (random == 1)
		{
		timer_prod[0] = 300;
		timer_prod[1] = random = ((Math.floor((Math.random() * 100) + 1)) + 110) / 100;
		document.getElementById('pop_up').style.display = 'block';
		document.getElementById('pop_up_p').innerHTML = '<span class="glyphicon glyphicon-info-sign"></span> Ah , vous êtes dans une bonne période , votre production est augmentée de ' + (random * 100) + ' % pendant 5 minutes';
		return (random);
		}
		if (timer_prod[0] > 0)
		{
			timer_prod[0] -= (1 / time);
			return (timer_prod[1]);
		}
	}
	return (1);
}
*/

///////Event séisme ///////

function	check_building(nb)
{
	if (nb == 0)
		return ('worker');
	else if (nb == 1)
		return ('businessman');
	else if (nb == 2)
		return ('supermarket');
	else if (nb == 3)
		return ('factory');
	else if (nb == 4)
		return ('bank');
	else if (nb == 5)
		return ('mine');
	else if (nb == 6)
		return ('president');
	else if (nb == 7)
		return ('antimatter');
}

function	earthquake()
{
//	var nb_building = nb_building = game.worker + game.businessman + game.supermarket + game.factory + game.bank + game.mine + game.president + game.antimatter;
	nb_building = 5000;
	var random = 0;

/*	if (nb_building > 1000)
	{
		random = Math.floor((Math.random() * (1 * time)) + 1);
		if (random == 1)
		 {
		 	random = Math.floor((Math.random() * 7) + 1);
		 	alert(game.check_building(random));
		 }
	}
*/
alert(game.check_building(1));
}

game = new Object();
game.worker = 10;
game.businessman = 20;
game.supermarket = 30;
game.factory = 40;
game.bank = 50;
game.mine = 60;
game.president = 70;
game.antimatter = 80;

document.getElementById('test').innerHTML = 'Salut';
setInterval(function(){earthquake();}, 100);
