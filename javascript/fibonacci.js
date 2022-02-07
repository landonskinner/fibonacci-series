function fibonacci(num) {
  const n0 = 0;
  const n1 = 1;
  if (num === 0) {
    return n0
  } else if (num === 1) {
    return n1
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
