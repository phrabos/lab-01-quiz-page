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

    const firstName = prompt("What is your first name?")
    const lastName = prompt("What is your last name?")
    console.log(firstName, lastName);


})