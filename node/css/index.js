






const http=require('http');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR ="./"
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url);
  let extname = path.extname(filePath);
  let contentType = mimeTypes[extname] || 'application/octet-stream';

  let start = Date.now()
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(PUBLIC_DIR, '404.html'), (error, notFoundContent) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(notFoundContent, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      while(Date.now() - start < 5000) {

      }
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});



server.listen(9000,()=>{
  console.log('服务已启动...');
});
// listen有两个参数，第一个是端口号，第二个是回调函数，当服务启动成功后执行