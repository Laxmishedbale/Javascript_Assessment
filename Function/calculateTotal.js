/*
3. Write a function called calculateTotal that takes price and quantity as parameters.
Use a helper function named multiply that multiplies two numbers.
*/
function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  const total = multiply(price, quantity);
  console.log("Total:", total);
}

calculateTotal(50, 3);