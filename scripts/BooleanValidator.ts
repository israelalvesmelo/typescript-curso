namespace Validation{

    export class BooleanValidator  implements Validator {
        isValid(str:string):boolean{
            return str === "true"? true : false;
        }

    }
}