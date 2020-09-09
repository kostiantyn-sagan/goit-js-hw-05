/*function-constructor

Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.

В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.*/

// Write code under this line
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

/*Код должен содержать функцию - конструктор 'Account'

Функция - конструктор 'Account' должна создавать объект

Значение Account.prototype.getInfo должно быть функцией

Объект, созданный вызовом new Account('Mangozedog', 'mango@dog.woof') должен содержать свойство 'login' со значением 'Mangozedog' и свойство 'email' со значением 'mango@dog.woof'

Объект, созданный вызовом new Account('Mangozedog', 'mango@dog.woof') при вызове метода getInfo() должен возвращать строку 'login : Mangozedog, email: mango@dog.woof'

Объект, созданный вызовом new Account('Poly', 'poly@mail.com') должен содержать свойство 'login' со значением 'Poly' и свойство 'email' со значением 'poly@mail.com'

Объект, созданный вызовом new Account('Poly', 'poly@mail.com') при вызове метода getInfo() должен возвращать строку 'login : Poly, email: poly@mail.com'*/
