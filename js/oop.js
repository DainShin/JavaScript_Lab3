const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/

function Hamburger(bun, vegetables, cheeses, sauces, pattyType, pattyNum, toppings) {
    this.bun = bun;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.pattyType = pattyType;
    this.pattyNum = pattyNum;
    this.toppings = toppings;
    this.order = function() {
        output2.innerHTML =`
        > Bun type: ${this.bun}<br> 
        > Vagetables: ${this.vegetables}<br>
        > Cheeses: ${this.cheeses}<br>
        > Sauces: ${this.sauces}<br> 
        > Patty Type : ${this.pattyType}<br>
        > Patty Number: ${this.pattyNum}<br>
        > Toppings: ${this.toppings}`;
    }
}
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
var chikenBurger = new Hamburger("Brioche", ["tomato", "lettuce", "onion"], ["cheddar", "mozzarella"], ["sweet chilli sauce", "mayonnaise"], "chicken", 1, ["olives", "hot peppers"]);
chikenBurger.order();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS