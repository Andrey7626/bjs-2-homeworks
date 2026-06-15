'use strict';

function solveEquation(a, b, c) {
    const d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return [];
    }

    if (d === 0) {
        const x = -b / (2 * a);
        return [x];
    }

    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    const pct = typeof percent === 'string' ? Number(percent) : percent;
    const cont = typeof contribution === 'string' ? Number(contribution) : contribution;
    const amt = typeof amount === 'string' ? Number(amount) : amount;
    const months = typeof countMonths === 'string' ? Number(countMonths) : countMonths;


    if (
        typeof pct !== 'number' || typeof cont !== 'number' ||
        typeof amt !== 'number' || typeof months !== 'number' ||
        Number.isNaN(pct) || Number.isNaN(cont) ||
        Number.isNaN(amt) || Number.isNaN(months)
    ) {
        return false;
    }


    const loanBody = amount - contribution;


    if (loanBody <= 0) {
        return 0;
    }


    const monthlyRate = (pct / 100) / 12;


    const monthlyPayment = loanBody * (
        monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1))
    );


    const totalPayment = monthlyPayment * countMonths;


    return Number(totalPayment.toFixed(2));
}
