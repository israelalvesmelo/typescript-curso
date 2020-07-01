function doingSomething(callableFunction: (name: string) => void): void {
    callableFunction.call(this, "Israel");
    callableFunction.apply(this, ["Israel", "Fernanda"]);
    callableFunction("Israel");
}
function doingSomethingCrazy(num1:number, num2:number): string {
   return `Numbers: ${num1} and ${num2}`;
}

function execute(name: string): void {
    console.log(name);
}

doingSomething(execute);

function calculator(num1: number, num2: number, type: string): number {
    switch (type) {
        case "+":
            return num1 + num2;
        case "/":
            return num1 / num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        default:
            return 0;
    }
}
function sum(num1: number, num2: number): number{
    return num1 + num2;
}

function multiply(num1: number, num2: number): number{
    return num1 * num2;
}

function calculator2(num1: number, num2: number, callback): number {
    if (typeof callback !== "function"){
        return 0;
    }
   return callback(num1, num2);
}

// console.log(calculator(1,2, "+"));
console.log(calculator2(1,2, sum));
console.log(calculator2(1,2, multiply));
console.log(calculator2(1,2, doingSomethingCrazy));

function calculator3(num1: number, num2: number, callback: (num1:number, num2:number) => number): number {
    if (typeof callback !== "function"){
        return 0;
    }
    return callback(num1, num2);
}
console.log(calculator3(34,5, multiply));
console.log(calculator3(12,13, (num1:number, num2:number) =>{
    return num1 - num2;
}))