(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValidatorExternal = void 0;
class BooleanValidatorExternal {
    isValid(str) {
        return str === "true" ? true : false;
    }
}
exports.BooleanValidatorExternal = BooleanValidatorExternal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$/i;
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailExternal_1 = require("./EmailExternal");
const BooleanValidatorExternal_1 = require("./BooleanValidatorExternal");
let emailExamples2 = ["lala", "lalala@", "teste@hotmail.com.br"];
emailExamples2.forEach(email => {
    console.log(`${email} ${new EmailExternal_1.EmailValidatorExternal().isValid(email)}`);
});
let booleanExamples2 = ["false", "true", "test"];
booleanExamples2.forEach(bol => {
    console.log(`${bol} ${new BooleanValidatorExternal_1.BooleanValidatorExternal().isValid(bol)}`);
});

},{"./BooleanValidatorExternal":1,"./EmailExternal":2}]},{},[3]);
