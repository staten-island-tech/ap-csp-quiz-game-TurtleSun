import {animeQuestions} from "./questions";

const DOMSelectors = {
<<<<<<< HEAD
    quizContainer: document.querySelector('quiz'),
    resultsContainer: document.querySelector('results'),
    submitButton: document.querySelector('submit'),
=======
    quizContainer : document.getElementById('quiz'),
    resultsContainer : document.getElementById('results'),
    submitButton : document.getElementById('submit')
>>>>>>> bd96b8aaf936919deca4a6b65e9617513ab65e8b
};

const buildQuiz = function(){
    e.preventDefault();
    DOMSelectors.quizContainer.innerHTML = ""; 
    animeQuestions.forEach((item) => 
    DOMSelectors.quizContainer.insertAdjacentHTML(
        "afterbegin",
      ``
        )
    );
};


const showResults = function(){
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