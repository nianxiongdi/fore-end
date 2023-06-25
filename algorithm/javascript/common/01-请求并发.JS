const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3',
    // 添加更多的请求 URL
  ];
  const maxNum = 3; // 最大并发数为 3
  
  multiRequest(urls, maxNum)
    .then((results) => {
      console.log('所有请求完成');
      console.log(results);
      // 处理请求结果
    })
    .catch((error) => {
      console.error('请求出错', error);
    });
  



function multiRequest() {

    function next() {

    }

}