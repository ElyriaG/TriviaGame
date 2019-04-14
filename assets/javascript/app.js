
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

var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $("#quiz"); //Quiz div object
  
 

function createQuestionElement(index) {
    var questionDiv = $('<div>', {id: 'question'});

    var questionHeader = $('<h1 style="color: white">Question ' + (index + 1) + ':</h1>');
    questionDiv.append(questionHeader);
    
    var question = $('<h3 style="color: white; background-color:#0066ff">').append(questions[index].question);
    questionDiv.append(question);
    
    var radioButtons = createRadios(index);
    questionDiv.append(radioButtons);
    
    return questionDiv;
  }
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion);
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
    };