#!/bin/bash

number=1




set -x
if [ $number = "1" ]; then
  echo "Number equals 1"
else
  echo "Number does not equal 1"
fi
# 脚本当中如果要关闭命令输出，可以使用set +x。
set +x
  