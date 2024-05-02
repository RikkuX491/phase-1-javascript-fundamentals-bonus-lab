// Instruction # 1 - solution
const username = "alice123"

// Instruction # 2 - solution
const password = "flatironschool"

// Instruction # 3 - solution
let isAuthorized

if(username === "alice123" && password === "flatironschool"){
    isAuthorized = true
}

else{
    isAuthorized = false
}

// Instruction # 4 - solution
const loginValidationPhrase = isAuthorized ? "Welcome " + username + "!" : "Invalid username or password!"

// Instruction # 5 - solution
const randomNumber = Number.parseInt(Math.random() * 10) + 1

// Instruction # 6 - solution
const luckyNumberPhrase = `Your lucky number is ${randomNumber}!`