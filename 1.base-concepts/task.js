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
