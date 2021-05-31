 /*
   5 - написать функцию, которая принимает n-количество слов и возвращает значение, которое определяет, состоят ли все слова из одних и тех же букв ( “кот”, “ток”, “окт” -> true )
  */


  let words = prompt('Введите слова: ', '');
  /**
   *  @param arrWords array
   */
  console.log(twinsLettersInWords(words.split(' ')));

  function twinsLettersInWords(arrWords){
   function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
   }

   arrWords = arrWords.map(
       (item) => item.split('').filter(onlyUnique).sort().join('')
   );

   for (i = 1; i < arrWords.length; i++) {
    if (arrWords[0] !== arrWords[i]){
     return false;
    }
   }
   return true;
  }
