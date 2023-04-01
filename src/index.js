var http = require("http");
const port=8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
 let url=req.url
  if(url=="/welcome"){
      res.writeHead(200,{"Content-type":"text/plain"})
      res.write("Welcome to Dominos!");
      res.end();
  } else if(url=="/contact"){
    res.writeHead(200,{"Content-type":"application/json"})
    res.write(
        JSON.stringify( {  
            phone: '18602100000', 
                  email: 'guestcaredominos@jublfood.com' 
            })
        
        );
        res.end();
  }else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.write(`<h1>404, Page does not exist</h1>`)
    res.end()
  }
}
httpServer.listen(`${port}`,()=>{console.log(`The server is up at port ${port}`)});
module.exports = httpServer;