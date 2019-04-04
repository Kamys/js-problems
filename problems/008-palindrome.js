/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    const chars = value.split('');
    const charsReverse = [...chars].reverse();
    return chars.reduce((acc, item, index) => {
        if (!acc) {
            return false
        }

        return item === charsReverse[index];
    }, true);
}

console.log(isPalindrome('true'));

module.exports = isPalindrome;
