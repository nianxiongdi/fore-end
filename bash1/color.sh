#!/bin/bash

# 设置终端文本颜色
RED="\033[31m"
GREEN="\033[32m"
YELLOW="\033[33m"
RESET="\033[0m"  # 重置颜色

# 设置变量的值
error_message="${RED}Error: Something went wrong!${RESET}"
success_message="${GREEN}Success: Operation completed.${RESET}"
warning_message="${YELLOW}Warning: Be cautious.${RESET}"

# 输出变量的值，颜色会应用到输出文本
echo -e $error_message
echo -e $success_message
echo -e $warning_message
