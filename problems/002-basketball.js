/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.pointsText.split('-')
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    const result = points
        .map(pointsText => pointsText
            .split('-')
            .map(item => parseInt(item, 10))
        )
        .reduce((result, item) => {
            return (result + item[0]) - item[1]
        }, 0);

    if (result === 0) {
        return undefined
    }

    if (result > 0) {
        return 1
    } else {
        return 2
    }
}

getWinner(['23-26', '24-30', '30-27', '35-31']);

module.exports = getWinner;
