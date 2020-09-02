function getData(){
	var data; $.get("https://www.randomuser.me/api",
	function(response){ data = response;});
	return data;}

	var data = getData();

	console.log("The data is " + data);