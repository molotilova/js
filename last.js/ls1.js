

 <script>
     const str = '22 / 22';

     function calc(str){
     let arr = str.split(' ');
     let res = 0;
     switch (arr[1])
 {
     case '*' : res = arr[0] * arr[2];
     break;
     case '+' : res = number(arr[0]) + number(arr[2]);
     break;
     case '-' : res = arr[0] - arr[2];
     break;
     case '/' : res = arr[0] / arr[2];
     break;
     defaul: break;
 }
     return res;

 }
     console.log(calc(str));
</script>