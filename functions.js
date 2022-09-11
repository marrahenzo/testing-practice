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

function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  arr.forEach((item) => {
    sum += item;
    if (item < min) min = item;
    if (item > max) max = item;
  });
  return { average: sum / arr.length, min, max, length: arr.length };
}

export { capitalize, reverseString, Calculator, analyzeArray };
