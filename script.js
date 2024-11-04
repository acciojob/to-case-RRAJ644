function toCase(text) {
  const lowerCase = text?.toLowerCase()
  const upperCase = text?.toUpperCase()
  const ans = lowerCase + '-' + upperCase
  return ans
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
