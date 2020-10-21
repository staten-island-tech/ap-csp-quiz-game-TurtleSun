import {animeQuestions} from "./questions";

const DOMSelectors = {
    quizContainer : document.getElementById('quiz'),
    resultsContainer : document.getElementById('results'),
    submitButton : document.getElementById('submit')
};

const buildQuiz = function(){

  animeQuestions.forEach((item) => 
    DOMSelectors.quizContainer.insertAdjacentHTML(
        "beforeend",
    `<img class="anime-image" src="${item.img}" alt="">
    <ul class="anime-list">
      <li class="anime-question anime">Question: ${item.question}</li>
    </ul>
    <ul class="anime-answers anime">Answers:
      <li>
        <input type="radio" name="${item.number}" value="${item.answers.a}">
        <label for="${item.answers}">${item.answers.a}</label>
      </li>
      <li>
        <input type="radio" name="${item.number}" value="${item.answers.b}">
        <label for="${item.answers}">${item.answers.b}</label>
      </li>
      <li>
        <input type="radio" name="${item.number}" value="${item.answers.c}">
        <label for="${item.answers}">${item.answers.c}</label>  
      </li>
      <li>
        <input type="radio" name="${item.number}" value="${item.answers.d}">
        <label for="${item.answers}">${item.answers.d}</label>  
      </li>
    </ul>`
        )
    ); 
};

const showResults = function(){
  let numCorrect = 0;
  animeQuestions.forEach((question) => {
    
    const userAnswer = document.querySelector(`input[name="${question.number}"]:checked`).value;
    
    if (userAnswer === `${question.correctAnswer}`) {
      numCorrect++;
      document.getElementsByClassName(`${question.number}`).style.color = "light green";

    } else {
      document.getElementsByClassName(`${question.number}`).style.color = "red";
    }
  });
//console.log(numCorrect);
  DOMSelectors.resultsContainer.insertAdjacentHTML(
    "beforeend", `<li>${numCorrect} out of ${animeQuestions.length}</li>`);
};

DOMSelectors.submitButton.addEventListener('click', showResults);

buildQuiz();