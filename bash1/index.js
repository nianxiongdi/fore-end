const { exec } = require('child_process');
console.log(11)
// 运行 npm run prod 命令
exec('npm run prod1 2>&1', (error, stdout, stderr) => {
    console.log('error', error)

  if (error) {
    console.error('npm run prod failed');
    console.error(stderr);
  } else {
    console.log('npm run prod succeeded');
    console.log(stdout);
  }
});

// "test": "echo \"Error: no test specified\" && exit 1"