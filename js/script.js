//Generating Variables
// Before Pressing the Submit Button
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let quesEL = document.getElementById("question");
quesEL.innerText = "What is " + num1 + " multiply by " + num2 + " ?";
let correctAns = num1 * num2;
let finalScore = document.getElementById("score");
let score = 0;

//After Pressing the Submit button
function submission() {
  let ourAns = document.getElementById("text").value;
  if (ourAns == correctAns) {
    score = score + 1;
    finalScore.innerText = "Score: " + score;
  } else {
    score = score - 1;
    finalScore.innerText = "Score: " + score;
  }
  //Again creating the numbers and assigning the correct answer
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  quesEL.innerText = "What is " + num1 + " multiply by " + num2 + " ?";
  correctAns = num1 * num2;
  document.getElementById("text").value = "";
}

//EXTRA INFORMATION
// var ourAns;
// function myfunction(val) {
//   ourAns = val;
// }
