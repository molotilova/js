 /*
    Написать функцию getRange, которая принимает 2 агрумента ( начало и конец диапазона )
    1 - вывести через console.log все цифры в диапазоне
    2 - добавить 3, опциональный аргумент, который означает шаг, вывести все значения в диапозоне через шаг
    3 - расширить функцию, чтобы она возвращала сумму всех цифр в диапозоне
    ( если начало > конца, то меняем их местами, если начало = концу, то выводим и возвращаем 1 число )
  */


 let value = prompt('Введите значение старт: ', '');
 const startNumber = Number(value);
 value = prompt('Введите значение конец: ', '');
 const endNumber = Number(value);
 value = prompt('Введите шаг: ', '');
 const stepNumber = Number(value);

 function getRange(start, end, step = 1){
     let buf = 0;
     let sum = 0;
     if (step <= 0){
         return console.log('error');
     }
    if (start > end){
    buf = start;
    start = end;
    end = buf; 
    } else if (start === end)
        return console.log(start)
    

    for (let i = start; i <= end; i+=step){
     console.log(i);
     sum +=i;
    }

    return console.log(sum);
         
 }

 getRange(startNumber,endNumber, stepNumber);

