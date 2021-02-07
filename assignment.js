//kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var moniMeter = kilometerToMeter(5);
console.log(moniMeter);
//budgetCalculator
function budgetCalculator (amountOfWatch,amountOfMobile,amountOfLaptop){
    var budget = amountOfWatch*50+amountOfMobile*100+amountOfLaptop*500;
    return budget;

}
var moniBudget = budgetCalculator(3,2,1);
console.log(moniBudget);
//hotelCost
function hotelCost(numberOfStayDay){
   var cost;
   if(numberOfStayDay<=10)
   {
    cost=numberOfStayDay*100;
     return cost;
   }
   else if(numberOfStayDay<=20)
   {
     cost=10*100+(numberOfStayDay-10)*80;
    return cost;
   }
   else
   {
     cost=10*100+20*80+(numberOfStayDay-20)*50;
    return cost;
   }
}

var moniHotelCost = hotelCost(43);
console.log(moniHotelCost);

//megaFriend
var friendName=["moniara","resh","rubel","sharu","sultana"];
var max = friendName[0];
function megaFriend(friendName)
{
  for(var i=0;i<friendName.length;i++){
     var element = friendName[i];
    if(element>max)
    {
      max=element;
    }
  }
  return max;
}
console.log(max);
