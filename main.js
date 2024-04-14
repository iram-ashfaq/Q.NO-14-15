//Question number 14
//let guestArray : string [] =["laiba", "mehwish", "fatima"];
//guestArray.map((items) => (console.log(`dear ${items} , you are inited to the dinner`)))
//Question number 15
var guestArray = ["laiba", "mehwish", "fatima"];
var canNotAttend = "fatima";
console.log(canNotAttend + " " + " can not attend the dinner .");
var newguest = "Reba";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
console.log(guestArray);
guestArray.map(function (items) { return console.log("dear ".concat(items, ", you are invited to the dinner")); });
