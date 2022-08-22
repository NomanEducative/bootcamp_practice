//Write a function that indicates whether or not to sell a stock. Use conditional statements to return a Boolean value that:
//      returns true if stockPrice is greater than or equal to sellPrice
//      returns false if stockPrice is less than sellPrice

var sellStock = function(stockPrice, sellPrice){
    //write your code here.
    if(stockPrice>=sellPrice){
      return true;
    }
    else
    {
      return false;
    }
  }