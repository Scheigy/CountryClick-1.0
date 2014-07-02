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