import { ClassCalc } from "./class_calc.mjs";

const calculator = new ClassCalc(
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
);

calculator.logCalcProperties();

console.log("Sečtení:", calculator.add(14, 41));
console.log("Odečtení:", calculator.subtract(174, 32));
console.log("Násobení:", calculator.multiply(47, 50));
console.log("Dělení:", calculator.divide(125, 7));
