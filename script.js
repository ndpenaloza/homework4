var startButton = document.getElementById("start-button");
var secondsRemaining = document.getElementById("seconds-remaining");
// Click the start button, first button appears, timer starts to count down 
// Need event listener for start button
// Need to make time count down
var countDown = 60;

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