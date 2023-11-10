#!/bin/bash

# 有时，脚本需要在执行过程中，由用户提供一部分数据，这时可以使用read命令。
# 它将用户的输入存入一个变量，方便后面的代码使用。用户按下回车键，就表示输入结束。


# echo Please, enter your firstname and lastname
# read FN LN
# echo "Hi! $LN, $FN !"


filename='/etc/hosts'

while read myline
do
  echo "$myline"
done < $filename
