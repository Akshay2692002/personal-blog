const http=require('http');
const _=require('lodash');
const server=http.createServer((req,res)=>{
  
  console.log(_.random(0,20));
  res.setHeader('content-Type','text/html');
  res.write('hello ninja');
  res.end();
  
});

server.listen(3000,'localhost',()=>{
 
  console.log('waiting for the request');
});