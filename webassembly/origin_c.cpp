// Following is a function that finds nth fibonacci written in C++
int fib(int n)
{
   if (n <= 1)
      return n;
   return fib(n-1) + fib(n-2);
}

// 用https://mbebenita.github.io/WasmExplorer/ 编译代码