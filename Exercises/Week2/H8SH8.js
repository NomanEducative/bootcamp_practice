//Exercise 1

// Write your function here...
let removeDuplicatesFromArray = function( arr ) {
	var s=new Set(arr); 
    var newArr=[...s];
    return newArr;
}


//Exercise 2

//Write your Code here
let Square = ( function() {
    let _width = new WeakMap();
    class Square {
      constructor( width ) {
      _width.set( this, width );
    }
    get area() {
      let width = _width.get( this );
      return width * width;
    }
  }
  return Square;
  } )();



  //Exercise 3
let union =function(set1,set2){
    return new Set([...set1, ...set2])
}
let intersection=function(set1,set2){
    return new Set([...set1].filter(element=>set2.has(element)))
}
let difference=function(set1,set2){
    return new Set([...set1].filter(element=>!set2.has(element)))
}