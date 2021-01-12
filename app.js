// import functions and grab DOM elements
import { countsAsYes } from "./utils.js";
const quizButton = document.getElementById("launch-quiz")
const secretDiv = document.getElementById("secret-div")
const percentDiv = document.getElementById("percent-div")
// initialize state


// set event listeners to update state and DOM
quizButton.addEventListener("click",() => {
    alert("Welcome to the Spartathlon Quiz!");

    const confirmation = confirm("Do you want to proceed")
    if (!confirmation) {return;}

    let correctAnswers = 0;
    const firstName = prompt("What is your first name?")
    const lastName = prompt("What is your last name?")
    const firstAnswer = prompt("is the Spartathlon a foot race?");

    if (countsAsYes(firstAnswer)){++correctAnswers;}
 
    const secondAnswer = prompt("is the race longer than 150 miles?");
    if (countsAsYes(secondAnswer)){++correctAnswers;}

   const thirdAnswer = prompt("do you have more than 36 hours to finish the race?");
   if (!countsAsYes(thirdAnswer)){++correctAnswers;}

   const resultsString = `Thank you for taking the quiz ${firstName} ${lastName}, you got ${correctAnswers} answers right!`;
   secretDiv.textContent = resultsString;

   if (correctAnswers === 3){
       secretDiv.classList.add("green");
       percentDiv.classList.add("green")
   }
   else if (correctAnswers === 2){
       secretDiv.classList.add("yellow");
       percentDiv.classList.add("yellow");
   }
    else {
        secretDiv.classList.add("red");
        percentDiv.classList.add("red");
    }

   percentDiv.textContent = `Your percent correct is ${Math.floor(correctAnswers /3*100)}\%`;
})