import {EmailValidatorExternal} from "./EmailExternal";
import {BooleanValidatorExternal} from "./BooleanValidatorExternal";

let emailExamples2 = ["lala","lalala@", "teste@hotmail.com.br"];

emailExamples2.forEach(email =>
{
    console.log(`${email} ${new EmailValidatorExternal().isValid(email)}`)
});

let booleanExamples2 = ["false","true", "test"];

booleanExamples2.forEach(bol =>
{
    console.log(`${bol} ${new BooleanValidatorExternal().isValid(bol)}`)
});