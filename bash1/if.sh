
FILE=""  # 设置变量 FILE 为空

# 不使用双引号，可能导致意外行为
if [ -e $FILE ]; then
  echo "File exists."
else
  echo "File does not exist."
fi

# 使用双引号，可以正确处理变量为空的情况
if [ -e "$FILE" ]; then
  echo "File exists."
else
  echo "File does not exist."
fi


# if [[ ! -d "$dir_name" ]]; then
#   echo "No such directory: '$dir_name'" >&2
#   exit 1
# fi
# if ! cd "$dir_name"; then
#   echo "Cannot cd to '$dir_name'" >&2
#   exit 1
# fi
# if ! rm *; then
#   echo "File deletion failed. Check results" >&2
#   exit 1
# fi
