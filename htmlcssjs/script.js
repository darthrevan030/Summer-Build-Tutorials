alert("I AM CONNECTED!!!!!")

// define functions 
// function addNumbers(){ 
//     let a = prompt("What is your first number?"); --> pops up and asks for input
//     let b = prompt("What is your second number?");
//     const result = parseInt(a) + parseInt(b);
//     alert("Your number is " + result);
// }

// Another Way to define functions
    // const addNumbers = function(){
    //     code
    // }

// Another Way to define functions
    // const addNumbers = () => {
    //     code
    // }

const addNumbers = () => {
    const firstNum = document.querySelector("#firstNum").value;
    const secondNum = document.querySelector("#secondNum").value;

    const result = parseInt(firstNum) + parseInt(secondNum);
    //alert("Your number is " + result);


    // create a new div from scratch for the result
    // const newDiv = document.createElement("div");
    // const buttonContainer = document.querySelector("#buttonSelector");
    // newDiv.innerHTML = "Your number is " + result;
    // buttonContainer.appendChild(newDiv);

    // doesnt require to create a new div from scratch, instead can simply update a previously made one
    // allows for pre-styling
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = "Your result is " + result;

}   

const changeBackgroundColor = () => {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}