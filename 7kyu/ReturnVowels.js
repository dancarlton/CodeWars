// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// First Try
function getCount(str) {
    return str.match(/[aeiou]/gi).length;
}

// Second Try
function getCount(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels === null ? 0 : vowels.length;
}