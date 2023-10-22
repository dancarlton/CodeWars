// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//getAverage([2,2,2,2]),2);
//getAverage([1,2,3,4,5,]),3);
//getAverage([1,1,1,1,1,1,1,2]),1);

//arr -> never empty
//avg value arr -> rounding down int

// ATTEMPT 1
// function getAverage(marks) {
//   // add all numbers in array
//   let sum = 0

//   // divide by amount of numbers in array by grabbing length
//   for (let i = 0; i < marks.length; i++) {
//     sum += marks[i]
//   }

//   //count amount of numbers in array
//   let count = marks.length

//   // divide by the amount of numbers in array
//   let average = sum / count

//   // return average
//   return Math.floor(average)
// }
// const marks = [1, 2, 3, 4, 5]
// const results = getAverage.marks

// ATTEMPT 2

// function getAverage(arr) {
//   //loop arr -> adding to sum
//   let sum = arr.reduce((a, c) => a + c)
//   // avg div sum / total num of nums in arr
//   let avg = sum / arr.length
//   // round down
//   return Math.floor(avg)
// }

// ATTEMPT 3

const getAverage = arr => Math.floor(arr.reduce((a, c) => a + c) / arr.length)
