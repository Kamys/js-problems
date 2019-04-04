/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const numbers = number.split('').map(item => parseInt(item, 10));
    const sumFirst = sliceSum(numbers, 0, 3);
    const sumSecond = sliceSum(numbers, 3);
    console.log({sumFirst, sumSecond});
    return sumFirst === sumSecond;
}

function sum(a, b) {
    return a + b;
}

function sliceSum(array, start, end) {
    return array.slice(start, end).reduce(sum, 0)
}

module.exports = checkTicket;
