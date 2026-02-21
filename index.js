
console.log("Hello");
console.log("I like pizza");

//window.alert("This is an alert!");
//window.alert("I like pizza");

//This is a comment

/*
This
is 
a 
comment
*/
/*
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza";

let x;
x = 100;

console.log(x);
let age1 = 25;
let price =10.99;
let gpa = 2.1;

console.log(age1);
console.log(price);
console.log(gpa);
console.log(typeof age1)
console.log(`You are ${age1} years old`);
console.log("You are ",age1, "years old");
console.log("The price is",price);
console.log("Your gpa is:", gpa);


let firstName = "Bbazs";
let favouritefood = "Pizza";
let email = "Bbazs.chanel@gmail.com"

console.log(typeof firstName);
console.log( firstName);
console.log("You like ",favouritefood,".");
console.log("Your email is", email);




let online= true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(` ${firstName} is online: ${online}`);
console.log(`Enrolled: ${isStudent}`);
console.log(`Is this car for sale: ${forSale}`);



let fullName = "Bbazs";
let student = true;
let age2 = 17;

document.getElementById("b1").textContent = `Your name is ${fullName}`;
document.getElementById("b2").textContent = student;
document.getElementById("b3").textContent = age2;

let students =30;
*/
/*students = students+1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 2;
let extraStudents = students % 3;
*/
/*
students += 1;
students-=1;
students*=2;

students++;

console.log(students);
//console.log(extraStudents);

let result= 1 + 2 * 3 + 4 ** 2;

console.log(result);

*/
/*
let username;
username = window.prompt("What's your username?");
console.log(username);
*/

let username;
document.getElementById("mysubmit").onclick = function(){

    username = document.getElementById("MyText").value;
    console.log(username);
    document.getElementById("MyH1").textContent = `Hello ${username}`


}

/*
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age, typeof age);
*/


const PI = 3.14159;
let circumference;
let radius;


document.getElementById("mysubmit1").onclick = function(){

    radius = document.getElementById("MyRText").value;
    radius = Number(radius);
    circumference = 2 *PI * radius;
    document.getElementById("MyH2").textContent =`A kör kerülete=${circumference} cm`;
}


const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
let count = 0;


increase.onclick = function(){
    count++;
    countLabel.textContent = count;


}
decrease.onclick = function(){
    count--;
    countLabel.textContent = count;


}
reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;


}


