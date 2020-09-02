//lets produce the same result as per synchw.js but you need to use asynchronous method
//fs.readfile
//fs.appenfile 
// use example from documentation to help : https://nodejs.org/api/fs.html
var fs =require("fs");

console.log("Begin reading file");
var data = fs.readFile("input.txt")
fs.readFile('input.txt',function(err, data){
	//masa utk open file akan ambil masa sekitar 0.0000001 secon d
	if(err)return console.error(err);   
	console.log(data.toString());
});
//console.log(data.toString());
console.log("End reading File");
console.log("Begin appending file")
fs.appendFile("input.txt","I am appending a file okay?");
console.log("End appending file");
console.log("Begin re-reading file");
var anotherData = fs.readFile("input.txt");
fs.readFile('input.txt',function(err, anotherData){
	//masa utk open file akan ambil masa sekitar 0.0000001 secon d
	if(err)return console.error(err);   
	console.log(anotherData.toString());
});
//console.log(anotherData.toString()); // ada beza anotherData.toString dengan data.toString
console.log("Finish re-reading files");