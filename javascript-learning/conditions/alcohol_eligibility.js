const actualAge = 17;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  //už může pít výrok = TRUE
  console.log(`${fullName} už může pít alkohol.`);
} else if {
  // ještě nemůže pít: výrok = FALSE
  // ! else není povinný
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě 
    ${drinkingAgeLimit - actualAge} rok/let`
  );
}
