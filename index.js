var http = require('http');

http.createServer(function (req, res) 
{    
	res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node!');
}).listen(8080);

console.log('Server started on localhost:8080; press Ctrl-C to terminate....');

// cara nak test ni jadi ialah pi kat website and tulis localhost:8080
// result akan paparkan seperti apa yg tertera pada line 6 di atas

// what is a server?
// A server is a computer which is accessible on the network

//What is a internet?
// Interconnection of network (connection between all the computers or devices or objects)

//What is a port?
// jwpku :port can be access if given ip address through network
//a port is used to differentiate which application to open when reques is coming

//Domain NAme
// to translate the IP address which host our application or website into a human readable address. That's why 
// domain name need to buy , for easier searching by other people.

//Public IP address (http:// 54.255.165.126)-> Address to identify a computer in a 
//network x.x.x.x , 192.x.x.x(example of Private Ip address) 

//In  a server, or in a computer, I can host multiple application.. for example
//Host a website
//Online game DOTA
//stream filem - netflix
// i can have email server
// files

// 200 (written in line 5) is the standard response by server in case of success connection
// check more in client error in website developer.mozilla.org/en-US/docs/Web/HTTP/Status 
