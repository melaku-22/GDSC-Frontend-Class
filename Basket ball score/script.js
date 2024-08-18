// js for home part
let first_counter = document.getElementById("first_counter")
let addOne = document.getElementById("add-one")
let addTwo = document.getElementById("add-two")
let addThree = document.getElementById("add-three")

var currentNumber=parseInt(first_counter.textContent);

addOne.addEventListener('click',function(){
    var currentNumber=parseInt(first_counter.textContent);
    first_counter.textContent = currentNumber + 1;
})

addTwo.addEventListener('click',function(){
    var currentNumber=parseInt(first_counter.textContent);
    first_counter.textContent = currentNumber + 2;
})
addThree.addEventListener('click',function(){
    var currentNumber=parseInt(first_counter.textContent);
    first_counter.textContent = currentNumber + 3;
})

// js for the guest part

let second_counter = document.getElementById("second_counter")
let addOne_s = document.getElementById("add-one-s")
let addTwo_s= document.getElementById("add-two-s")
let addThree_s = document.getElementById("add-three-s")

var currentNumber2=parseInt(second_counter.textContent);

addOne_s.addEventListener('click',function(){
    var currentNumber2=parseInt(second_counter.textContent);
    second_counter.textContent = currentNumber2 + 1;
})

addTwo_s.addEventListener('click',function(){
    var currentNumber2=parseInt(second_counter.textContent);
    second_counter.textContent = currentNumber2 + 2;
})
addThree_s.addEventListener('click',function(){
    var currentNumber2=parseInt(second_counter.textContent);
    second_counter.textContent = currentNumber2 + 3;
})



