// to create ModuleExternal  tsc --outfile scripts/all.js scripts/namespace.ts
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
