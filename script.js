// JavaScript code
var categories = {
    "Pipes and Cisterns": [
    {
    question: "Question 1: Pipes A and B can fill a tank in 8 hours and 12 hours respectively. If both the pipes are opened together, how long will it take to fill the tank?",
    options: ["4 hours", "5 hours", "6 hours", "7 hours"],
    answer: 1
    },
    {
    question: "Question 2: Pipes A and B can fill a tank in 6 hours and 9 hours respectively. If both the pipes are opened together, how long will it take to fill half of the tank?",
    options: ["2.4 hours", "3 hours", "4 hours", "4.5 hours"],
    answer: 2
    },
    {
    question: "Question 3: Pipe A can fill a tank in 6 hours and Pipe B can empty the same tank in 9 hours. If both the pipes are opened together, how long will it take to fill the tank?",
    options: ["3 hours", "4 hours", "6 hours", "9 hours"],
    answer: 3
    },
    {
    question: "Question 4: Pipe A can fill a tank in 10 hours and Pipe B can empty the same tank in 15 hours. If both the pipes are opened together, how long will it take to fill the tank?",
    options: ["6 hours", "7.5 hours", "8 hours", "12 hours"],
    answer: 2
    },
    {
    question: "Question 5: Pipe A can fill a tank in 8 hours and Pipe B can fill the same tank in 12 hours. If both the pipes are opened together for 2 hours and then Pipe A is closed, how long will it take for Pipe B to fill the remaining tank?",
    options: ["2 hours", "3 hours", "4 hours", "6 hours"],
    answer: 2
    },
    {
    question: "Question 6: Pipe A can fill a tank in 5 hours. If Pipe A is opened for 2 hours and then closed, and then Pipe B is opened for 4 hours, how long will it take to fill the tank?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    answer: 1
    },
    {
    question: "Question 7: Pipe A can fill a tank in 4 hours and Pipe B can empty the same tank in 6 hours. If both the pipes are opened together for 3 hours and then Pipe A is closed, how long will it take for Pipe B to empty the remaining tank?",
    options: ["2 hours", "3 hours", "4 hours", "6 hours"],
    answer: 2
    },
    {
    question: "Question 8: Pipe A can fill a tank in 6 hours and Pipe B can empty the same tank in 8 hours. If both the pipes are opened together for 2 hours and then Pipe B is closed, how long will it take for Pipe A to fill the remaining tank?",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
    answer: 3
    },
    {
    question: "Question 9: Pipe A can fill a tank in 10 hours and Pipe B can fill the same tank in 15 hours. If both the pipes are opened together for 3 hours and then Pipe A is closed, how long will it take for Pipe B to fill the remaining tank?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    answer: 2
    },
    // Add more questions for this category
  ],
    "Probability": [
        {
        question: "Question 1: What is the probability of getting a head when tossing a fair coin?",
        options: ["1/2", "1/3", "2/3", "1"],
        answer: 0
        },
        {
        question: "Question 2: A bag contains 5 red balls and 3 blue balls. If a ball is drawn randomly from the bag, what is the probability of getting a red ball?",
        options: ["1/8", "3/8", "5/8", "8/9"],
        answer: 2
        },
        {
        question: "Question 3: A standard deck of cards contains 52 cards. If a card is drawn randomly from the deck, what is the probability of drawing a heart?",
        options: ["1/13", "1/26", "1/39", "1/52"],
        answer: 0
        },
        {
        question: "Question 4: In a bag, there are 4 green marbles, 3 red marbles, and 2 blue marbles. If a marble is drawn randomly from the bag, what is the probability of getting a green or blue marble?",
        options: ["4/9", "5/9", "6/9", "7/9"],
        answer: 3
        },
        {
        question: "Question 5: In a game, a fair six-sided die is rolled. What is the probability of rolling an odd number?",
        options: ["1/2", "1/3", "1/4", "1/6"],
        answer: 1
        },
        {
        question: "Question 6: A box contains 10 red balls, 5 green balls, and 3 blue balls. If a ball is drawn randomly from the box, what is the probability of getting a red or green ball?",
        options: ["5/18", "15/18", "1/2", "5/6"],
        answer: 3
        },
        {
        question: "Question 7: A bag contains 8 white balls and 4 black balls. If 2 balls are drawn randomly from the bag without replacement, what is the probability of getting 2 white balls?",
        options: ["1/6", "1/8", "7/33", "2/3"],
        answer: 2
        },
        {
        question: "Question 8: In a group of 20 people, 10 people have brown hair and 8 people have blue eyes. If a person is selected randomly from the group, what is the probability of selecting a person who has both brown hair and blue eyes?",
        options: ["1/20", "2/20", "8/20", "10/20"],
        answer: 1
        },
        {
        question: "Question 9: A bag contains 6 red balls, 4 green balls, and 2 blue balls. If 2 balls are drawn randomly from the bag with replacement, what is the probability of getting a red ball on the first draw and a green ball on the second draw?",
        options: ["1/20", "2/30", "4/30", "6/30"],
        answer: 2
        },
        {
        question: "Question 10: A jar contains 10 blue marbles and 5 yellow marbles. If 2 marbles are drawn randomly from the jar without replacement, what is the probability of getting a blue marble on the first draw and a yellow marble on the second draw?",
        options: ["1/21", "5/21", "10/21", "15/21"],
        answer: 1
        }
    // Add more questions for the "Probability" category
    ],
    "Problems on Age": [
        {
        question: "Question 1: A father is 3 times older than his son. If the sum of their ages is 48, how old is the son?",
        options: ["8 years", "12 years", "16 years", "24 years"],
        answer: 2
        },
        {
        question: "Question 2: The average age of a family of 5 members is 32 years. If the age of the youngest member is 20 years, what will be the average age of the family if a new member, aged 18, is also included?",
        options: ["30 years", "31 years", "32 years", "33 years"],
        answer: 0
        },
        {
        question: "Question 3: The sum of the present ages of a father and his son is 45 years. Five years ago, the father's age was four times the age of the son. Find their present ages.",
        options: ["25 years, 20 years", "30 years, 15 years", "35 years, 10 years", "40 years, 5 years"],
        answer: 1
        },
        {
        question: "Question 4: The present age of a father is 3 times the age of his son. After 10 years, the father's age will be twice the age of his son. Find their present ages.",
        options: ["30 years, 10 years", "35 years, 15 years", "40 years, 20 years", "45 years, 25 years"],
        answer: 2
        },
        {
        question: "Question 5: The ratio of the present ages of A and B is 3:5. After 8 years, the ratio of their ages will be 2:3. Find their present ages.",
        options: ["12 years, 20 years", "15 years, 25 years", "18 years, 30 years", "21 years, 35 years"],
        answer: 3
        },
        {
        question: "Question 6: The sum of the present ages of a mother and her daughter is 50 years. Five years ago, the mother's age was 6 times the age of the daughter. Find their present ages.",
        options: ["30 years, 20 years", "35 years, 15 years", "40 years, 10 years", "45 years, 5 years"],
        answer: 1
        },
        {
        question: "Question 7: The present age of a father is 4 times the age of his son. After 15 years, the father's age will be three times the age of his son. Find their present ages.",
        options: ["20 years, 5 years", "25 years, 10 years", "30 years, 15 years", "35 years, 20 years"],
        answer: 2
        },
        {
        question: "Question 8: The sum of the present ages of a grandfather, father, and son is 100 years. The ratio of their ages is 2:4:1. Find their present ages.",
        options: ["20 years, 40 years, 10 years", "24 years, 48 years, 12 years", "28 years, 56 years, 14 years", "32 years, 64 years, 16 years"],
        answer: 1
        },
        {
        question: "Question 9: The sum of the present ages of a grandfather and his grandson is 72 years. The ratio of their ages is 9:1. Find their present ages.",
        options: ["63 years, 9 years", "54 years, 6 years", "45 years, 5 years", "36 years, 4 years"],
        answer: 0
        },
        {
        question: "Question 10: The present age of a mother is twice the age of her daughter. Ten years ago, the mother's age was three times the age of her daughter. Find their present ages.",
        options: ["20 years, 10 years", "25 years, 12.5 years", "30 years, 15 years", "35 years, 17.5 years"],
        answer: 2
        }
// Add more questions for the "Problems on Age" category
],
    "Profit and Loss": [
        {
        question: "Question 1: A shopkeeper purchased a shirt for $50 and sold it for $80. Find the profit percentage.",
        options: ["30%", "40%", "50%", "60%"],
        answer: 1
        },
        {
        question: "Question 2: A man bought a laptop for $1000 and sold it for $900. Find the loss percentage.",
        options: ["5%", "8%", "10%", "12%"],
        answer: 2
        },
        {
        question: "Question 3: A trader marked the selling price of an item 20% above the cost price. If he sells the item at a discount of 10%, find the profit percentage.",
        options: ["8%", "10%", "12%", "15%"],
        answer: 0
        },
        {
        question: "Question 4: A person bought a bicycle for $200 and sold it for $150. Find the loss percentage.",
        options: ["10%", "15%", "20%", "25%"],
        answer: 3
        },
        {
        question: "Question 5: A shopkeeper sells an item for $800 and makes a profit of 20%. What is the cost price of the item?",
        options: ["$600", "$640", "$660", "$680"],
        answer: 2
        },
        {
        question: "Question 6: A trader sells an item for $1200 at a loss of 10%. What is the cost price of the item?",
        options: ["$1080", "$1120", "$1160", "$1200"],
        answer: 0
        },
        {
        question: "Question 7: A person sells a chair for $500 at a profit of 25%. What is the cost price of the chair?",
        options: ["$350", "$375", "$400", "$425"],
        answer: 1
        },
        {
        question: "Question 8: A shopkeeper purchased 100 pens for $200. He sold 80 pens at a price that gave him a profit of 25% on the cost price. At what price should he sell the remaining pens to make an overall profit of 20%?",
        options: ["$3", "$3.20", "$3.40", "$3.60"],
        answer: 3
        },
        {
        question: "Question 9: A person bought a car for $5000 and sold it at a loss of 10%. How much did he sell the car for?",
        options: ["$4500", "$4800", "$5100", "$5400"],
        answer: 1
        },
        {
        question: "Question 10: A trader sells an item for $1200, making a profit of 25%. What would be the selling price if he wants to make a profit of 40%?",
        options: ["$1300", "$1400", "$1500", "$1600"],
        answer: 2
        }
        // Add more questions for the "Profit and Loss" category
    ],
    // Add more categories and questions as needed
};


