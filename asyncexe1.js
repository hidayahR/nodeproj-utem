var fs =require("fs");
fs.readFile('input.txt',function(err, data){
	//masa utk open file akan ambil masa sekitar 0.0000001 secomd
	if(err)return console.error(err);   
	console.log(data.toString());
});

console.log("Program Ended");