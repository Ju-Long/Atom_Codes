# Lesson 02 Exercises
## Exercise 1
Go to _exercise01.js_
What is the expected output for the following code? Write your answer as comment(s) in _exercise1.js_.
```
let x = 1;
if (x === 1) { let x = 2;
console.log(x);
}
console.log(x);
```
***
## Exercise 2
Go to _exercise02.js_
Write an arrow function assigned to the variable `double`, with one parameter, `num`. The function returns the value of `num * 2`.
***
## Exercise 3
Go to _exercise03.js_
Write an arrow function named `myFortune` that:
*	Takes 2 arguments: _geographic location_ and _job title_
*	Output fortune in console, example:
“You will be a <_job title_> in <_geographic location_>”
***
## Exercise 4
Go to _exercise04.js_
Write an arrow function named `calculateMoneySpent` that:
*	Takes 2 arguments: _age_ and _amount per day_
*	Calculates the amount spent for rest of the life (based on a constant __max age of 100__ years old)
*	Output the result in console, example:
“You will need <_amount spent_> to last you another <_years_> years”
***
## Exercise 5
Go to _exercise05.js_
Write an arrow function that calculates properties of a circle with `radius` as the argument:
*	Calculate the `circumference` based on the `radius`, C=π2r, where π=3.142
*	Output 
    “The circumference is <_circumference_>
*	Calculate the `area` based on the `radius`, A=πr^2, where π=3.142
*	Output
    “The area is <_area_>”
***
## Exercise 6
Go to _exercise06.js_
Write a function `multiply` that has two arguments `a` and `b`. `b` is a default parameter with value 2.
***
## Exercise 7
Go to _exercise07.js_
Write an arrow function named `sum` that
*	Takes 2 arguments: array `numList` and integer `divisor`
*	`diviso`r has a default value of 5
*	Returns the sum of the numbers in `numList` that are divisible by `divisor`
  
Call the `sum` function with two argument values [93, 78, 4] and 2.
Call the `sum` function with one argument value [100,95,24].
***
## Exercise 8
Go to _exercise08.js_
Write the JavaScript statements using __destructuring assignment__ as the following:
*	`name`property set to variable `name`
*	`years` property set to variable `age`
*	`hasGraduated` property set to variable `hasGraduated` (`false if` no such property)
***
## Exercise 9
Go to _exercise09.js_
Using the spread operator(…), expand the fruits array to obtain the following result:
`[ 'sugar', 'cucumber', 'potato', 'sausage', 'apricot', 'orange' ]`
***
## Exercise 10
Go to _exercise10.js_
Declare a class named `Administrator` that inherits from `User` class. Pass all properties inherited from `User` class to `Administrator`'s constructor. Define `Administrator` class's property named `role`.