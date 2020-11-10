const max = 100;
var calculateMoneySpent = (age, amount) => {
 var left = max-age;
 var spent = left*365*amount;
 return(`You will need $${spent} to last you another ${left} years`);
}
console.log(calculateMoneySpent(10,10));
