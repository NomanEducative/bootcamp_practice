// Exercise 1

var student1={"name":"Mary","age":10}
var student2={"name":"Barbara","age":11}
var student3={"name":"David","age":12}
var student4={"name":"Alex","age":11}
var students = [student1,student2,student3,student4];



//Write a function that returns an array of grade averages

var getAverages = function(students){
    var averages = [];
    //write your code here
    for(let i=0;i<students.length;i++){
      let arr=students[i]['grades'];
      ave=0;
      for(let j=0;j<arr.length;j++){
        ave+=arr[j];
      }
      averages[i]=ave/arr.length;
    }
    return averages;
  }