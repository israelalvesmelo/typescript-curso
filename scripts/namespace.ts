/// <reference path="Validation.ts"/>
/// <reference path="BooleanValidator.ts"/>
/// <reference path="EmailValidator.ts"/>
import EmailValidator = Validation.EmailValidator;
import BooleanValidation = Validation.BooleanValidator;

let emailExamples= ["lala","lalala@", "teste@hotmail.com.br"];

emailExamples.forEach(email =>
{
    console.log(`${email} ${new EmailValidator().isValid(email)}`)
});

let booleanExamples = ["false","true", "test"];

booleanExamples.forEach(bol =>
{
    console.log(`${bol} ${new BooleanValidation().isValid(bol)}`)
});