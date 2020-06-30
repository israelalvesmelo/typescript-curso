import {ValidatorExternal} from "./ValidatorExternal";

export class BooleanValidatorExternal  implements ValidatorExternal {
        isValid(str:string):boolean{
            return str === "true"? true : false;
        }
}