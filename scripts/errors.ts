function doSomethingWithString(input:string): string{
    if (input === undefined || input === ""){
        throw new StringNotValidError(`The String ${input} is not valid`);
    }
    return input;
}
class ApplicationError implements Error{
    name: string = "ApplicationError";

    constructor(public message: string) {
        if(typeof console != undefined){
            console.log(`Error: ${message}`);
        }
    }

    toString():string{
        return `${this.name} : ${this.message}`;
    }

}
class StringNotValidError extends ApplicationError{

}

let input = doSomethingWithString("");