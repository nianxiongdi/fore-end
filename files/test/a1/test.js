var j = 0;

for(let i=0; i<2;i++,j++) {
    setTimeout(function() {
      console.log(i,j);
    }, 1000)
} 