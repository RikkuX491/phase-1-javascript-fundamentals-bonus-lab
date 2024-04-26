# Putting it All Together: JavaScript Fundamentals

## Learning Goals

- Practice using `const` and `let` to declare variables in JavaScript
- Practice working with the ternary operator
- Practice using the strict equality operator (`===`)
- Practice using the `&&` operator
- Concatenate strings with the `+` operator
- Interpolate variables and other JavaScript expressions inside template literals
- Use the built-in `Math` object to accomplish complex tasks
- Employ operators to perform arithmetic and assign values to variables

## Introduction

We're going to review the JavaScript Fundamentals that you've learned.

In the browser's JavaScript console, we can test out all of the code that we've written. Remember that we can't redeclare variables previously declared with
`const` or `let`, so the page may have to be refreshed (which wipes away all
declared variables) or different variable names can be chosen than those that are already used.

## Getting Started

If you haven't already, fork and clone this lab into your local environment.
Remember to **fork** a copy into your GitHub account first, then **clone** from
that copy. Navigate into its directory in the terminal, then run `code .` to
open the files in Visual Studio Code.

Next, run `npm install` to install the dependencies then run the test suite with
the `npm test` command.

## Assignment

There are five challenges we need you to solve. Code your solution in
`index.js`. We'll provide some brief instructions here, but you should really
rely on the test failure messages to guide your code.

## Instructions

1. Create a variable called `username` that is defined using `let` and is set to a `string` with the text "alice123".

2. Create a variable called `password` that is defined using `let` and is set to a `string` with the text "flatironschool".

3. Write a ternary expression that will evaluate to the `string` "Welcome alice123!" if the value of `username` is strictly equal to "alice123" and the value of `password` is strictly equal to "flatironschool". Otherwise, the ternary expression should evaluate to the string "Invalid username or password!" Store the result of the ternary expression into a variable called `loginValidationPhrase` that is declared using `const`. For the "Welcome alice123!" string, you must use string concatenation to combine the following parts of the string together in this exact order: The "Welcome " string, the `username` variable, and the "!" string.

Hint: You can concatenate strings with the `+` operator.

4. Create a variable called `randomNumber` that is defined using `const` and is set to a `number` that is a random number between 1 and 10.

Hint: You can use `Math.random()` to generate a floating-point random number that's greater than or equal to 0 and less than 1.

5. Create a variable called `luckyNumberPhrase` that is defined using `const` and is set to a `string` that begins with "Your lucky number is " followed by the value of the `randomNumber` variable and "!". For example, if `randomNumber` has the value of 7, the value of `luckyNumberPhrase` should be "Your lucky number is 7!" You must use string interpolation to combine the following parts of the string together in this exact order: The "Your lucky number is " `string`, the `randomNumber` variable, and the "!" `string`.

Hint: You can interpolate variables and other JavaScript expressions inside template literals, which are simply strings wrapped in backticks `` rather than single or double quotes. Template literals enable us to interpolate the value of a variable into a string by wrapping the variable in curly braces preceded by a dollar sign like this: ${yourVariable}.

***

After you have all the tests passing, feel free to commit and push your changes
up to GitHub, but this is not an official Canvas lab, so you will not be able to submit your work to Canvas.