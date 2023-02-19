// 与 GallopLeft 完全一样，除了如果key已经存在于[base, base + length)中，
// 则查找紧邻最右边相等值右侧的位置。

function GallopRight(sortState, array, key, base, length, hint) {
    const workArray = sortState.workArray;
  
    let lastOfs = 0;
    let offset = 1;
  
    const baseHintElement = array[base + hint];
    let order = sortState.Compare(key, baseHintElement);
  
    if (order < 0) {
      const maxOfs = hint + 1;
      while (offset < maxOfs) {
        const offsetElement = array[base + hint - offset];
        order = sortState.Compare(key, offsetElement);
  
        if (order >= 0) {
          break;
        }
  
        lastOfs = offset;
        offset = (offset << 1) + 1;
        if (offset <= 0) {
          offset = maxOfs;
        }
      }
  
      if (offset > maxOfs) {
        offset = maxOfs;
      }
  
      const tmp = lastOfs;
      lastOfs = hint - offset;
      offset = hint - tmp;
    } else {
      const maxOfs = length - hint;
  
      while (offset < maxOfs) {
        const offsetElement = array[base + hint + offset];
        order = sortState.Compare(key, offsetElement);
        if (order < 0) {
          break;
        }
  
        lastOfs = offset;
        offset = (offset << 1) + 1;
        if (offset <= 0) {
          offset = maxOfs;
        }
      }
  
      if (offset > maxOfs) {
        offset = maxOfs;
      }
  
      lastOfs = lastOfs + hint;
      offset = offset + hint;
    }
  
    lastOfs++;
    while (lastOfs < offset) {
      const m = lastOfs + ((offset - lastOfs) >> 1);
  
      order = sortState.Compare(key, array[base + m]);
  
      if (order < 0) {
        // 左区间
        offset = m;
      } else {
        lastOfs = m + 1;
      }
    }
  
    // // invariant(offset === 0, "wrong offset");
    console.log(offset)
    return offset;
}


GallopRight({
    Compare: (a, b) => a -b,
}, [
    1,3,5,7, 2,4,6,8
], 2, 0, 4, 0);