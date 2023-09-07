//Print odd numbers in an array:
// Using anonymous function
let printOddNumbers = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

// Using IIFE
(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//Convert all strings to title caps in a string array:
// Using anonymous function
const convertToTitleCaps = function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

// Using IIFE
const titleCapsArray = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(["hello", "wORLD", "tHis", "IS", "gUvI"]);
console.log(titleCapsArray);
//Sum of all numbers in an array:
// Using anonymous function
var sumArray = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};

// Using IIFE
var totalSum = (function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
})([1, 2, 3, 4, 5]);
console.log(totalSum);
//Return all prime numbers in an array:
// Using anonymous function
const isPrime = function (num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = function (arr) {
  return arr.filter(function (num) {
    return isPrime(num);
  });
};

// Using IIFE
const primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbers);
//Return all palindromes in an array:
// Using anonymous function
const isPalindrome = function (str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

const getPalindromes = function (arr) {
  return arr.filter(function (str) {
    return isPalindrome(str);
  });
};

// Using IIFE
const palindromes = (function (arr) {
  return arr.filter(function (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  });
})(["level", "hello", "deed", "world"]);
console.log(palindromes);
//Return median of two sorted arrays of the same size:
// Using anonymous function
const findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
};

// Using IIFE
const median = (function (nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
})([1, 3, 5], [2, 4, 6]);
console.log(median);
//Remove duplicates from an array:
// Using anonymous function
const removeDuplicates = function (arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
};

// Using IIFE
const uniqueArray = (function (arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
})([1, 2, 2, 3, 4, 4, 5, 6, 6]);
console.log(uniqueArray);
//Rotate an array by k times:
// Using anonymous function
const rotateArray = function (arr, k) {
  const rotations = k % arr.length;
  const rotated = arr.slice(-rotations).concat(arr.slice(0, -rotations));
  return rotated;
};

// Using IIFE
const rotatedArray = (function (arr, k) {
  const rotations = k % arr.length;
  const rotated = arr.slice(-rotations).concat(arr.slice(0, -rotations));
  return rotated;
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
