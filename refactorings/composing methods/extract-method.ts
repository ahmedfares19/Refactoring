// Problem
/**
 * You have a code fragment that can be grouped together
 */
 printOwing(): void {
  printBanner();

  // Print details.
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}
// Solution
/**
 * Move this code to a separate new method (or function) and replace the old code with a call to the method.
 */

 printOwing(): void {
  printBanner();
  printDetails(getOutstanding());
}

printDetails(outstanding: number): void {
  console.log("name: " + name);
  console.log("amount: " + outstanding);
}


// Why Refactor
// The more lines found in a method, the harder it’s to figure out what the method does. This is the main reason for this refactoring.
// Besides eliminating rough edges in your code, extracting methods is also a step in many other refactoring approaches.