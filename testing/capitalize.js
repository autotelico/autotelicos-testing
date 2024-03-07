function capitalize(string) {
  let newStr = string.slice(1)
  return string.charAt(0).toUpperCase() + newStr
}

console.log(capitalize('caring'));