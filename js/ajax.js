function sendData(game)
{
	$.ajax({
		type: "POST",
		url: 'sendData.php',
		data: game,
		success: function (data){console.log(data)}
	});
}

function getData()
{
	alert('salut');
	$.ajax({
		type: "POST",
		url: 'getData.php',
		data: null,
		success: function (data){alert(data)}
	});
}