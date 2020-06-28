class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    print():void{
        console.log(`name ${this.name}`);
    }
}
class Employee2 extends Person2{
    salary: number;
    constructor(name: string, salary: number) {
        super(name);
        this.salary = salary;
    }
    print() {
        super.print();
        console.log(`Salary: ${this.salary}`)
    }
}

let p1 = new Person2("Israel");
let emp1 = new Employee2("Tavarez", 1233);
p1.print();
emp1.print();

//That example isn't recomented
let p2 = {name: "Name"} as Person2;
p2.print()
let p3 = <Person2>{};
p3.print();