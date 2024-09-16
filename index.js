 //Problm no-01
 function calculateDifference(a, b) {
    return a - b;
  }

  //problem no-02
  function isOdd(number) {
    return number % 2 !== 0;
  }

  //problem no-03
  function findMin(numbers) {
    let min = numbers[0]; // Assume the first element is the minimum

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

    return min;
  }

  //Problem no-04
  function filterEvenNumbers(numbers) {
    const evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }

  //Problem no-05
  const number = [2, 5, 4, 3, 2, 6, 1];
  const Sorted = number.sort().reverse();
  console.log(sorted);

  //problem no-06
  function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  //Problem no-07
  function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let vowelCount = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  //Problem no-08
  function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
