let user = {
  name: "Jane",
  years: 25
};

const {name, years: age, hasGraduated = false} = user;

console.log(name);
console.log(age);
console.log(hasGraduated);
