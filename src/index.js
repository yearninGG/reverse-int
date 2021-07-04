'use strict'

module.exports = function reverse (n) {
    if (n < 0) {
        n = -n
    }

    n = String(n)
    let reverseNumber = ''

    for (let i = 1; i <= n.length; i++) {
        reverseNumber += (n[n.length - i])
    }
    return reverseNumber
}
