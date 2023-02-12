//! a < p > with red text that says “Hey I’m red!”
//reference the container div that already exists
const container = document.querySelector("#container");

// make a <p> 
const p = document.createElement("p");

//text to <p>
p.textContent = "Hey I'm red!";

//add color to <p>
p.style.color = "red";

//stick the <p> as a child to parent #container div
container.appendChild(p);

//! an < h3 > with blue text that says “I’m a blue h3!”
//make a <h3>
const h3 = document.createElement("h3");

//text h3
h3.textContent = "I'm a blue h3!";

//add color blue text
h3.style.color = "blue";

// append that boi
container.appendChild(h3);

//! a < div > with a black border and pink background color with the following elements inside of it:
//! another < h1 > that says “I’m in a div”
//! a < p > that says “ME TOO!”

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";


const h1 = document.createElement("h1");
h1.innerHTML = "I'm in a div";
div.appendChild(h1);

const p1 = document.createElement("p1");
p1.innerHTML = "ME TOO!";
div.appendChild(p1);

container.appendChild(div);







// Hint for this one: after creating the < div > with createElement, append the < h1 > and < p > to it before adding it to the container.
