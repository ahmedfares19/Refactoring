/**
 * Problem
 * When a method body is more obvious than the method itself, use this technique */

class PizzaDelivery {
  // ...
  getRating(): number {
    return moreThanFiveLateDeliveries() ? 2 : 1;
  }
  moreThanFiveLateDeliveries(): boolean {
    return numberOfLateDeliveries > 5;
  }
}

/**
 * Solution
 * Replace calls to the method with the method’s content and delete the method itself
 */
 lass PizzaDelivery {
  // ...
  getRating(): number {
    return numberOfLateDeliveries > 5 ? 2 : 1;
  }
}