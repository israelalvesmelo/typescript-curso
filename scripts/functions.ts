function print(val:string): void {
    console.log(val)
}
this.print("Message here");

function printOrNot(flag: boolean =false): void {
    let str = flag ? "flag is true" : "flag is false";
    console.log(str);
}
printOrNot();
printOrNot(true);

let sumAnonymous = function (n1:number, n2:number) : void {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1,2);
sumNotAnonymous(3,1);
function sumNotAnonymous(n1:number, n2:number) : void {
    console.log(`sum: ${n1 + n2}`);
}
sumNotAnonymous(3,5);

let sumArrow1 = (n1:number, n2:number) => n1 + n2; //Stream
let sumArrow2 = (n1:number, n2:number) => {return n1 + n2}; //Stream
let objArrow3 = (name:string, surname:string ) => ({name: name, surname: surname}); //Stream
console.log(sumArrow1(1,8));
console.log(sumArrow2(7,8));
console.log(objArrow3("Israel", "Tavarez"));

function testThis() {
    return this;
}
let objExample= {
    name:"Jiraya",
    fullname: function () {
        return this;
    },
    fullname2: () => {
        return this;
    },
}
console.log(testThis());
console.log(objExample.fullname());
console.log(objExample.fullname2());

let loterry = {
    names: ["Gon", "Killua", "Leorio"],
    test: "lalala",
    createLotteryPicker: function () {
        console.log("first level this: " + this.names + " " + this.test);
        return () => {
            console.log("second level this: " + this.names);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return {name: this.names[pickedPersonNumber]};
        }
    }
};

let personPicker = loterry.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);