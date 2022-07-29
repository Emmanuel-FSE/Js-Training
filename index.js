let saveEl = document.getElementById("save-el")
let welcomeEl = document.getElementById("welcome-el")
let name = "Emmanuel Mutisya 👏"
let greeting = "Welcome back "
welcomeEl.textContent = greeting + name
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
count += 1
countEl.textContent = count
}


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textcontent = 0
    count = 0
}


let num1 = 8
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl =document.getElementById("sum-el")
function add(){
    let result = num1 + num2
   sumEl.textContent = "Sum: " + result 

}
function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result  
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result 
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result 
}

