



## urllib
* 处理http请求，认证，重定向，cookies,超时等。


```js
//请求
var urllib = require('urllib');
 
urllib.request('http://cnodejs.org/', function (err, data, res) {
  if (err) {
    throw err; // you need to handle error
  }
  console.log(res.statusCode);
  console.log(res.headers);
  // data is Buffer instance
  console.log(data.toString());
});


```


```js
//结合co处理请求
const urllib = require('urllib');
const co = require('co');

co(function* () {
  var result = yield urllib.requestThunk('http://nodejs.org'); // 这种用法 就是厉害
  console.log('status: %s, body size: %d, headers: %j',
  result.status, result.data.length, result.headers);
});

/* 
// 内部代码
exports.requestThunk = function requestThunk(url, args) {
  return function (callback) { // urllib.requestThunk('http://nodejs.org'); 返回的是 function(callback){}函数， 然后yield再执行function(callback){}函数
    exports.requestWithCallback(url, args, function (err, data, res) {
      if (err) {
        return callback(err);
      }
      callback(null, {
        data: data,
        status: res.statusCode,
        headers: res.headers,
        res: res
      });
    });
  };
};

*/

```



```js
//创建实例请求
var httpclient = require('urllib').create();
 
httpclient.on('response', function (info) {
  error: err,
  ctx: args.ctx,
  req: {
    url: url,
    options: options,
    size: requestSize,
  },
  res: res
});
 
httpclient.request('http://nodejs.org', function (err, body) {
  console.log('body size: %d', body.length);
});
```