//Exercise 1
console.log(originalArray);
let [...clonedArray]=originalArray


//Exercise 3

let arr1=()=>new Array(10).fill(null);
let nullArray = arr1().map(arr1); 


//Exercise 5
const maxCommon=function(s,t){
    let n=s.length,m=t.length;      
var dp = Array(2).fill().map(()=>Array(m+ 1).fill(0));
    var res = 0; 
    for(var i = 1; i <= n; i++)
    {
        for(var j = 1; j <= m; j++)
        {
            if(s.charAt(i - 1) == t.charAt(j - 1))
            {
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
                if(dp[i % 2][j] > res)
                    res = dp[i % 2][j];
            }
            else dp[i % 2][j] = 0;
        }
    }
    return res;
}