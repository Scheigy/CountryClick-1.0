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
	$.ajax({
		type: "POST",
		url: 'getData.php',
		data: null,
		success: function (data){setObject(data)}
	});
}