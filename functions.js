function capitalize(string) {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

export { capitalize, reverseString, Calculator };
