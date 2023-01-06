// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]

// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

// First Try
function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    const frequencyCount1 = {};
    const frequencyCount2 = {};
  
    for (let val of arr1) {
      frequencyCount1[val] = (frequencyCount1[val] || 0) + 1;
    }
  
    for (let val of arr2) {
      frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
    }
  
    for (let key in frequencyCount1) {
      if (!(key in frequencyCount2) || frequencyCount2[key] !== frequencyCount1[key]) {
        return false;
      }
    }
  
    return true;
}

// Second Try
function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    let arr1String = arr1.sort().toString();
    let arr2String = arr2.sort().toString();
  
    return arr1String === arr2String;
  }

// COULD NOT SOLVE