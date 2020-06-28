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

if(bool !== null){}
if (bool === undefined){}

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

// console.log("true == 1" , true == 1);
// console.log("true === 1" , true === 1);
// console.log("true !== 1", true !== 1);

function add(v1: number, v2:number, v3?:number) : number { //variable it's not required
    if(v3 !== undefined){
      return v1 + v2 + v3;
    }
    return v1 + v2;
}
function addAny(v1: any, v2:any, v3?:any) : any { //variable it's not required
    if(v3 !== undefined){
      return v1 + v2 + v3;
    }
    return v1 + v2;
}
console.log(`Function addAny: ${this.addAny(2,4)}`);
console.log(`Function addAny: ${this.addAny("2","4")}`);

let exemple : void  = null;

