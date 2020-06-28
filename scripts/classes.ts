class Person2 {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    print():void{
        console.log(`name ${this._name}`);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
class Employee2 extends Person2{
    private _salary: number;
    constructor(name: string, salary: number) {
        super(name);
        this._salary = salary;
    }
    print() {
        super.print();
        console.log(`Salary: ${this._salary}`)
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}

let p1 = new Person2("Israel");
let emp1 = new Employee2("Tavarez", 1233);
p1.print();
emp1.print();

//That example isn't recomented
// let p2 = {name: "Name"} as Person2;
// p2.print()
// let p3 = <Person2>{};
// p3.print();

//---------------------------
let p4 = <Person2>{};
let p5: Person2 = new Employee2("p5", 2000); //Polimorfismo
p5.name;
p5.name = "Change name";
p5.print();