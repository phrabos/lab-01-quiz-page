// import functions and grab DOM elements
const quizButton = document.getElementById("launch-quiz")
const secretDiv = document.getElementById("secret-div")
// initialize state


// set event listeners to update state and DOM
quizButton.addEventListener("click",() => {
    alert("Welcome to the quiz!");

    const confirmation = confirm("Do you want to proceed")
    if (!confirmation) {
        console.log("clicked cancel")
        return;
    }
    console.log(confirmation)

    let correctAnswers = 0;
    const firstName = prompt("What is your first name?")
    const lastName = prompt("What is your last name?")
    console.log(firstName, lastName);

    const firstAnswer = prompt("is the Spartathlon a foot race?");
    console.log(firstAnswer)

    if (firstAnswer.charAt(0).toUpperCase() === 'Y'){
        console.log("you got it right");
        ++correctAnswers;
    }
    else {
        console.log("failed!!!")
    }
    console.log(correctAnswers)
 

})