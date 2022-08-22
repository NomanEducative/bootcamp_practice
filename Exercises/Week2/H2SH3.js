//write a function (called rangeSum) that returns the sum of all the numbers from 0 to number

var rangeSum = function(number) {
    var sum = 0;
    /* write your code here */
    var flag=number<0;
    number=Math.abs(number);
    console.log(number)
    for(let i=0;i<=number;i++){
      sum+=i;
    }
    console.log(flag)
    flag?sum*=(-1):sum
    return sum;
  }