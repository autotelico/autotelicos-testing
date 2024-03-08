function caesarCipher(string, encryptionLevel) {
  let newString = '';
  for (const letter of string) {
    let charCode = letter.charCodeAt(0);
    if (charCode >= 122) {
      let gap = charCode - 122;
      charCode = 97 + gap - 1;
      const caesarChar = charCode + encryptionLevel;
      newString += String.fromCharCode(caesarChar);
    } else {
      const caesarChar = charCode + encryptionLevel;
      newString += String.fromCharCode(caesarChar);
    }
  }
  return newString;
}

console.log(caesarCipher('zebra', 3));

module.exports = caesarCipher
