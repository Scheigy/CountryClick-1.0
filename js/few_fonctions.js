var bool = false;
document.getElementById("exButton").onclick = function(){
	if (bool == false)
	{
		bool = true;
		$('#header').animate({ 
			marginTop: "-160px",
		}, 800 ).fadeOut(400);
	}
	else
	{
		bool = false;
		$('#header').fadeIn(400).animate({ 
			marginTop: "0",
		}, 800 );
	}
}

function closePop_up(name)
{
	var popUp = document.getElementById(name);
	$(popUp).fadeOut(300);
}

function displayPop_up(name)
{
	var popUp = document.getElementById(name);
	popUp.style.opacity = "0";
	popUp.style.display = "block";
	$(popUp).transition({ opacity: 1 });
}

function appearSell(which)
{
	var div = "sell" + which;
	document.getElementById(div).style.display = "block";
}

function disappearSell(which)
{
	var div = "sell" + which;
	document.getElementById(div).style.display = "none";	
}