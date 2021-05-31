// 20 - написать функцию, которая выводит все простые число до указанного

let str = prompt('Введите число: ', '');
const num = Number(str);

function sNum(num) {
    let result = [1, 2];
    for (let i = 3; i <= num; i++) {
        let flag = true;
        for (j = 1; j < result.length; j++) {
            if (i % result[j] === 0) {
                flag = false;
            }
        }

        if (flag) result.push(i);
    }
    return result;
}

console.log(sNum(num));