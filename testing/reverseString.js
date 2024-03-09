function reverseString(string) {
    let newString = string.split('')
    newString.reverse()
    return newString.join('')
}

console.log(reverseString('cabbage'));

module.exports = reverseString