# Putting it All Together: JavaScript Fundamentals

## Learning Goals

- Practice using `const` and `let` to declare variables in JavaScript
- Practice working with the ternary operator.
- Practice using the strict equality operator (`===`)
- Practice using the `&&` operator
- Use built-in objects like `Math` to accomplish complex tasks
- Concatenate strings with the `+` operator
- Interpolate variables and other JavaScript expressions inside template literals

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

3. Write a ternary expression that will evaluate to the `string` "Welcome alice123!" if the value of `username` is strictly equal to "alice123" and the value of `password` is strictly equal to "flatironschool". Otherwise, the ternary expression should evaluate to the string "Invalid username or password! Please try again!" Store the result of the ternary expression into a variable called `loginValidationPhrase` that is declared using `const`.

4. Create a variable called `randomNumber` that is defined using `const` and is set to a `number` that is a random number between 1 and 10.

Hint: You can use `Math.random()` to generate a random number between 0 and 1.

5. Create a variable called `luckyNumberPhrase` that is defined using `const` and is set to a `string` that incorporates the value of `randomNumber` into the string using string concatenation or string interpolation. For example, if `randomNumber` has the value of 7, the value of `luckyNumberPhrase` should be "Your lucky number is 7!"

***

After you have all the tests passing, feel free to commit and push your changes
up to GitHub, but this is not an official Flatiron School / Canvas lab, so you will not be able to submit your work to Canvas.