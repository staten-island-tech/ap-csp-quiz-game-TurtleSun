import {animeQuestions} from "./questions";

const DOMSelectors = {
    quizContainer = document.querySelector('quiz'),
    resultsContainer = document.querySelector('results'),
    submitButton = document.querySelector('submit'),
};

function buildQuiz(){
  const output = [];

  animeQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];

      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  DOMSelectors.quizContainer.innerHTML = output.join('');
}

function showResults(){
  const answerContainers = DOMSelectors.quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  animeQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  DOMSelectors.resultsContainer.innerHTML = `${numCorrect} out of ${animeQuestions.length}`;
}

buildQuiz();

DOMSelectors.submitButton.addEventListener('click', showResults);
