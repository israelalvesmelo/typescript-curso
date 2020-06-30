var Validation;
(function (Validation) {
    var BooleanValidator = /** @class */ (function () {
        function BooleanValidator() {
        }
        BooleanValidator.prototype.isValid = function (str) {
            return str === "true" ? true : false;
        };
        return BooleanValidator;
    }());
    Validation.BooleanValidator = BooleanValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$/i;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts"/>
/// <reference path="BooleanValidator.ts"/>
/// <reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var BooleanValidation = Validation.BooleanValidator;
var emailExamples = ["lala", "lalala@", "teste@hotmail.com.br"];
emailExamples.forEach(function (email) {
    console.log(email + " " + new EmailValidator().isValid(email));
});
var booleanExamples = ["false", "true", "test"];
booleanExamples.forEach(function (bol) {
    console.log(bol + " " + new BooleanValidation().isValid(bol));
});
