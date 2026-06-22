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

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
