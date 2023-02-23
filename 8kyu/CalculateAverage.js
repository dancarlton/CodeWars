// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// First Try
function betterThanAverage(classPoints, yourPoints) {
    if (yourPoints > classPoints) {
        return 'True'
    } else {
        return 'False'
    }
}

// Second Try
function betterThanAverage(classPoints, yourPoints) {
    let sum = yourPoints + classPoints.reduce((total, score) => total + score, 0);
    let average = sum / (classPoints.length + 1);
    return yourPoints > average;
  }
  