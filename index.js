
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
    circumference = 2 *Math.PI * radius;
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

let x =3;
let y = 2;
let z=1;
//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
/*
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(max);
console.log(min);
*/
/*
const min = 50;
const max = 100;

let randomNum =Math.floor(Math.random()*(max-min))+min;
console.log(randomNum);
*/
const myButtonn =document.getElementById("myButtonn");
const mylabeln1 =document.getElementById("mylabeln1");
const mylabeln2 =document.getElementById("mylabeln2");
const mylabeln3 =document.getElementById("mylabeln3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButtonn.onclick=function(){

randomNum1 = Math.floor(Math.random() *max)+min;
randomNum2 = Math.floor(Math.random() *max)+min;
randomNum3 = Math.floor(Math.random() *max)+min;
mylabeln1.textContent =randomNum1;
mylabeln2.textContent =randomNum2;
mylabeln3.textContent =randomNum3;

}
const mytext1 = document.getElementById("mytext1");
const mysubmit2 = document.getElementById("mysubmit2");
const resultElement = document.getElementById("resultElement");
let age;

mysubmit2.onclick = function(){
    age = mytext1.value;
    age = Number(age);

if(age >= 100){

    
    resultElement.textContent = `You are too old to enter this site.`
}
else if(age >=18){
    
    resultElement.textContent = `You are old enough to enter this website.`



}
else if(age < 0){

   
    resultElement.textContent = `Your age can not be below 0.`

}


else{
    
    resultElement.textContent = `You are not old enough to enter this website.`

}







}


/*
let age = 120;
if(age >= 100){

    console.log("You are too old to enter this site");
}
else if(age >=18){
    console.log("You are old enough to enter this website");




}
else if(age < 0){

    console.log("Your age can not be below 0");

}


else{
    console.log("You are not old enough to enter this website");


}
*/


const myCheckbox = document.getElementById("myCheckbox");
const masterCard = document.getElementById("masterCard");
const visaBTn = document.getElementById("visaBTn");
const paypalBTn = document.getElementById("paypalBTn");
const mysubmit3 = document.getElementById("mysubmit3");


const subresult = document.getElementById("subresult");
const radioresult = document.getElementById("radioresult");

mysubmit3.onclick = function(){

    if(myCheckbox.checked){
        subresult.textContent =`You are subscribed`;


    }
    else{

        subresult.textContent =`You are not subscribed`;
    }
    if(visaBTn.checked){

        radioresult.textContent =`You are paying with Visa`;

    }
    else if(masterCard.checked){
        radioresult.textContent =`You are paying with Mastercard`;

    }
    else if(paypalBTn.checked){
        radioresult.textContent =`You are paying with Paypal`;

    }
    else{
        radioresult.textContent =`You mus select a payment type`;

    }
}

let old =21;
let message = age >=18 ? "You are an adult" : "You are a minor";
console.log(message);

let purchaseAmount =125;
let discount = purchaseAmount >=100? 10: 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`)

let day ="pizza";
switch(day){

    case 1:
        console.log("It is Monday.");
        break;
     case 2:
        console.log("It is Ruesday.");
        break;
    case 3:
        console.log("It is Wednesday.");
        break;
    case 4:
        console.log("It is Thursday.");
        break;
    case 5:
        console.log("It is Friday.");
        break;
    case 6:
        console.log("It is Saturday.");
        break;
    case 7:
        console.log("It is Sunday.");
        break;
    default:
        console.log(`${day} is not a day.`)
}
/*
let testcore=90;
let testgrade;
const resultelement5 = document.getElementById("resultelement5");

switch(true){
    case testcore>=90:
        testgrade = "A";
        break; 
}
console.log(testgrade)
*/

const testscore = document.getElementById("mytext5");
const resultelement6 = document.getElementById("resultelement6");
let testgrade;


mysubmit5.onclick = function(){
    
        let score = Number(testscore.value);

        switch(true){
        case score >=90:
            testgrade = "A";
            break;

        
        case score >=80:
            testgrade = "B";
            break;

        
        case score >=60:
            testgrade = "C";
            break;

        
        case score >=40:
            testgrade = "D";
            break;

        case score >=20:
            testgrade = "E";
            break;
        default:
            testgrade = "F" ;

        }
        resultelement6.textContent = `Your grade:${testgrade}`;
    }


    let username2 ="Bbazs     ";
    username2 =username2.trim();
    //username2 =username2.toUpperCase();
    username2 =username2.toLowerCase();
    username2 =username2.repeat(2);
    let result2 = username2.startsWith(" ");
    
    console.log(username2.charAt(2));
    console.log(username2.indexOf("b"));
    console.log(username2.lastIndexOf("b"));
    console.log(username2.length);
    console.log(username2);
    console.log(result2);



        
    const gomb = document.getElementById("gomb");

gomb.addEventListener("click", function(){
    gomb.classList.toggle("active");
});
       


let phoneNumber = "123-456-7890";


phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");


console.log(phoneNumber);


const fullName2 ="Bbazs Breki";

//let firstName = fullName2.slice(0, 5);
//let lastName = fullName2.slice(5);

//let firstChar =fullName2.slice(0, 1);
//let lastChar =fullName2.slice(-1);


//console.log(fullName2);

//console.log(firstName);
//console.log(lastName);

//console.log(firstChar);
//console.log(lastChar);
let firstName = fullName2.slice(0, fullName2.indexOf(" "));
let lastName = fullName2.slice(fullName2.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);




const Email = "Bbazs.chnael@gmail.com";
let UserName3 = Email.slice(0, Email.indexOf("@"));
let extension = Email.slice( Email.indexOf("@"));
console.log(UserName3)
console.log(extension)



//let Username4 =window.prompt("Enter your usernamer");
//no method Chaining
 
/*

Username4 = Username4.trim();
let letter = Username4.charAt(0);
letter =letter.toLocaleUpperCase();

let extraChars = Username4.slice(1);
extraChars = extraChars.toLowerCase();
Username4 = letter + extraChars
*/

//Username4= Username4.trim().charAt(0).toUpperCase()+Username4.trim().slice(1).toLowerCase();

//console.log(Username4)



// AND = &&
// OR ||
// NOT = !
const temp = 20;
if(temp < 0 || temp > 30){
    console.log("The weather is bad");
}

else{
    console.log("The weather is good");
}

const isSunny = false;

if(! isSunny){
    console.log("It is Cloudy");

}
else{

    console.log("It is Sunny");
}




const pika = 3.14;
if(pika === 3.14){
    console.log("It is pi");

}
else{
console.log("It is not pi");

}

let username5 ="";
while(username5 === "" || username5===null){
    username5 =window.prompt("Enter your name")

    

}

console.log(`Hello ${username5}`);
const resultelement7 = document.getElementById("resultelement7");
resultelement7.textContent = `Hello ${username5}`;