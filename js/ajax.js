/*function initXHR()
{
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) 
	{
		if (window.ActiveXObject) {
			try 
			{
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} 
			catch(e) 
			{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} 
		else 
		{
			xhr = new XMLHttpRequest(); 
		}
	} 
	else 
	{
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return;
	}
}

var xhr = initXHR();
xhr.open('POST', 'gereData.php', true);
xhr.send("var1=lol&var2=bite");*/

function sendData(game)
{
	$.ajax({
		type: "POST",
		url: 'gereData.php',
		data: game,
		success: function (data){console.log(data)}
	});
}