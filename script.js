$(document).ready(function () {
  //Initial time and score variables

  var countdown = 60;
  var score = 0;

  // Question Index
  var questionIndex = 0;
  var questions = [
    {
      q: "Established in 1872, name the oldest National Park.",
      o: [ "Yellowstone National Park", "Denali National Park", "Canyonlands National Park", "Saguaro National Park" ],
      a: "Yellowstone National Park"
    },
    {
      q: "_______ is the largest National Park at 5,270 square miles.",
      o: [ "Joshua Tree National Park", "Sequoia National Park", "Death Valley National Park" "Yosemite National Park" ],
      a: "Death Valley National Park"
    },
    {
      q: "What National Park is known to have 2,000 documented stone arches?",
      o: [ "Great Smokies National Park", "Grand Canyon National Park", "Arches National Park", "Grand Tetons National Park"],
      a: "Arches National Park"
    },
    {
      q: "This watefall is the tallest waterfall in North America",
      o: [ "Yosemite Falls - Yosemite National Park", "Dark Hollow Falls - Shenandoah National Park", "Blue Hen Falls - Cuyahoga National Park", "Sol Duc Falls - Olympic National Park" ],
      a: "Yosemite Falls - Yosemite National Park"
    }


var startButton = document.getElementById("start-button");
var secondsRemaining = document.getElementById("seconds-remaining");
// Click the start button, first button appears, timer starts to count down 
// Need event listener for start button
// Need to make time count down


function quizTimer() {
    var timeSubtractor = quizTiming(function() {
      countDown--;
      secondsRemaining.textContent = countDown + " seconds left";
  
      if(countDown === 0) {
        clearInterval(timeSubtractor);
        timesUpMessage();
      }
  
    }, 1000);
  }

  function timesUpMessage() {
    secondsRemaining.textContent = "Time's up, fool!";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();

  function generateFunctino({
    
    var questionMarkUp = 
      <div>
        <h3 id="question" class="text-center">${questions[questionIndex].q}</h3>
      </div>
      <div class="list=group text-center">
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[0]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[1]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[2]}</button>
        <button type="button" class="answer-choice list-group-item list-group-item-action">${questions[questionIndex].o[3]}</button>
      </div>

  questionBank.innerHTML(questionMarkUp);

  questionBank.addEventListener("click", function(event)) {
    //check if answer choice element is selected
    if (event.target.className.indexOf("answer-choice") > -1) {
      processAnswer(event);
    }
  });

function processAnswer(event) {
  //determine if it is correct
  if (event.target.textContent === question[questionIndex].a) {
    //add score
    score++;
  }
  else {
    //decrement time
    time = time - 5;
  }
};


  }