function capitalize(string) {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

export { capitalize, reverseString };
