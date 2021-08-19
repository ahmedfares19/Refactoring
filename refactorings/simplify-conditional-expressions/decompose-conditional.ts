// Problem
// You have a complex conditional (if-then/else or switch).


if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
  charge = quantity * winterRate + winterServiceCharge;
} else {
  charge = quantity * summerRate;
}



// Solution
// Decompose the complicated parts of the conditional into separate methods: the condition, then and else.
if (isSummer(date)) {
  charge = summerCharge(quantity);
}
else {
  charge = winterCharge(quantity);
}