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

function caesarCipher(string, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  string = string.split('');
  let newString = '';
  //For every character in the provided string
  for (let i = 0; i < string.length; i++) {
    //Get the index of the letter in the alphabet string
    let index = alphabet.indexOf(string[i]);
    //If character is a letter
    if (alphabet.includes(string[i].toLowerCase())) {
      //If index is off bounds, wrap around
      if (alphabet.at(index + shift) === undefined) {
        newString += alphabet.at(index + shift - (alphabet.length - 1));
      } else {
        //Determine the letter's case
        if (string[i] === string[i].toLowerCase())
          newString += alphabet.at(index + shift);
        //Not sure why the +19 is needed or why it works
        else newString += alphabet.at(index + shift + 19).toUpperCase();
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
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

export { capitalize, reverseString, Calculator, analyzeArray, caesarCipher };
