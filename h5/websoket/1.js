
var WebSocketServer = require('websocket').server;
var http = require('http');
 

// 创建服务器
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});


// 监听8080端口
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
 
// 创建
wsServer = new WebSocketServer({
    httpServer: server,
});
 
function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
 

var clients = [];


// websocket 建立连接
wsServer.on('request', function(request) {
    // if (!originIsAllowed(request.origin)) {
    //   // Make sure we only accept requests from an allowed origin
    //   request.reject();
    //   console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    //   return;
    // }
    
    // setInterval(() => {
    //     connection.sendUTF('hello world!' + new Date());
    // }, 1000);

    //监听客户端发信息


    // 当前的连接
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');
    
    //把连接添加到终端
    clients.push(connection);   

    // 监听当前连接 发生message的时候
    connection.on('message', function(message) {
        // 前端发生过来 数据类型
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            // 给每一个连接发生数据
            clients.forEach(function(item) {
                // 发生数据
                item.sendUTF(message.utf8Data);
            });
            
            // 发送数据
            // connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') { //二进制
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        // 获取当前索引
        var index = clients.indexOf(connection);
        // 删除
        clients.splice(index, 1);
    });
});




