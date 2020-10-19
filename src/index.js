import {animeQuestions} from "./questions";

const DOMSelectors = {
    quizContainer : document.getElementById('quiz'),
    resultsContainer : document.getElementById('results'),
    submitButton : document.getElementById('submit')
};

const buildQuiz = function(){

  /* const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join(''); */



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
      document.getElementById(`${question.answers}`).style.color = "light green";

    } else {
      document.getElementById(`${question.answers}`).style.color = "red";
    }
  });

  DOMSelectors.resultsContainer.insertAdjacentHTML(
    "beforeend", `<li>${numCorrect} out of ${animeQuestions.length}</li>`);
};

DOMSelectors.submitButton.addEventListener('click', showResults);

buildQuiz();