var currentCategory = "";
var currentQuestionIndex = 0;
var score = 0;
var startTime;
var endTime;

var homeContainer = document.getElementById("homeContainer");
var userDetails = document.getElementById("userDetails");
var startQuizButton = document.getElementById("startQuiz");
var categoryButtons = document.getElementsByClassName("categoryButton");
var quizContainer = document.getElementById("quizContainer");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var scoreElement = document.getElementById("score");
var questionContainer = document.getElementById("questionContainer");
var nextQuestionButton = document.getElementById("nextQuestion");
var resultContainer = document.getElementById("resultContainer");
var participantName = document.getElementById("participantName");
var totalTime = document.getElementById("totalTime");
var totalQuestions = document.getElementById("totalQuestions");
var attempted = document.getElementById("attempted");
var correctAnswers = document.getElementById("correctAnswers");
var wrongAnswers = document.getElementById("wrongAnswers");
var percentageScore = document.getElementById("percentageScore");
var startAgainButton = document.getElementById("startAgain");
var goToHomeButton = document.getElementById("goToHome");

    
    for (var i = 0; i < categoryButtons.length; i++) {
categoryButtons[i].addEventListener("click", function() {
    var category = this.getAttribute("data-category");
    currentCategory = category
    console.log('inside category', category)
    if(!document.getElementById("name").value) {
        alert('please enter the name first')
        return
    }

participantName.textContent = "Participant Name: " + document.getElementById("name").value;
homeContainer.style.display = "none";
userDetails.style.display = "none";
quizContainer.style.display = "block";
timer.style.display = "block";
    scoreElement.style.display = "block";
    startQuiz(category);
    });
}

