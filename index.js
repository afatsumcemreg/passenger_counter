// // document.getElementById("count-el").innerText = 5

// let count = 0
// console.log(count)

// WRITE YOUR FIRST JAVASCRIPT FILE

// // 1. Create a variable, myAge, and set its value to your age
// let my_age = 33

// // 2. Log the myAge variable to the console
// console.log(my_age)

// BASIC MATHEMATICAL OPERATIONS

// let operate1 = 5 + 7
// console.log(operate1)

// let operate2 = 5 - 7
// console.log(operate2)

// let operate3 = 5 * 7
// console.log(operate3)

// let operate4 = 5 / 7
// console.log(operate4)

// let first_batch = 5
// let second_batch = 7
// let count5 = first_batch + second_batch  // we can add here another mathematical operations
// console.log(count5)

// // 1. Create two variables, myAge and humanDogRatio     1 human year = 7 dog years
// let myAge = 33
// let humanDogRatio = 7
// // 2. Multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio
// // 3. Log myDogAge to the console
// console.log(myDogAge)

// REASSIGNING AND INCREMENTING

// // Reassigning

// let num = 5
// num = 4

// // increment
// num  = num + 1  // 4 + 1 = 5
// num = num + 10
// num = num - 4
// console.log(num)

// // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// // Decrease it down to 25, and then finally increase it to 70
// // Console.log the value after each step
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// ADDING A BUTTON

// THE ONCLICK EVENT LISTENER

// initialize the count as  0
// listen for click on the increment button
// inctement the count variable when the button is clicked
// change the count-el in the html to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }

// USING FUNCTIONS TO WRITE LESS CODE

// Setting up the the race 🏎 🏎 🏎

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()
// countdown()
    
// WRITE YOUR FIRST FUNCTION 

// create a function tha logs out the number 42 to the console
// call or invoke the function
// function num() {
//     console.log(42)
// }

// num()

// WRITE A FUNCTION THAT LOGS THE SUM

// let lap1 = 34
// let lap2 = 33 
// let lap3 = 36

// // create a function that logs out the sum of all the lap times
// function log_lap_time() {
//     let total_time = lap1 + lap2 + lap3
//     console.log(total_time)
// }

// log_lap_time()

// WRITE A FUNCTION THAT INCREMENTS

// let laps_completed = 0
// // create a function that increments the laps_completed variable with one
// // run it three times

// function increment_lap_time() {
//     laps_completed = laps_completed + 1
// }

// increment_lap_time()
// increment_lap_time()
// increment_lap_time()

// console.log(laps_completed)

// INCREMENT ON CLICKS

// document.getElementById("count-el").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the html to reflect the new count
// let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
// }

// DISPLAY THE COUNT

// change the count-elin the html to reflect the new count
// let countEl = document.getElementById("count-el")   // pass in arguments
// console.log(countEl)
// let count = 0
// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// THE DOCUMENT OCJECT MODEL (DOM) (aka how youe use javascript to modify a website)

// document = html document
// object: document = {object}, here html document is an object
// model is basically a representation or modelation
// real thing = <h2 id="count-el">0</h2>
// model: let countEl = document.getElementById("count-el")

// DISPLAY THE COUNT WITH INNERTEXT

// grab the count-el element, store it in a countEl variable

// let countEl = document.getElementById("count-el")
// let count = 0
// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
//     countEl.innerText = count
// }

// // CREATE THE SAVE BUTTON
// // 1. create a function called save(), which logs out the count when it's called
// function save() {
//     console.log(count)
// }

// WHAT IS A STRING?

// string is a data type in JavaScript.

// WRITE YOUR FIRST STRING VARIABLE
// strings are used in all over the place in software
let username = 'Per'

// create a variable called message that stores the string 'You have tree new notifications.'
let message = 'You have tree new notifications'

// create a variable called messageToUser that contains the message we have logged
let messageToUser = message + ', ' + username + '!'
// console.log(messageToUser)

// LOG A GETTING TO THE VARIABLE
// create two variables called name and greeting. the name variable should store your name and the greting should store e.g. 'Hi, my name is '

// create a third variable called myGreeting thaat contatenates the two strings
// Log myGreeting to the console

let name = 'Mustafa Germec'
let greeting = 'Hi, my name is '
let myGreeting = greeting + name
// console.log(myGreeting)

// STRING VS. NUMBERS
let point = 4
let bonusPoints = '10'
let totalPoints = point + bonusPoints
// console.log(totalPoints)

console.log(2 + 5)  // 7 
console.log('2' + '5') // '25'
console.log('4' + 5)    // '45'
console.log(2 +'100')   // '2100'

// RENDER A WELCOME MESSAGE

// create the welcome-el paragraph and store it a variable called welcomeEl
// create two variables called myname and mygreeting that contains your name and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById('welcome-el') 
let myname = 'Mustafa Germec'
let mygreeting = 'Welcome back '
welcomeEl.innerText = mygreeting + myname

// IMPROVE THE MESSAGE WITH STRING CONCATENATION
// add an emoji to the end 👋
// write your code below here
// hint: count = count + 1

// welcomeEl.innerText = welcomeEl.innerHTML + '👋'
welcomeEl.innerText += '👋'

// USE PLUS EQUAL FOR COUNT

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     // count = count + 1
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// CREATE THE SAVE FEATURE

// // 1. grab the save-el paragraph and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0

// console.log(saveEl)

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     // 2. create a variable that contains both the count and the dash separator, i.e, '12 - '
//     let countStr = count + ' - '
//     // render the variable in the saveEl using innerText
//     saveEl.textContent += countStr
//     // NB: make sure to not delete the existing content of the paragraph
//     countEl.textContent = 0
//     count = 0
//     console.log(count)
// }

// DEBUGGING ONLINE

// to add a space after dash, we can use the method 'contenText' instead of 'innerText'.
// to solve some problems, we can use the mdn web docs

// SET THE COUNT TO 0
// 1. grab the save-el paragraph and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. create a variable that contains both the count and the dash separator, i.e, '12 - '
    let countStr = count + ' - '
    // render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
    console.log(count)
}