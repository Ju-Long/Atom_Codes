const fruits = ["apricot", "orange"];
const vegetables = ["cucumber", "potato"];

vegetables.unshift('sugar');
vegetables.push('sausage');
fruits.unshift(...vegetables);
console.log(fruits);
