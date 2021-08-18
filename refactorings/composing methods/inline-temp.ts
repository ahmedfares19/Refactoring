// Problem
// You have a temporary variable that’s assigned the result of a simple expression and nothing more.
hasDiscount(order: Order): boolean {
  let basePrice: number = order.basePrice();
  return basePrice > 1000;
}

// Solution
// Replace the references to the variable with the expression itself.
hasDiscount(order: Order): boolean {
  return order.basePrice() > 1000;
}
