 /*
   3 - дана функция, она принимает в качестве параметров n-количество строк ( первый параметр является разделителем ),
  реализовать ее так, чтобы она работала по принципу joinStrings(‘-’, ‘a’, ‘b’) -> return ‘a-b’
  */



  const str1 = '-';
  const str2 = 'a';
  const str3 = 'b';

  function Separator () {
  let strArr = Array.from(arguments);

  let resultString = '';
  let firstElement = strArr.shift();
  for (let i = 0; i < strArr.length; i++)
 {
  resultString += strArr[i] + firstElement;
 }
  return resultString.slice(0, resultString.length-firstElement.length);
 }
  console.log(Separator('++', 'd', '6', '/', 'f', 'd', '6', '/', 'f', 'E', 'E'));
