var p = document.createElement('p');
var ola:string = "Hello World";
p.textContent = ola;
document.body.appendChild(p);

let num : number = 10;
let bool : boolean = true;
let str : string = "A beautiful";
let str2 : string = 'message';
let str3: string = `${str} ${str2} to Israel`;
console.log(str3);

function func():void {}

if(bool != null){}
if (bool != undefined){}

if (bool){
    let i : number;
    for (i=0; i<3; i++){
        console.log(i);
    }
}
// console.log("value of " + i);

let list : number [] = [1, 2, 4];
let list2 : Array<number> = [1, 2, 4];

let tuple : [string, number];
tuple = ["Israel", 20];

console.log(tuple[0].toUpperCase()); // string
console.log(tuple[1].valueOf()); // number

enum Day {Monday = 1, Tuesday = 0, Sunday = 2}
let day : Day = Day.Monday;
console.log(`Today it's ${day} and tomorrow it's ${Day.Tuesday}`)