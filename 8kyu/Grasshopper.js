// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// First Try
function greet (name, owner) {
    alert(`Hello ${name} and ${owner}`)
}

// Second Try
function greet(name, owner) {
    if (name === owner) {
      return 'Hello boss';
    } else {
      return 'Hello guest';
    }
  }
  