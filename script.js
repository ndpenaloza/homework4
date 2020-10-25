$(document).ready(function () {
  //Initial time and score variables

  var countDown = 60;
  var score = 0;

  // Question Index
  var questionIndex = 0;
  var questions = [
    {
      q: "Established in 1872, name the oldest National Park.",
      o: [ "Yellowstone National Park",
        "Denali National Park",
        "Canyonlands National Park",
        "Saguaro National Park" ],
      a: "Yellowstone National Park"
    },
    {
      q: "_______ is the largest National Park at 5,270 square miles.",
      o: [ "Joshua Tree National Park",
      "Sequoia National Park",
      "Death Valley National Park",
      "Yosemite National Park" ],
      a: "Death Valley National Park"
    },
    {
      q: "What National Park is known to have 2,000 documented stone arches?",
      o: [ "Great Smokies National Park",
      "Grand Canyon National Park",
      "Arches National Park",
      "Grand Tetons National Park"],
      a: "Arches National Park"
    },
    {
      q: "This watefall is the tallest waterfall in North America",
      o: [ "Yosemite Falls - Yosemite National Park",
      "Dark Hollow Falls - Shenandoah National Park",
      "Blue Hen Falls - Cuyahoga National Park",
      "Sol Duc Falls - Olympic National Park" ],
      a: "Yosemite Falls - Yosemite National Park"
    },
  ];

  // Start-Button
  $("#start-button").on("click", function(){
    // clear intro html elements
    $(".initial-look").empty();
    
    // start timer
    interval= setInterval(function() {
    countDown--;
    $("#clock").text("Seconds Remaining: " + countDown);

    // Stops quiz when time runs out
    if (countDown <= 0) {
      endQuiz();
    }
  }, 1000);

  //Generate Question
  generateQuestion();
});

// Selection question bank
var questionBank = document.querySelector(".question-bank");

function generateQuestion() {

  // Create question mark up in variable
  var questionMarkUp = `
      <div>
        <h4 id="question" class="text-center mt-3">${questions[questionIndex].q}</h4>
      </div>
      <div class="list-group mt-3 text-center">
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[0]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[1]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[2]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[3]}</button>
      </div>
    `;

    // Inserting Q/As to HTML 
    questionBank.innerHTML = questionMarkUp;
}

  questionBank.addEventListener("click", function (event) {
    // Check if answer is picked
    if (event.target.className.indexOf("answer-choice") > -1) {
      processAnswer(event);
    }
  });

  
  // Break down what happens if answer selected is correct or incorrect
  function processAnswer(event) {
    if (event.target.textContent === questions[questionIndex].a) {
      // Add 1 point to score
      score++;
    }
    // Subtract time
    else {
      countDown = countDown - 5;
    }

    // Move to next question
    questionIndex++;

    // Check if on the last question of quiz
    if (questionIndex === questionIndex.length) {
      endQuiz();
    }
    // If quiz is not over
    generateQuestion();
  };
  
  // End Quiz Function

  function endQuiz() {
    //clear interval
    clearInterval();
    //hide question
    questionBank.classList.add("hide");
    //update final score
    document.querySelector("#final-score").textContent = score;
  }
});