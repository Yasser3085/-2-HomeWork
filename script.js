//1st

function reverseNumber(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(7637));
console.log("___________________________________");

//2nd

function uppercase(word) {
  let words = word.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(uppercase("yasser alreshoodi"));
console.log("___________________________________");

//3rd

function Vowels(word) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(Vowels("hello world"));
console.log("___________________________________");
// 4th

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log("___________________________________");

//5th

function findLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("kingdom of saudi arabia "));
console.log("___________________________________");

//6th

function sortWord(word) {
  let sorted = word.split("").sort().join("");
  return sorted;
}

console.log(sortWord("hello world"));
console.log("___________________________________");

// 7th

function additon(a, b) {
  return a + b;
}

console.log(additon(-4, -8));
console.log("___________________________________");

//8th

function ageToDays(age) {
  return age * 12 * 30;
}

console.log(ageToDays(24));
console.log("___________________________________");

//9th

function howManySeconds(hour) {
  return hour * 60 * 60;
}

console.log(howManySeconds(2));
console.log("___________________________________");

//10th

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThanOrEqualToZero(-4));
console.log("___________________________________");

//11th

function num_of_digits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(num_of_digits(2373));
console.log("___________________________________");

//12th

function ToArray(obj) {
  let array = [];
  for (let key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
}

console.log(ToArray({ name: "yasser", age: 24 }));
console.log("___________________________________");

//13th

function Paths(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }

  return total;
}

console.log(Paths(4));
console.log("___________________________________");

//14th

function doubleLetters(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(doubleLetters("hello"));
console.log("___________________________________");

//15th
function getdate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return ` Date is :  ${year}-${month}-${day}`;
}

console.log(getdate());
console.log("___________________________________");

//16th

function getDays(date1, date2) {
  let oneDay = 24 * 60 * 60 * 1000;
  let firstDate = new Date(date1);
  let secondDate = new Date(date2);
  let diffDays = Math.round((firstDate - secondDate) / oneDay);
  return diffDays;
}

console.log(getDays("2022-01-10 ", "2022-01-05"));
console.log("___________________________________");

//17th

function greaterNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} `);
  } else if (num2 > num1) {
    console.log(`${num2} `);
  } else {
    console.log(`${num1} and ${num2} are equal.`);
  }
}

greaterNumber(5, 9);
console.log("___________________________________");

//18th

function mostExpensive(jewelry) {
  let maxPrice = 0;
  let mostExpensiveJewelry = "";

  for (let name in jewelry) {
    if (jewelry[name] > maxPrice) {
      maxPrice = jewelry[name];
      mostExpensiveJewelry = name;
    }
  }

  return `The most expensive one is the ${mostExpensiveJewelry}`;
}

console.log(
  mostExpensive({
    ring: 1000,
    watch: 5000,
  })
);



