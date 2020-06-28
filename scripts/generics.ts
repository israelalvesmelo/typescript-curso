function reverseList<T>(list: Array<T>) : Array<T> {
    let reverList: T[] = [];
    for(let i = list.length - 1; i >= 0; i--){
        reverList.push(list[i]);
    }
    return reverList;
}
let names = ["Luffy", "Alves", "Nascimento"];
let numbers = [1, 4, 76];
let reverseNames = reverseList<string>(names);
let reverseNumbers = reverseList<number>(numbers);
console.log(reverseNames);
console.log(reverseNumbers);

let reversedListArrow = <T>(list: Array<T>) : Array<T> => {
    let reverList: T[] = [];
    for(let i = list.length - 1; i >= 0; i--){
        reverList.push(list[i]);
    }
    return reverList;
};
console.log(reversedListArrow(numbers));

class Person3 {
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

interface Repository<T, ID> {
    findById(id: ID): T;

    save(entity: T): T;
}

class Person3Repository implements Repository<Person3, number>{
    findById(id: number): Person3 {
        console.log(`Searching using ID: ${id}`);
        return new Person3("Soldado");
    }

    save(entity: Person3): Person3 {
        return new Person3(entity.name);
    }

}

let person3Repository = new Person3Repository();
console.log(person3Repository.findById(3));
console.log(person3Repository.save(new Person3("Fred")));

interface NumberId {
    id: number;
}
interface Repository2<T, ID extends NumberId> {
    findById(id: ID): T;

    save(entity: T): T;
}

class Person3Repository2 implements Repository2<Person3, NumberId>{
    findById(numberId: NumberId): Person3 {
        console.log(`Searching using ID: ${numberId.id}`);
        return new Person3("Soldado");
    }

    save(entity: Person3): Person3 {
        return new Person3(entity.name);
    }

}
let numberID: NumberId =  {id:2};
let person3Repository2 = new Person3Repository2();
console.log(person3Repository2.findById({id:2})); // or numberID
console.log(person3Repository2.save(new Person3("Fred")));