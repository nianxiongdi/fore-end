

let  next = []

 

function get_next(T, next)
{
    let k = -1;
    let j = 0;

    next[j] = k;

    while (j < T.length)
    {
        if ( (k == -1) || (T[j] == T[k]) ) //注意等号是==，而不是=
        {
            ++k; // 注意是先加后使用
            ++j;
            next[j] = k;
        }
        else
        {
            k = next[k]; 
        }
    }
}

function index_KMP(S, T, pos)
{
    let i;
    let j;

    i = pos;
    j = 0; 

    while ( (i < strlen(S)) && (j < strlen(T)) )
    {
        /* j = -1 表示next[0], 说明失配处在模式串T的第0个字符。所以这里特殊处理，然后令i+1和j+1。*/
        if ( (j == -1)  || S[i] == T[j])
        {
            i++;
            j++;
        }
        else
        {
            j = next[j];
        }
    }

    if (strlen(T) == j)
    {
        return i - strlen(T);
    }
    else
    {
        return -1;
    }
}

 
let  s = "ababcabcacbab";
let t  = "ababcabcacbab";

console.log(get_next(t, next));

console.log(next);