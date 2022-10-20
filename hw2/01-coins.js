/** Exercise 01 - Coins **/
const dollar = 1;
const quarter = 100*0.25;
const dime = 100*0.10;
const nickel = 100*0.05;

const calculateChange = (input) => {
  let res = input;
  let result = '';
  let val = '';


  let calDollar = Math.floor(res);
  if (calDollar !== 0) {
    val = calDollar > 1 ? `dollars` : `dollar`;
    result = calDollar + val;
    res = res - (calDollar * dollar);
  }
  res *= 100;

  let calQuarter = Math.floor(res / quarter);
  if (calQuarter !== 0) {
    result = checkComma(result);
    val = calQuarter > 1 ? `quarters` : `quarter`;
    result = result + (calQuarter + val);
    res = res - (calQuarter * quarter);
  }
  
  let calDime = Math.floor(res / dime);
  if (calDime !== 0) {
    result = checkComma(result);
    val = calDime > 1 ? `dimes` : `dime`;
    result = result + (calDime +val);
    res = res - (calDime * dime);
  }
  
  let calNickel = Math.floor(res / nickel);
  if (calNickel !== 0) {
    result = checkComma(result);
    val = calNickel > 1 ? `nickel` : `nickel`;
    result = result + (calNickel +val);
    res = res - (calNickel * nickel);
  }
  
  let calPenny = Math.floor(res);
  if (calPenny !== 0) {
    result = checkComma(result);
    val = calPenny > 1 ? `pennies` : `calPenny`;
    result = result + (calPenny + val);
  }
  return `$${input} ==> ${result}`;
};

function checkComma(result) {
  if (result !== '')
    result += `, `;
  return result;
}

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 Penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
