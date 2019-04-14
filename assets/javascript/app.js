
var questions = [{
    question: "What tribe is Aang from?",
    choices: ["Air", "Fire", "Water", "Earth"],
    answer: "Air"
},
{
    question: "Who broke Aang from the iceberg?",
    choices: ["Appa", "Katara", "Kiyoshi", "Korra"],
    answer: "Katara"
},
{
    question: "How is Zuko trying to regain his honor?",
    choices: ["Find the Avatar", "Capture his sister", "Destroy the Earth Kingdom", "Make the best jasmine tea"],
    answer: "Find the Avatar"
},
{
    question: "Who taught Toph earthbending?",
    choices: ["The bats", "Master Yu", "The badgermoles", "Her dad"],
    answer: "The badgermoles"
},
{
    question: "What are the names of the remaining two dragons?",
    choices: ["Ren and Stimpy", "Yin and Yang", "Li and Ri", "Ran and Shaw"],
    answer: "Ran and Shaw"
},
{
    question: "How did Aang defeat Ozai?",
    choices: ["Taking his powers away", "Sucking the air out of his lungs", "Trapping him in ice", "Throwing a mountain at him"],
    answer: "Taking his powers away"
},
{
    question: "Who are Azula's friends?",
    choices: ["Zuko and Sokka", "Suki and Katara", "Lo and Li", "Mai and Ty Lee"],
    answer: "Mai and Ty Lee"
}];

var questionCounter = 0;
var quiz = $("#quiz"); 
var timer = 30;

// displayNext();


// Question Div, Not displaying though
function createQuestionElement(index) {
    var questionDiv = $("<div>", { id: "question" });

    var questionHeader = $("<h1 style='color: white'>Question " + (index + 1) + ":</h1>");
    questionDiv.append(questionHeader);

    var question = $("<h3 style='color: white; background-color:#0066ff'>").append(questions[index].question);
    questionDiv.append(question);

    var radioButtons = createRadios(index);
    questionDiv.append(radioButtons);

    return questionDiv;

}



//   Create the answer choice buttons aka radios
function createRadios(index) {
    var radioList = $("<ul>");
    var lineItem;
    var answerChoices = "";
    for (var i = 0; i < questions[index].choices.length; i++) {
        lineItem = $("<li style='list-style-type:none'>");
        answerChoices = "<input type='radio' name='answer' id='answer' value=" + i + " />";
        answerChoices += questions[index].choices[i];
        lineItem.append(answerChoices);
        radioList.append(lineItem);
    }
    return radioList;
};




// Timer countdown
var intervalId;
var isRunning = false;
function run() {
    if (timer > 0 && !isRunning) {
        isRunning = true;
        intervalId = setInterval(decrement, 1000);
    }
}

function decrement() {
    timer--;
    $("#countdownNumber").html("<h2>" + timer + "</h2>");

    if (timer === 0) {

        stop();
        alert("Time Up!");
        clearInterval;
    }
}

function stop() {
    clearInterval(intervalId);
}

run();




displayNext();


// var nextQuestion = createQuestionElement(questionCounter++);
// quiz.append(nextQuestion);
// quiz.append(nextQuestion);


// Displays next requested element, Trying to get new question when clicked
function displayNext() {
    var userSelection = document.getElementById("answer").checked; //Why is checked null???
    if (userSelection = true) {
        questionCounter++;
    }
    else {
        console.log("meh")
    }};

    





