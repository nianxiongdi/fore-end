/**
* Timsort 排序算法
* @param {Function} comp 比较函数
*/
Array.prototype.timsort = function (comp) {
    // 被排序的数组
    const global_a = this;
    // 用于判断数组长度计算 minRun
    const MIN_MERGE = 64;
    // 有效区间合并, 连续插入触发批量插入
    const MIN_GALLOP = 7;
    // 每个分区的起始索引
    let runBase = [];
    // 每个分区的长度
    let runLen = [];
    // 保存分区的栈的长度
    let stackSize = 0;
    // 比较函数
    let compare = comp;
    
    // 将 this 数组从第一项(索引为0)至最后一项, 使用 compare 函数进行排序
    sort(this, 0, this.length, compare);
    
    /**
    * 排序函数
    * @desc 区间为左闭右开
    * @param {Array}    arr       被排序的原数组
    * @param {number}   fromIndex 起始位置的索引
    * @param {number}   toIndex   终止位置的索引
    * @param {Function} compare   比较函数
    */
    function sort(arr, fromIndex, toIndex, compare) {
        // 检查 compare 函数
        if (typeof compare !== 'function')
            throw new Error('Compare is not a function.');
        
        // 初始化分区的数据
        stackSize = 0;
        runBase = [];
        runLen = [];
        
        // 检查排序范围
        rangeCheck(arr.length, fromIndex, toIndex);
        
        // 需要排序的元素个数
        let nRemaining = toIndex - fromIndex;
        // 如果数组长度小于2, 那么无需任何排序操作
        if (nRemaining < 2) return;
        
        // 数组元素小于64, 认为数组较短，直接采用二分插入排序
        if (nRemaining < MIN_RUN) {
            // 获取数组第一个run的长度
            let initRunLen = countRunAndMakeAscending(arr, fromIndex, toIndex, compare);
            // 对这个较短的数组使用, 二分插入排序
            binarySort(arr, fromIndex, toIndex, toIndex + initRunLen, compare);
            return;
        }
        
        // 获取最小分区长度
        let minRun = minRunLength(nRemaining);
        
        do {
            // 获取一个run的长度
            let runLenVar = countRunAndMakeAscending(arr, fromIndex, toIndex, compare);
            
            // 若第一个run的长度小于minRun
            if (runLenVar < minRun) {
                // 获取未合并的长度与minRun的较小者
                let force = nRemaining <= minRun ? nRemaining : minRun;
                
                // 这个run后的元素使用二分插入排序进行合并, 使run的长度达到minRun
                binarySort(arr, fromIndex, fromIndex + force, fromIndex + runLenVar, compare);
                // 记录这个run的新长度
                runLenVar = force;
            }
            
            // 将分区的信息保存起来
            pushRun(fromIndex, runLenVar);
            // 调整分区栈, 使其满足条件
            mergeCollapse();
            
            // 将合并的开始位置移动到这个分区的后面
            fromIndex += runLenVar;
            // 更新数组剩下未合并的长度
            nRemaining -= runLenVar;
        } while (nRemaining != 0);
        
        // 合并分区栈中所有分区, 完成排序
        mergeForceCollapse();
    }
    
    /**
    * 合并分区栈中所有分区, 完成最终排序
    */
    function mergeForceCollapse() {
        while (stackSize > 1) {
            let n = stackSize - 2;
            if (n > 0 && runLen[n - 1] < runLen[n + 1]) n--;
            mergeAt(n);
        }
    }
    
    /**
    * 合并两个相邻分区
    * @param {number} i 相邻分区中前者的索引
    */
    function mergeAt(i) {
        // 两分区在源数组中的索引及长度
        let base1 = runBase[i];
        let len1 = runLen[i];
        let base2 = runBase[i + 1];
        let len2 = runLen[i + 1];
        
        // 合并后, 前分区长度变为两分区长度之和
        runLen[i] = len1 + len2;
        
        // 若栈顶分区未参与合并, 删除栈顶第二个分区
        if (i == stackSize - 3) {
            runBase[i + 1] = runBase[i + 2];
            runLen[i + 1] = runLen[i + 2];
        }
        // 分区栈长度减一
        stackSize--;
        
        // 后分区首个元素, 在前分区中的位置, 这个位置是基于前分区起始位置的偏移量
        // 为了保证算法的稳定性, 这个位置需要尽量靠右
        // 具体原理下文讲解
        let k = gallopRight(global_a[base2], global_a, base1, len1, 0, compare);
        
        // 将合并区间裁掉无需比较的部分
        base1 += k;
        len1 -= k;
        
        // 若裁掉后前分区长度为0, 说明后分区首个元素在前分区末尾元素之后
        // 无需合并, 直接完成
        if (len1 === 0) return;
        
        // 前分区末尾元素, 在后分区中位置, 这个位置是基于后分区起始位置的偏移量
        // 为了保证算法的稳定性, 这个位置需要尽量靠左
        len2 = gallopLeft(global_a[base1 + len1 - 1], global_a, base2, len2, len2 - 1, compare);
        // 若前分区末尾元素小于后分区的首个元素, 无需合并, 直接完成
        if (len2 === 0) return;
        
        // 比较有效区间长度, 将较长者并入较短者
        // 原理下文讲解
        if (len1 <= len2)
            mergeLo(base1, len1, base2, len2);
        else
            mergeHi(base1, len1, base2, len2);
    }
    
        /**
    * 合并有效区间
    * @desc 区间1的首个元素 必须大于区间2首个元素, 区间1的末尾元素 必须大于区间2的所有元素
    *       此方法要求分区1的长度小于分区2, 否则应调用孪生方法 mergeHi
    * @param {number} base1 区间1的索引
    * @param {number} len1  区间1的长度
    * @param {number} base2 区间2的索引
    * @param {number} len2  区间2的长度
    */
    function mergeLo(base1, len1, base2, len2) {
        // 局部变量提升性能
        let a = global_a;
        // 缓存区间1内容
        let tmp = a.slice(base1, base1 + len1);
        
        // 缓存区间1需要比较的元素索引
        let cursor1 = 0;
        // 区间2需要比较的元素索引
        let cursor2 = base2;
        // 区间1的插入覆盖点
        let dest = base1;
        
        // 将区间2首个元素作为区间1的首个元素
        // 区间2首个元素必然小于区间1的首个元素, 参考查找有效区间原理
        a[dest++] = a[cursor2++];
        
        // 若区间2只有一个元素
        if (--len2 === 0) {
            // 将区间1剩余部分拼, 完成合并
            arraycopy(tmp, cursor1, a, dest, len1);
            return;
        }
        
        // 若区间1的长度为1, 直接将区间2整体放在区间1之前, 完成合并
        if (len1 == 1) {
            arraycopy(a, cursor2, a, dest, len2);
            a[dest + len2] = tmp[cursor1];
            return;
        }
        
        // 局部变量提高性能
        let c = compare;
        let minGallop = MIN_GALLOP;
        
        outer:
        while (true) {
            let count1 = 0;
            let count2 = 0;
            
            do {
                // 比较缓存区间1和区间2, 将较小者以覆盖方式放入区间1插入位置
                // 并记录当前插入区间连续插入的次数, 当某个区间长度为1时, 结束比较
                if (compare(a[cursor2], tmp[cursor1]) < 0) {
                    a[dest++] = a[cursor2++];
                    count2++;
                    count1 = 0;
                    
                    if (--len2 == 0) break outer;
                }
                else {
                    a[dest++] = tmp[cursor1++];
                    count1++;
                    count2 = 0;
                    
                    if (--len1 == 1) break outer;
                }
                // 每次执行会有一个被清0, 所以按位或就是取其中有值的 count
            } while ((count1 | count2) < minGallop);
            
            
            // 当一方连续插入一定次数时, 改用倍增搜寻法寻找位置
            // 然后整段插入, 可能会出现性能的巨大提升
            do {
                // 区间2当前的首项在缓存区间1剩余部分中靠右的位置
                count1 = gallopRight(a[cursor2], tmp, cursor1, len1, 0, c);
                
                // 缓存区间1这个位置之前的部分都小于区间2当前的首项
                // 将这部分一次性插入
                if (count1 != 0) {
                    // 批量插入
                    arraycopy(tmp, cursor1, a, dest, count1);
                    
                    dest += count1;
                    cursor1 += count1;
                    len1 -= count1;
                    
                    // 区间1长度小于2时, 结束比较
                    if (len1 <= 1) break outer;
                }
                
                // 由于倍增搜寻的特性, 插入结束后区间2的首项必然小于缓存区间1当前首项
                // 直接再插入区间2的首项
                a[dest++] = a[cursor2++];
                if (--len2 == 0) break outer;
                
                // 同理, 缓存区间1当前的首项在区间2剩余部分中靠左的位置
                count2 = gallopLeft(tmp[cursor1], a, cursor2, len2, 0, c);
                
                // 区间2这个位置之前的部分都小于缓存区间1当前的首项
                // 将这部分一次性插入
                if (count2 != 0) {
                    // 批量插入
                    arraycopy(a, cursor2, a, dest, count2);
                    
                    dest += count2;
                    cursor2 += count2;
                    len2 -= count2;
                    
                    // 若区间2为空, 退出比较
                    if (len2 == 0) break outer;
                }
                
                // 由于倍增搜寻的特性, 插入结束后缓存区间1的首项必然小于区间2当前首项
                // 直接再插入缓存区间1的首项
                a[dest++] = tmp[cursor1++];
                // 若缓存区间1为空, 退出比较
                if (--len1 == 1) break outer;
                
                // 随着未插入的元素减少, 触发批量插入的条件应该减小
                minGallop--;
                // 如果一次批量插入较长, 继续尝试批量插入
            } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);
            
            // 使用批量插入可能导致单个插入受到影响
            if (minGallop < 0) minGallop = 0;
            minGallop += 2;
        }
        
        // 回写字段
        this.minGallop = minGallop < 1 ? 1 : minGallop;
        
        // 若缓存区间1的剩余长度为1, 这个值必然大于区间2的所有元素
        if (len1 == 1) {
            arraycopy(a, cursor2, a, dest, len2);
            a[dest + len2] = tmp[cursor1];
        }
        
        // 若缓存区间1为空, 说明缓存区间1的末尾元素没有大于区间2的所有元素, 排序逻辑错误
        else if (len1 == 0) {
            throw new Error("参数异常: 请传入合法的排序方法");
        }
        // 其余情况说明区间2已经完成合并, 将缓存区间1的剩余部分拼接
        else {
            arraycopy(tmp, cursor1, a, dest, len1);
        }
    }
    
    /**
    * 合并有效区间
    * @desc 与 mergeLo 方法同理
    *       此方法要求分区1的长度不大于分区2, 否则应调 mergeLo
    * @param {number} base1 区间1的索引
    * @param {number} len1  区间1的长度
    * @param {number} base2 区间2的索引
    * @param {number} len2  区间2的长度
    */
    function mergeHi(base1, len1, base2, len2) {
        var a = global_a;
        var tmp = a.slice(base2, base2 + len2);
        
        var cursor1 = base1 + len1 - 1;
        var cursor2 = len2 - 1;
        var dest = base2 + len2 - 1;
        
        a[dest--] = a[cursor1--];
        if (--len1 == 0) {
            arraycopy(tmp, 0, a, dest - (len2 - 1), len2);
            return;
        }
        if (len2 == 1) {
            dest -= len1;
            cursor1 -= len1;
            arraycopy(a, cursor1 + 1, a, dest + 1, len1);
            a[dest] = tmp[cursor2];
            return;
        }
        
        var c = compare;
        var minGallop = MIN_GALLOP;
        outer:
        while (true) {
            var count1 = 0;
            var count2 = 0;
            
            do {
                if (compare(tmp[cursor2], a[cursor1]) < 0) {
                    a[dest--] = a[cursor1--];
                    count1++;
                    count2 = 0;

                    if (--len1 == 0) break outer;
                } else {
                    a[dest--] = tmp[cursor2--];
                    count2++;
                    count1 = 0;

                    if (--len2 == 1) break outer;
                }
            } while ((count1 | count2) < minGallop);
            
            do {
                count1 = len1 - gallopRight(tmp[cursor2], a, base1, len1, len1 - 1, c);
                if (count1 != 0) {
                    dest -= count1;
                    cursor1 -= count1;
                    len1 -= count1;
                    arraycopy(a, cursor1 + 1, a, dest + 1, count1);
                    if (len1 == 0) break outer;
                }
                a[dest--] = tmp[cursor2--];
                if (--len2 == 1) break outer;
                
                count2 = len2 - gallopLeft(a[cursor1], tmp, 0, len2, len2 - 1, c);
                if (count2 != 0) {
                    dest -= count2;
                    cursor2 -= count2;
                    len2 -= count2;
                    arraycopy(tmp, cursor2 + 1, a, dest + 1, count2);
                    if (len2 <= 1)
                        break outer;
                }

                a[dest--] = a[cursor1--];
                if (--len1 == 0) break outer;
                minGallop--;
            } while (count1 >= MIN_GALLOP | count2 >= MIN_GALLOP);

            if (minGallop < 0) minGallop = 0;
            minGallop += 2;
        }
        this.minGallop = minGallop < 1 ? 1 : minGallop;
        
        if (len2 == 1) {
            dest -= len1;
            cursor1 -= len1;
            arraycopy(a, cursor1 + 1, a, dest + 1, len1);
            a[dest] = tmp[cursor2];
        } else if (len2 == 0) {
            throw new Error("IllegalArgumentException. Comparison method violates its general contract!");
        } else {
            arraycopy(tmp, 0, a, dest - (len2 - 1), len2);
        }
    }
    
    /**
    * 倍增搜寻法, 结果靠右
    * @desc 为了算法的稳定性, 若出现相等的元素, 则应该取该元素右侧位置
    * @param {number}   key     元素值
    * @param {Array}    arr     被搜索的数组
    * @param {number}   base    查找范围起始位置
    * @param {number}   len     查找范围长度
    * @param {number}   hint    查找起始位置
    * @param {Function} compare 比较函数
    */
    function gallopRight(key, arr, base, len, hint, compare) {
        // 本趟搜寻的区间范围, 这个范围是基于hint的偏移表示的
        let ofs = 1;
        let lastOfs = 0;
        
        // 目标位置在查找起始位置之前
        if (compare(key, arr[base + hint]) < 0) {
            // 最大的偏移距离, 保证查找不会超出范围的起始位置
            let maxOfs = hint + 1;
            // 在查找范围内, 由起始位置向前搜寻
            while (ofs < maxOfs && compare(key, arr[base + hint - ofs]) < 0) {
                // 本趟区间末尾位置, 基于hint偏移的距离
                lastOfs = ofs;
                // 本趟区间起始位置, 基于hint偏移的距离, 以2的整数次幂为步长
                ofs = (ofs << 1) + 1;
                // 若位运算导致二进制溢出了, 就将ofs设置为查找的边界
                if (ofs <= 0) ofs = maxOfs;
            }
            // 若查找后目标区间超出查找范围左侧, 将超出部分去除
            if (ofs > maxOfs) ofs = maxOfs;
            
            // 将目标区间的参考系, 由查找起始位置改为查找范围的起始位置
            // 并使ofs在左侧, lastOfs在右侧
            let tmp = lastOfs;
            lastOfs = hint - ofs;
            ofs = hint - tmp;
        }
        // 目标位置在查找起始位置之后
        else {
            // 最大偏移距离, 保证查找不会超出范围的末尾位置
            let maxOfs = len - hint;
            // 在查找范围内, 由起始位置向后搜寻
            while (ofs < maxOfs && compare(key, arr[base + hint + ofs]) >= 0) {
                // 本趟区间起始位置, 基于hint偏移的距离
                lastOfs = ofs;
                // 本趟区间结束位置, 基于hint偏移的距离, 以2的整数次幂为步长
                ofs = (ofs << 1) + 1;
                // 若位运算导致二进制溢出了, 就将ofs设置为查找的边界
                if (ofs <= 0) ofs = maxOfs;
            }
            // 若查找后目标区间超出查找范围右侧, 将超出部分去除
            if (ofs > maxOfs) ofs = maxOfs;
            
            // 将目标区间的参考系, 由查找起始位置改为查找范围的起始位置
            // 并使ofs在左侧, lastOfs在右侧
            lastOfs += hint;
            ofs += hint;
        }
        
        // 将目标区间变为左闭右开
        lastOfs++;
        
        // 在倍增搜寻的区间二分查找
        while (lastOfs < ofs) {
            let m = lastOfs + ((ofs - lastOfs) >>> 1);
            if (compare(key, arr[base + m]) < 0)
                ofs = m;
            else
                lastOfs = m + 1;
        }
        // 目标位置, 基于查找范围起始位置的偏移距离
        return ofs;
    }
    
    /**
    * 倍增搜寻法, 结果靠左
    * @desc 为了算法的稳定性, 若出现相等的元素, 则应该取该元素左侧位置
    *       原理同 gallopRight
    * @param {number}   key     元素值
    * @param {Array}    arr     被搜索的数组
    * @param {number}   base    查找范围起始位置
    * @param {number}   len     查找范围长度
    * @param {number}   hint    查找起始位置
    * @param {Function} compare 比较函数
    */
    function gallopLeft(key, a, base, len, hint, compare) {
        let lastOfs = 0;
        let ofs = 1;

        if (compare(key, a[base + hint]) > 0) {
            let maxOfs = len - hint;
            while (ofs < maxOfs && compare(key, a[base + hint + ofs]) > 0) {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0) ofs = maxOfs;
            }
            if (ofs > maxOfs) ofs = maxOfs;
            
            lastOfs += hint;
            ofs += hint;
        }
        else {
            var maxOfs = hint + 1;
            while (ofs < maxOfs && compare(key, a[base + hint - ofs]) <= 0) {
                lastOfs = ofs;
                ofs = (ofs << 1) + 1;
                if (ofs <= 0) ofs = maxOfs;
            }
            if (ofs > maxOfs) ofs = maxOfs;

            var tmp = lastOfs;
            lastOfs = hint - ofs;
            ofs = hint - tmp;
        }
        
        lastOfs++;
        while (lastOfs < ofs) {
            var m = lastOfs + ((ofs - lastOfs) >>> 1);
            if (compare(key, a[base + m]) > 0)
                lastOfs = m + 1;
            else
                ofs = m;
        }
        return ofs;
    }
    
    /**
    * 调整分区栈, 使其形成阶梯式
    */
    function mergeCollapse() {
        while (stackSize > 1) {
            // 分区栈顶第二个分区
            let n = stackSize - 2;
            
            // 栈顶第三个分区长度 不大于 站点两个分区的长度和
            if (n > 0 && runLen[n - 1] <= runLen[n] + runLen[n + 1]) {
                // 选择相邻分区长度较小者
                if (runLen[n - 1] < runLen[n + 1]) n--;
                // 合并索引为n和n+1的分区, 合并操作下文讲解
            }
            // 栈顶分区长度大于栈顶第二分区长度
            else if (runLen[n] <= runLen[n + 1]) {
                // 合并索引为n和n+1的分区, 合并操作下文讲解
            }
            else {
                break;
            }
        }
    }
    
    /**
    * 保存分区信息
    * @param {number} runBaseArg 分区起始索引
    * @param {number} runLenArg  分区长度
    */
    function pushRun(runBaseArg, runLenArg) {
        // 存起始索引
        runBase[stackSize] = runBaseArg;
        // 存长度
        runLen[stackSize] = runLenArg;
        // 分区数量
        stackSize++;
    }
    
    /**
    * 计算最小分区长度minRun
    * @param {number} len 需排序长度
    * @return minRun
    */
    function minRunLength(len) {
        // 记录其余位是否有标志
        let r = 0;
        
        while (len >= MIN_MERGE) {
            // 若存在其余标志位, r为1, 否则为0
            r |= (len & 1);
            // 取前六个最高标志位
            len >>= 1;
        }
        return len + r;
    }
    
    /**
    * 二分插入排序算法
    * @desc 这是对少量元素排序的最佳算法
    *       区间左闭右开
    * @param {Array}    arr           数组
    * @param {number}   fromIndex     排序起始索引
    * @param {number}   toIndex       排序终止索引
    * @param {number}   disorderIndex 第一个run结束位置
    * @param {Function} compare       比较函数
    */
    function binarySort(arr, fromIndex, toIndex, disorderIndex, compare) {
        // 若没有可跳过的run, 则认为第一个元素就是这个run, 跳过它
        if (disorderIndex === fromIndex) disorderIndex++;
        
        for (; disorderIndex < toIndex; disorderIndex++) {
            // 插入点从run结束位置开始查找
            let pivot = arr[disorderIndex];
            // 二分查找的左右指针
            let left = fromIndex;
            let right = disorderIndex;
            
            // 二分查找插入位置
            while (left < right) {
                // 获取左右指针的中间位置, 出现小数则命中左侧
                // 位运算右移等价于除以2, 且位运算会自动忽略掉小数部分
                let mid = (left + right) >>> 1;
                
                // 若当前元素应该位于中间位置之前, 则右指针移至中间位置
                // 否则左指针移至中间位置的后一位
                compare(pivot, arr[mid]) < 0
                    ? right = mid
                : left = mid + 1;
            }
            
            // 循环结束后, 左指针就代表插入位置, 需要将这个位置到run结束的元素右移
            // 右移会自动覆盖需要插入的元素, 这时直接将该元素赋值给插入点即可
            
            // 需要右移的元素个数
            let n = disorderIndex - left;
            
            // 对只需移动1个或者2个元素的情况进行特殊处理
            switch (n) {
                case 2:
                    arr[left + 2] = arr[left + 1];
                case 1:
                    arr[left + 1] = arr[left];
                    break;
                default:
                    // 右移数组片段
                    arraycopy(arr, left, arr, left + 1, n);
            }
            
            // 右移结束, 将元素放入插入位置
            arr[left] = pivot;
        }
    }
    
    /**
    * 数组片段的拷贝
    * @param {Array}  arr         源数组
    * @param {number} arrStart    源数组拷贝起始索引
    * @param {Array}  tagArr      目标数组
    * @param {number} tagArrStart 目标数组覆盖起始索引
    * @param {number} len         拷贝长度
    */
    function arraycopy(arr, arrStart, tagArr, tagArrStart, len) {
        // 拷贝的片段
        let temp = arr.slice(arrStart, arrStart + len);
        // 目标数组指定位置放入拷贝的片段, 覆盖的方式而非插入
        while (len--) {
            tagArr[tagArrStart + len] = temp[len];
        }
    }
    
    /**
    * 数组第一个run的长度
    * @desc 若这个run是逆序的, 则翻转它
    *       为了稳定性, 逆序必须是严格的, 也就是排除相等的情况
    *       同时可以避免翻转相同的元素, 提高效率
    *       区间类型: 左闭右开
    * @param {Array}    arr       数组
    * @param {number}   fromIndex 起始索引
    * @param {number}   toIndex   终止索引
    * @param {Function} compare   比较函数
    */
    function countRunAndMakeAscending(arr, fromIndex, toIndex, compare) {
        // 需判断的元素索引
        let runHi = fromIndex + 1;
        
        // 若整个长度为1，直接返回
        if (runHi === toIndex) {
            return 1;
        }
        
        // 默认首个元素是有序的, 因此从第二个元素开始判断该有序部分是否结束
        // 将前后两项传入compare函数, 若值小于0, 则这个run是逆序的
        if (compare(arr[runHi++], arr[fromIndex]) < 0) {
            // 以逆序向后查找此run的结束位置
            while (runHi < toIndex && compare(arr[runHi], arr[runHi - 1]) < 0) {
                runHi++;
            }
            // 翻转这个逆序的run, 使其为正序
            // 区间左闭右开 因为runHi总是指向下一个待判断的元素
            reverseRange(arr, fromIndex, runHi);
        }
        // 若compare函数的值大于等于0, 则这个run是正序的
        else {
            // 以正序向后查找此run的结束位置
            while (runHi < toIndex && compare(arr[runHi], arr[runHi - 1]) >= 0) {
                runHi++;
            }
        }
        
        // 返回首个run的长度, 这个run是正序的
        return runHi - fromIndex;
    }
    
    /**
    * 翻转run
    * @desc 直接修改原数组, 降低空间复杂度
    *       区间左闭右开
    * @param {Array}  arr       目标数组
    * @param {number} fromIndex 翻转起始索引
    * @param {number} toIndex   翻转终止索引
    */
    function reverseRange(arr, fromIndex, toIndex) {
        // 终止索引前移, 变为左闭右闭区间
        toIndex--;
        
        // 依次交换首尾两项, 实现翻转
        while (fromIndex < toIndex) {
            var tmp = arr[fromIndex];
            arr[fromIndex++] = arr[toIndex];
            arr[toIndex--] = tmp;
        }
    }
    
    /**
    * 检查排序范围
    * @desc 区间类型: 左开右闭
    * @param {number} arrLen    对象数组长度
    * @param {number} fromIndex 排序起始索引
    * @param {number} toIndex   排序终止索引
    */
    function rangeCheck(arrLen, fromIndex, toIndex) {
        // 起始位置不能超过终止位置
        if (fromIndex > toIndex)
            throw new Error(`IllegalArgument fromIndex(${fromIndex}) > toIndex(${toIndex})`);
        // 起始位置的索引不能小于0
        if (fromIndex < 0)
            throw new Error(`ArrayIndexOutOfBounds ${fromIndex}`);
        // 终止位置不能超过这个数组的最后一位
        if (toIndex > arrLen)
            throw new Error(`ArrayIndexOutOfBounds ${toIndex}`);
    }
}