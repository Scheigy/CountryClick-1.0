var bool = false;
document.getElementById("exButton").onclick = function(){
	if (bool == false)
	{
		bool = true;
		$('#header').animate({ 
			marginTop: "-140px",
		}, 800 );
	}
	else
	{
		bool = false;
		$('#header').animate({ 
			marginTop: "0",
		}, 800 );
	}
}

function closePop_up(name)
{
	var popUp = document.getElementById(name);
	$(popUp).fadeOut(600);
}

function displayPop_up(name)
{
	var popUp = document.getElementById(name);
	$(popUp).fadeIn(600);
}