// Problem
// You place the result of an expression in a local variable for later use in your code
calculateTotal(): number {
  let basePrice = quantity * itemPrice;
  if (basePrice > 1000) {
    return basePrice * 0.95;
  }
  else {
    return basePrice * 0.98;
  }
}


// Solution
// Move the entire expression to a separate method and return the result from it. Query the method instead of using a variable. Incorporate the new  //method in other methods, if necessary.
calculateTotal(): number {
  if (basePrice() > 1000) {
    return basePrice() * 0.95;
  }
  else {
    return basePrice() * 0.98;
  }
}
basePrice(): number {
  return quantity * itemPrice;
}