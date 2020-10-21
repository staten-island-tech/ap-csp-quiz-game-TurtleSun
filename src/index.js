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
    `<ul class="container">
    <li class="anime-image"><img  src="${item.img}" alt=""></li>
    <ul class="anime-list">
      <li class="anime-question anime">Question: ${item.question}</li>
    </ul>
    <ul class="anime anime-answers">Answers:
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
    </ul>
    </ul>`
        )
    ); 
};


const showResults = function () {
  let numCorrect = 0;

  animeQuestions.forEach((ques) => {
    const userAnswer = document.querySelector(
      `input[name="${ques.number}"]:checked`
    ).value;
    if (userAnswer === `${ques.correctAnswer}`) {
      numCorrect++;
      document.getElementsByClassName(`${ques.number}`).style.backgroundColor =
        "rgb(10,200,110)";
    } else {
      document.getElementsByClassName(`${ques.number}`).style.backgroundColor =
        "rgb(200,100,110)";
    }

    DOMSelectors.resultsContainer.insertAdjacentHTML(
      "beforeend", `<li>${numCorrect} out of ${animeQuestions.length}</li>`);
  });
};

/* const showResults = function(){
  let numCorrect = 0;
  animeQuestions.forEach((ques) => {
    if (document.querySelector(`input[name="${ques.number}"]:checked`)) {
      const userAnswer = document.querySelector(
        `input[name="${ques.number}"]:checked`
      ).value;
      if (userAnswer == `${ques.correctAnswer}`) {
        numCorrect++;
        document.getElementsByClassName(`${ques.number}`).style.color = "green";
      } /* else if (userAnswer != `${ques.correctAnswer}`) {
        document.getElementsByClassName(`${ques.number}`).style.color = "red";
      console.log(ques.number);
      } 
    
    };
  DOMSelectors.resultsContainer.insertAdjacentHTML(
    "beforeend", `<li>${numCorrect} out of ${animeQuestions.length}</li>`);
});
} */
DOMSelectors.submitButton.addEventListener('click', showResults);

buildQuiz();