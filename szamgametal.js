


const minNum =1;
const maxNum =100;
const answear =Math.floor(Math.random()*(maxNum - minNum +1)) +minNum;
console.log(answear);

let attempts =0;
let guess;
let running =true;
while(running){

    guess =window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    

    if(isNaN(guess)){
        window.alert("Pleas enter a valid number")


    }
    else if(guess < minNum || guess >maxNum){
        window.alert("Pleas enter a valid number")
    }
    else{
        attempts++;
        if(guess<answear){

            window.alert("Too low! try again")

        }
        else if(guess>answear){

            window.alert("Too high! try again")

        }
        else{

            window.alert(`Correct! The answear was ${answear}. It took you ${attempts} attemps`)
            running = false;
        }


    }
    



}