startQuizButton.addEventListener("click", function() {
  var name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  
    // startQuiz(currentCategory);
})

nextQuestionButton.addEventListener("click", function() {
showNextQuestion();
});

startAgainButton.addEventListener("click", function() {
homeContainer.style.display = "block";
userDetails.style.display = "block";
resultContainer.style.display = "none";
resetQuiz();
});

goToHomeButton.addEventListener("click", function() {
//   resetQuiz();
homeContainer.style.display = "block";
userDetails.style.display = "block";
resultContainer.style.display = "none";
resetQuiz();
});

function startQuiz(category) {
currentCategory = category;
console.log('inside start quiz', category)
currentQuestionIndex = 0;
score = 0;
startTime = new Date().getTime();

var categoryQuestions = categories[category];
totalQuestions.textContent = "Total Questions: " + categoryQuestions?.length;

displayQuestion();
updateScore();
updateTimer();
}

function displayQuestion() {
console.log('inside displayQuestion', currentCategory)
// currentCategory = document.getElementById('')
var categoryQuestions = categories[currentCategory];
var currentQuestion = categoryQuestions[currentQuestionIndex];

questionContainer.innerHTML = "";
var questionNumber = document.createElement("p");
questionNumber.id = "questionNumber";
questionNumber.textContent = "Question " + (currentQuestionIndex + 1);
questionContainer.appendChild(questionNumber);

var questionText = document.createElement("p");
questionText.textContent = currentQuestion.question;
questionContainer.appendChild(questionText);

var optionsContainer = document.createElement("div");
optionsContainer.className = "options";
questionContainer.appendChild(optionsContainer);
nextQuestionButton.style.display = "block";
//   optionsContainer.style.display = 'grid'
console.log('currentQuestion.options.length', currentQuestion)
//   for (var i = 0; i < currentQuestion.options.length; i++) {
//     var optionButton = document.createElement("button");
//     optionButton.textContent = currentQuestion.options[i];
//     optionButton.setAttribute("data-index", i);
//     optionButton.addEventListener("click", evaluateAnswer);
//     optionsContainer.appendChild(optionButton);
//   }
optionsContainer.className = "options";
questionContainer.appendChild(optionsContainer);

var optionsRow1 = document.createElement("div");
optionsRow1.className = "options-row";
console.log('optionsRow1', optionsRow1)
optionsContainer.appendChild(optionsRow1);

var optionsRow2 = document.createElement("div");
optionsRow2.className = "options-row";
optionsContainer.appendChild(optionsRow2);
console.log('optionsRow2', optionsRow2)

for (var i = 0; i < currentQuestion?.options?.length; i++) {
    var optionButton = document.createElement("button");
    optionButton.textContent = currentQuestion.options[i];
    optionButton.setAttribute("data-index", i);

    if (i < 2) {
    optionsRow1.appendChild(optionButton);
    } else {
    optionsRow2.appendChild(optionButton);
    }

    optionButton.addEventListener("click", evaluateAnswer);
}

}

