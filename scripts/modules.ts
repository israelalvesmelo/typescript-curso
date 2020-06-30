//Module interno
namespace Validation{
    let emailRegex:RegExp = /^[a-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$/i;

   export class EmailValidator {
       static isValid(str:string):boolean{
            return emailRegex.test(str);
        }

    }
}