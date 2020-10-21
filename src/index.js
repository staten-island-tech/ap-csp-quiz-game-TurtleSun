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
    `<img id="anime-image" src="${item.img}" alt="">
    <ul class="anime-list">
      <li id="anime-question anime">Question: ${item.question}</li>
    </ul>
    <ul id="anime-answers anime">Answers:
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


const showResults = function () {
  var numCorrect = 0;

  animeQuestions.forEach((ques) => {
    const userAnswer = document.querySelector(
      `input[name="${ques.number}"]:checked`
    ).value;
    if (userAnswer === `${ques.correctAnswer}`) {
      numCorrect++;
      document.getElementById(`${ques.number}`).style.backgroundColor =
        "rgb(10,200,110)";
    } else {
      document.getElementByC(`${ques.number}`).style.backgroundColor =
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
      var userAnswer = document.querySelector(
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