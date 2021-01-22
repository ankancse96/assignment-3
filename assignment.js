// https://github.com/ankancse96/assignment-3


// kilometerToMeter convert

function kilometerToMeter(km){
    var meter= 1000*km;
    if(km < 0){
        return 'error';
    }
     return meter;
}

//  budgetCalculator solution

function budgetCalculator(watch,mobile,laptop){
    var watch= 50*5;
    var mobile= 100*3;
    var laptop= 500*2;
    var totalcost = watch+mobile+laptop;
    return totalcost;   
}

//  hotelCost solution

function hotelCost(day){
    var cost=0;
    if(day <= 10){
    cost= day*100;
    }
    else if(day <= 20){
    var first=10*100;
    var remaininig= day - 10;
    var second= remaininig * 80;
    cost = first + second;
    }
    else{
    var first=10*100;
    var second= 10 * 80;
    var remaininig= day - 20;
    var third= remaininig * 50;
    cost = first + second + third;
    }
        return cost;
  }

//  megaFriend solution

function megaFriend(arr){

    var size = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > size) {
        var size = arr[i].length;
        longest = arr[i];
        
      } else if(arr[i] == ''){
        return'error name';
      }
      
    }
    return longest;
  }