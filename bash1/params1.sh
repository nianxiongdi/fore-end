
#!/usr/bin/env bash

# params.sh

# echo "for循环读取每一个参数:"

# echo "$@"

# for i in 1 2 3 4 5; do
#   echo $i
# done

# 直到用户输入了一个点（.）为止，才会跳出循环
# for ((;;))
# do
#   read var
#   echo "输入了$var"
#   if [ "$var" = "." ]; then
#     break
#   fi
# done


# for number in 1 2 3 4 5 6
# do
#   echo "number is $number"
#   # if [ "$number" = 3 ]; then
#   if [ $number = 3 ]; then
#     break
#   fi
# done


# select brand in Samsung Sony iphone symphony Walton
# do
#   echo "You have chosen $brand"
# done


echo "Which Operating System do you like?"

select os in Ubuntu LinuxMint Windows8 Windows10 WindowsXP
do
  case $os in
    "Ubuntu"|"LinuxMint")
      echo "I also use $os."
    ;;
    "Windows8" | "Windows10" | "WindowsXP")
      echo "Why don't you try Linux?"
    ;;
    *)
      echo "Invalid entry."
      break
    ;;
  esac
done


