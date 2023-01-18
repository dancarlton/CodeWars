// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Try 1
function stray(numbers) {
  let strayNums = [0];
  for (let i = 1; i < numbers.length; i++) {
    if (strayNums !== numbers[i]) {
      return (strayNums = numbers[i]);
    }
  }

  return 0;
}


