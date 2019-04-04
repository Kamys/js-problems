/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    return secret
        .split('')
        .reduce((acc, item) => {
            const newChar = decryptChar(item);
            return [...acc, newChar]
        }, [])
        .join('')
}

function decryptChar(char) {
    if (char === ' ') {
        return ' '
    }
    const charCode = char.charCodeAt(0) + 1;
    if (charCode >= 123) {
        return String.fromCharCode(97)
    }
    return String.fromCharCode(charCode)
}

module.exports = decrypt;
