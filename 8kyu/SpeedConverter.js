// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm(km*) per second, rounded down to the integer (= floored).

// For example:
// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// the math on that is /0.036

function cockroachSpeed(s) {
    (s / 0.036).floor
  }

//   or

const cockroachSpeed = s => Math.floor(s / 0.036)