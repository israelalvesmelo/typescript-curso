interface Example1 {
    name: string;
}

class AnotherExample1 {
    name: string;
}

class AnotherExample2 {
    num: number;
}

let exVar: Example1;
exVar = new AnotherExample1();
// exVar = new AnotherExample2();
let exVar2 = {name: "Brook", agr:10};
exVar = exVar2;

function testExample(ex: Example1) {
    console.log(ex.name);
}
let exVar3 = {name:"Brook", age:20};
testExample(exVar3);
// testExample({name:"Brook", age:20});

let x1 = (a:number) => a;
let x2 = (b:number, s:string) => b+s;

console.log(x1(10));
console.log(x2(10, " something"));

// x2 = x1; that it's not working, but x1 = x2 work;

let items = [1,2,3];
items.forEach((item, index, array) => console.log(item));
items.forEach(item => console.log(item)); //descartando argumentos de cima