function printName(person: {name:string}): void {
    console.log(person.name);
}
let randomObj = {name:"Israel", age:20};
let randomObj2 = {age:21};
printName(randomObj);
// printName(randomObj2);
interface Person {
    name: string;
    // age?: number;
}
interface Employee extends Person{
    salary: number;
}
let pe: Person = {name: "Israel-Person"}
let emp: Employee = {name: "Israel-Employee", salary: 2000}
printName(pe);
printName(emp);

function printName2(person: Person) : void {
    console.log(person.name);
}
printName2(pe);
printName2(emp);
printName2(randomObj);
printName2({name:"Test"} as Person);
printName2({name:"Test2"} as Employee);

interface Person {
    age?: number;
}
let person2 = {age:20, name:"Teste interface"};

interface Manager extends Employee{
    readonly bonus: number;
}
let manager: Manager = {name: "Israel Manager", salary: 4000, bonus: 300};
manager.name = "Manager";
// manager.bonus = "I dont have permission to change value of type readonly";