Array.prototype.toTwenty = function () {
 for (var i = 1; i <= 20; i++){
   this.push(i);
 }
 return this;
};

Array.prototype.toForty = function () {
 for (var i = 2; i <= 40; i+=2){
   this.push(i);
 }
 return this;
};

Array.prototype.toOneThousand = function () {
 for (var i = 10; i <= 1000; i+=10){
   this.push(i);
 }
 return this;
};

Array.prototype.search = function (d) {
 var obj = {};
 
 var startIndex  = 0,
     stopIndex   = this.length - 1,
     middle      = Math.floor((stopIndex + startIndex)/2),
     countArr = [] ;
     count = 0;
 
 if(d != undefined) {
   while(this[middle] != d && startIndex < stopIndex){
   
       if (d < this[middle]){
               stopIndex = middle - 1;
           } else if (d > this[middle]){
               startIndex = middle + 1;
           }

       middle = Math.floor((stopIndex + startIndex)/2);
       count++;
       countArr.push[count];
   }
   
 if(this[middle] == d){
   obj.count = countArr;
   obj.length = this.length;
   obj.index = middle;
 }else{
   obj.count = countArr;
   obj.length = this.length;
   obj.index = middle;
 }
 }
 
   
 return obj;
   
 };