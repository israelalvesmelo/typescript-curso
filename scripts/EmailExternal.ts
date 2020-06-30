    import {ValidatorExternal} from "./ValidatorExternal";
    let emailRegex:RegExp = /^[a-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$/i;

    export class EmailValidatorExternal implements ValidatorExternal{
         isValid(str:string):boolean{
            return emailRegex.test(str);
        }

}