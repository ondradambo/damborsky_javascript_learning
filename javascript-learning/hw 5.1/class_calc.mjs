export class ClassCalc {
  constructor(add, subtract, multiply, divide) {
    this.add = add;
    this.subtract = subtract;
    this.multiply = multiply;
    this.divide = divide;
    console.log(
      `Byly nastaveny následující funkce: \n\t - sčítání: ${this.add} \n\t - odčítání: ${this.subtract} \n\t - násobení: ${this.multiply} \n\t - dělení: ${this.divide}`
    );
  }

  logCalcProperties() {
    console.log(
      `Kalkulačka umí: \n\t - sčítat: ${this.add} \n\t - odčítat: ${this.subtract} \n\t - násobit: ${this.multiply} \n\t - dělit: ${this.divide}`
    );
  }
}
