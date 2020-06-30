import EmailValidator = Validation.EmailValidator;

let emailExamples = ["lala","lalala@", "teste@hotmail.com.br"];

emailExamples.forEach(email =>
{
    console.log(`${email} ${EmailValidator.isValid(email)}`)
});