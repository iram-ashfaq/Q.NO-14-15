//Question number 14
//let guestArray : string [] =["laiba", "mehwish", "fatima"];
//guestArray.map((items) => (console.log(`dear ${items} , you are inited to the dinner`)))

//Question number 15
let guestArray : string[] =["laiba", "mehwish", "fatima"];
let canNotAttend : string = "fatima"
console.log(canNotAttend + " "+" can not attend the dinner .")
let newguest : string = "Reba"

guestArray [guestArray.indexOf(canNotAttend)] = newguest;
console.log(guestArray);

guestArray.map((items) => console.log(`dear ${items}, you are invited to the dinner`));


