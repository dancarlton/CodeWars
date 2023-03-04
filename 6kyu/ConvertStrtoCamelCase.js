// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// First Try
function toCamelCase(str){
    let result = ''
    let capitalizeNext = false

    for (let i = 0; i < str.length; i++){
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (currentChar === '-' || currentChar === '_') {
            capitalizeNext = true
        } else if (capitalizeNext || i === 0){
            result += currentChar.toUpperCase();
            capitalizeNext = false
        } else {
            result += currentChar;
        }
    }

    return result; 
}

// Second Try
function toCamelCase(str) {
    const words = str.split(/[_-]/);
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].substring(1);
    }
    return result;
  }
  