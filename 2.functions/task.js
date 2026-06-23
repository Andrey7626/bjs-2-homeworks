function getArrayParams(...arr) {
    if (arr.length === 0) {
        return {
            min: 0,
            max: 0,
            avg: 0
        };
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > max) max = num;
        if (num < min) min = num;
        sum += num;
    }

    const avg = sum / arr.length;
    const roundedAvg = Number(avg.toFixed(2));

    return {
        min,
        max,
        avg: roundedAvg
    };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}


function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;

    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > max) max = num;
        if (num < min) min = num;
    }

    return max - min;

}


function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 === 0) {
            sumEvenElement += num;
        } else {
            sumOddElement += num;
        }
    }

    return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    }


    if (countEvenElement === 0) return 0;

    return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
