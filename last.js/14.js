// 14 - есть массив чисел, найти первых два максимальных ( за один проход не используя сортировку )

const arrNumber = [2, 8, 5, 2, 1, 0, 9];

function maxNumbers(arrNumber)
{
    let arrResult = [];
    if (arrNumber[0] > arrNumber[1])
    {
        arrResult[0] = arrNumber[0];
        arrResult[1] = arrNumber[1];
    }
    else  {
        arrResult[0] = arrNumber[1];
        arrResult[1] = arrNumber[0];
    }

    for (let i = 2; i < arrNumber.length; i++){
        if (arrNumber[i] > arrResult[0])
        {
            arrResult[1] = arrResult[0];
            arrResult[0] = arrNumber[i];
        }
        else if (arrNumber[i] > arrResult[1]){
            arrResult[1] = arrNumber[i];
        }
    }

    return arrResult;
}

console.log(maxNumbers(arrNumber));