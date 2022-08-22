//Write a function (named arraySum) that takes an array as an argument and returns the sum of all the items. Assume your array’s values are all Numbers.

var arraySum = function(array){
    var sum = 0;
    /* write your code here */
    for(let i=0;i<array.length;i++){
      sum+=array[i]
    }
    return sum;
  }


  //Given an array of arrays, each of which contains a set of numbers, write a function that returns an array where each item is the sum of all the items in the sub-array

  var arraySum = function(numbers) {
    var sums = [];
    //write your code here 
    for(let i=0;i<numbers.length;i++){
      let sum=0;
      for(let j=0;j<numbers[i].length;j++){
        sum+=numbers[i][j];
      }
      sums[i]=sum;
    }
    return sums;
  }