var score = 0;
// var ourAns;
// function myfunction(val) {
//   ourAns = val;
// }
// function refresh(){
//     location.reload();
//     submission()
// }
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
var quesEL = document.getElementById("question");
quesEL.innerText = "What is " + num1 + " multiply by " + num2 + " ?";
var correctAns = num1 * num2;
function submission() {
  var ourAns = +document.getElementById("text").value;
  var finalScore = document.getElementById("score");
  console.log(ourAns, typeof ourAns, "b");
  console.log(correctAns, typeof correctAns, "c");
  if (ourAns === correctAns) {
    score = score + 1;

    console.log(score, typeof score);
    finalScore.innerText = "Score: " + score;
  } else {
    score = score - 1;
    finalScore.innerText = "Score: " + score;
  }
  //Generating the random numbers

  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);

  // applying it to the question

  var quesEL = document.getElementById("question");
  quesEL.innerText = "What is " + num1 + " multiply by " + num2 + " ?";

  //Correct answer

  //var finalScore = document.getElementById("score");
  //var correctAns = num1 * num2;
  correctAns = num1 * num2;
  //var ourAns = +document.getElementById("text").value;
  //   console.log(ourAns, typeof ourAns , "a" );

  var submitEL = document.getElementById("btn");
  //   submitEL.addEventListener("click", () => {

  document.getElementById("text").value = "";
  //   }
  //   );
}
