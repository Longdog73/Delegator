//alert("index.js is working!")

// var currentPerson = 0;
// people = document.querySelectorAll(".person");
// // console.log("numberOfPeople = " + people.length);
//
// document.querySelector(".delegateButton").addEventListener("click", function() {
//   console.log("delegating...");
//
//   people[currentPerson].classList.remove("selected");
//
//   j = Math.floor(Math.random() * people.length);
//   console.log("j = " + j);
//
//   currentPerson = j
//
//   people[j].classList.add("selected");
//
// })

var timerInterval = 100;

var snareAudio = new Audio('delegator-snare.mp3');
var crashAudio = new Audio('delegator-crash.mp3');

var currentPerson = 0;
people = document.querySelectorAll(".person");
// console.log("numberOfPeople = " + people.length);

document.querySelector(".delegateButton").addEventListener("click", function() {
  console.log("delegating...");

  people[currentPerson].classList.remove("selected");

  var spinIncrements = Math.floor(Math.random() * people.length) + 2 * people.length;
  console.log("spinIncrements = " + spinIncrements);

  for (var i = 0; i < spinIncrements; i++) {
    // console.log("i = " + i);
    currentPerson ++;
    if (currentPerson >= people.length) {
      currentPerson = 0;
    }
    // console.log("currentPerson = " + currentPerson);
    divAnnimation(currentPerson, i * timerInterval);
  }

  setTimeout(function () {
    people[currentPerson].classList.add("selected");
    crashAudio.play();
  }, spinIncrements * timerInterval);

  console.log(people[currentPerson].innerHTML);

})

function divAnnimation(divNumber, timeToRun) {
  setTimeout(function () {
    people[divNumber].classList.add("selected");
    snareAudio = new Audio('delegator-snare.mp3');
    snareAudio.play();
  }, timeToRun);
  setTimeout(function () {
    var snareAudio = new Audio('delegator-snare.mp3');
    snareAudio.play();
  }, timeToRun + timerInterval / 2);
  setTimeout(function () {
    people[divNumber].classList.remove("selected");
  }, timeToRun + timerInterval);
}
