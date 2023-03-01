// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// First Try 
function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');
  
  // Loop through each word and reverse it
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  
  // Join the reversed words back into a string with spaces between them
  return words.join(' ');
}
