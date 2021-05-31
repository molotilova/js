 /*
    12 - написать функцию, которая находить число фибоначи по указанной позиции в списке
       0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
  */
 let str = prompt('Введите позицию: ', '');
 let index = Number(str);

 function getItemFibonacci(index){
     let item = 0;
     let prevItem = 0;
     let thisItem = 1;
     if (index === 2){
         return 1;
     }
     for(let i = 1; i < index - 1; i++)
     {
         item = prevItem + thisItem;
         prevItem = thisItem;
         thisItem = item;
     }
     return item;
 }

 console.log(getItemFibonacci(index));