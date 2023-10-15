#!/bin/bash

# 定义ANSI转义序列来设置文本颜色
RED="\033[31m"     # 红色
GREEN="\033[32m"   # 绿色
CYAN="\033[36m"    # 青色
RESET="\033[0m"    # 重置颜色

# 创建带有高亮链接的文本
echo -e "Visit my ${CYAN}http://baidu.com${RESET} for more information."

 