@course
class Person {
    name: string;
}

function course(target: any) {
    Object.defineProperty(target.prototype,
        "course", {value: () => "TypeScript"});
}

let pe4 = new Person();
console.log(pe4.course());

@Course({
    course: "DevDojo Tutorials"
})
class Teacher {
    name:string;
}

function Course(config:any) {
    return(target:any) => {
        Object.defineProperty(target.prototype,
            "course", {value: () => config.course});
    }
}

let teacher = new Teacher();
console.log(teacher.course())