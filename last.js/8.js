 /*
  написать функцию, которая определяет, является ли слово палиндромом
  */

 let str = prompt('Введите слово: ', '');

 function isPalindrom(str) {
     /*let arrStr = [];
     arrStr = str.split('');
     let arrStrReverse = [];
     arrStrReverse = arrStr.slice();
     if (arrStr.toString() === arrStrReverse.reverse().toString()) {
         return true;
     } else {
         return false;
     }*/
     return str === str.split('').reverse().join('') ;
 }

 console.log(isPalindrom(str));