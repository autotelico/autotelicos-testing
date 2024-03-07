function caesarCipher(string, encryptionLevel) {
    let newString = ''
    for (const letter of string) {
        const charCode = letter.charCodeAt(0)
        const caesarChar = charCode + encryptionLevel
        newString += String.fromCharCode(caesarChar)
    }
    return newString
}

console.log(caesarCipher('terrence', 3));