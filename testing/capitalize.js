function capitalize(string) {
  let newStr = '';
  let stringArray = string.split(' ');
  stringArray.forEach((word) => {
    if (word.length === 1) {
      newStr += `${word.toUpperCase()} `;
    } else {
      const firstCharUpper = word.charAt(0).toUpperCase();
      if (word === stringArray[stringArray.length - 1]) {
        newStr += firstCharUpper + word.slice(1);
      } else {
        newStr += firstCharUpper + word.slice(1) + ' ';
      }
    }
  });
  return newStr;
}

console.log(capitalize('caring'));

module.exports = capitalize;
