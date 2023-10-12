
#!/usr/bin/env bash

set -e

# 此命令会成功
echo "Command 1"

# 模拟失败的命令
# false


# node index.js


npm run prod

# false

# echo $?

# 不会执行到这里，因为上一个命令失败
echo "Command 2"
