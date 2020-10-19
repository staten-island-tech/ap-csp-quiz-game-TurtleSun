import {animeQuestions} from "./questions";

const DOMSelectors = {
    quizContainer = document.querySelector('quiz'),
    resultsContainer = document.querySelector('results'),
    submitButton = document.querySelector('submit'),
};

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

DOMSelectors.submitButton.addEventListener('click', showResults);
