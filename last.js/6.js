 /*
    6 - реализовать функцию,
    которая принимает строку и возвращает новую строку
    без дубликатов символов ( “aabb11cd” -> “ab1cd”)
  */


 let str = prompt('Введите строку: ', '');
 function strUnique(str){
  function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
  }
  let arrStr = [];
  arrStr = str.split('');
  return arrStr.filter(onlyUnique).join('');

 }

 console.log(strUnique(str));