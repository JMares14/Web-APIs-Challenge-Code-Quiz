const startBtn = document.querySelector('#start-button');
const quizContainer = document.querySelector('#quiz');
const time = document.querySelector("#time-value")
startBtn.addEventListener("click",loadQuiz);

function wrongAnswer() {
    time - 5
}

function loadQuiz() {
    quizContainer.innerHTML`
    <h1 class="text-center">Commonly used data types DO NOT include:</h1>
    <ul class="">
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer1" href="#" role="button">1. strings</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer2" href="#" role="button">2. booleans</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer3" href="#" role="button">3. alerts</a></li>
            <li><a class="btn btn-primary btn-lg mt-5 ml-5" id="answer4" href="#" role="button">4. numbers</a></li>
        </ul>`;
        document.querySelector("#answer1").addEventListener("click",);
        document.querySelector("#answer2");
        document.querySelector("#answer3");
        document.querySelector("#answer4");
        
    
 }


 /*<h1 class="d-flex justify-content-center">Coding Quiz Challenge</h1>
 <span class="d-flex justify-content-center lead"><strong>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score/time by<br> ten seconds</strong></span>
 <div class="d-flex justify-content-center mt-5">
 <a class="btn btn-primary btn-lg" id="start-button" href="#" role="button">Start Quiz</a>
</div> */