function evaluateAnswer() {
var selectedOption = parseInt(this.getAttribute("data-index"));
console.log('selectedOption', selectedOption)
console.log('categories', categories)
var categoryQuestions = categories[currentCategory];
var currentQuestion = categoryQuestions[currentQuestionIndex];

if (selectedOption === currentQuestion.answer) {
score++;
}

currentQuestionIndex++;

if (currentQuestionIndex < categoryQuestions?.length) {
displayQuestion();
} else {
showQuizResult();
}

updateScore();
}

function showNextQuestion() {
var categoryQuestions = categories[currentCategory];

if (currentQuestionIndex < categoryQuestions.length - 1) {
currentQuestionIndex++;
displayQuestion();
} else {
showQuizResult();
}
}

function showQuizResult() {
endTime = new Date().getTime();
var totalTimeTaken = Math.floor((endTime - startTime) / 1000);
console.log('inside show quiz result', currentCategory)
var categoryQuestions = categories[currentCategory];

quizContainer.style.display = "none";
resultContainer.style.display = "block";
nextQuestionButton.style.display = 'none'
totalTime.textContent = totalTimeTaken + " seconds";
attempted.textContent = "Attempted: " + categoryQuestions?.length;
correctAnswers.textContent = "No. of Correct Answers: " + score;
wrongAnswers.textContent = "No. of Wrong Answers: " + (categoryQuestions.length - score);
percentageScore.textContent = "Score in Percentage: " + ((score / categoryQuestions.length) * 100).toFixed(2) + "%";
}

function updateScore() {
scoreElement.textContent = "Score: " + score;
}

function updateTimer()
{
var categoryQuestions = categories[currentCategory];
var timeLimit = categoryQuestions.length * 10; // Assuming 10 seconds per question
var timerInterval = setInterval(function() {
var currentTime = new Date().getTime();
var elapsedTime = Math.floor((currentTime - startTime) / 1000);
var timeRemaining = timeLimit - elapsedTime;

if (timeRemaining >= 0) {
  timeLeft.textContent = timeRemaining + " seconds";
} else {
  clearInterval(timerInterval);
  showQuizResult();
}
}, 1000);
}

function resetQuiz() {
currentCategory = "";
currentQuestionIndex = 0;
score = 0;
startTime = 0;
endTime = 0;
timeLeft.textContent = "";
scoreElement.textContent = "";
}
