namespace Validation{
    import Validator = Validation.Validator;
    let emailRegex:RegExp = /^[a-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$/i;

    export class EmailValidator implements Validator{
         isValid(str:string):boolean{
            return emailRegex.test(str);
        }

    }
}