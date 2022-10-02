const startBtn = document.querySelector("#start-button");
const quizContainer = document.querySelector("#quiz");
const highScores = document.querySelector("#high-scores")
highScores.addEventListener("click", viewScores)
startBtn.addEventListener("click", question1);
let scoreBoard = JSON.parse(localStorage.getItem("scoresBoard"))


function startTimer() {
  let time = document.getElementById("time-value");
  let timer = time.textContent - 1;
  time.innerHTML = timer;
}

function wrongAnswer() {
  let time = document.getElementById("time-value");
  time.innerHTML = time.textContent - 10;
}

function saveScore() {
  const timeValue = document.querySelector("#time-value").textContent;
  let initials = document.querySelector("#initials-for-score").value
  let scores = [`${initials}:${timeValue}`]
  scoreBoard.push(scores)
  localStorage.setItem("scoresBoard", JSON.stringify(scoreBoard)); 
  location.reload()
  return false
}

function question1() {
  window.startCountdown = setInterval(startTimer, 1000);

  quizContainer.innerHTML = `
    <h1 class="text-center">Commonly used data types DO NOT include:</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. strings</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. booleans</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. alerts</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. numbers</a></li>
        </ul>`;
  document.querySelector("#answer1").addEventListener("click", wrongAnswer);
  document.querySelector("#answer2").addEventListener("click", wrongAnswer);
  document.querySelector("#answer3").addEventListener("click", question2);
  document.querySelector("#answer4").addEventListener("click", wrongAnswer);
}

function question2() {
  quizContainer.innerHTML = `
    <h1 class="text-center">The condition in an if/else if statement is enclosed with___:</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. quotes</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. curly brackets</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. parenthesis</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. square brackets</a></li>
        </ul>`;
  document.querySelector("#answer1").addEventListener("click", wrongAnswer);
  document.querySelector("#answer2").addEventListener("click", wrongAnswer);
  document.querySelector("#answer3").addEventListener("click", question3);
  document.querySelector("#answer4").addEventListener("click", wrongAnswer);
}

function question3() {
  quizContainer.innerHTML = `
    <h1 class="text-center">Arrays in Javascript can be used to store<br> ____</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. numbers and strings</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. other arrays</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. booleans</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. all of the above</a></li>
        </ul>`;
  document.querySelector("#answer1").addEventListener("click", wrongAnswer);
  document.querySelector("#answer2").addEventListener("click", wrongAnswer);
  document.querySelector("#answer3").addEventListener("click", wrongAnswer);
  document.querySelector("#answer4").addEventListener("click", question4);
}

function question4() {
  quizContainer.innerHTML = `
    <h1 class="text-center">A very useful tool used during development and debugging for printing content to the debugger is:</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. Javascript</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. terminal/bash</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. for loops</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. console.log</a></li>
        </ul>`;
  document.querySelector("#answer1").addEventListener("click", wrongAnswer);
  document.querySelector("#answer2").addEventListener("click", wrongAnswer);
  document.querySelector("#answer3").addEventListener("click", wrongAnswer);
  document.querySelector("#answer4").addEventListener("click", question5);
}

function question5() {
  quizContainer.innerHTML = `
    <h1 class="text-center">String values must be enclosed within _____ when being assigned to variables</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. commas</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. curly brackers</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. quotes</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. parenthesis</a></li>
        </ul>`;
  document.querySelector("#answer1").addEventListener("click", wrongAnswer);
  document.querySelector("#answer2").addEventListener("click", wrongAnswer);
  document.querySelector("#answer3").addEventListener("click", submitScore);
  document.querySelector("#answer4").addEventListener("click", wrongAnswer);
}

function submitScore() {
  clearInterval(startCountdown);
  const timeValue = document.querySelector("#time-value").textContent;
  quizContainer.innerHTML = `
  <h1 class="text-center"> Well Done!</h1>
  <h4> Your final Score is: ${timeValue}</h4>
  <form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter Initials">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="initials" class="sr-only"></label>
    <input  type=""text class="form-control" id="initials-for-score" placeholder="Initials">
  </div>
  <button type="submit" id="submit-score" class="btn btn-primary mb-2">Submit Score</button>
</form>
  `;

  document.querySelector("#submit-score").addEventListener("click", saveScore);
}

function viewScores() {

  quizContainer.innerHTML = `
  <h1 class="d-flex justify-content-center">Recent Scores:</h1>
  <div class="container d-flex justify-content-center">
  <h3 class="mt-5"><strong> ${scoreBoard}</strong></h3>
  </div>`


}
/*<h1 class="d-flex justify-content-center">Coding Quiz Challenge</h1>
 <span class="d-flex justify-content-center lead"><strong>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score/time by<br> ten seconds</strong></span>
 <div class="d-flex justify-content-center mt-5">
 <a class="btn btn-primary btn-lg" id="start-button" href="#" role="button">Start Quiz</a>
</div> */




