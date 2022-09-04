let questions = [
    new Question("Javascript supports",["Functions","XHTML","CSS","HTML"],"Functions"),
    new Question("Which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
    new Question("Which is not a Javascript framework?",["Python Script","JQuery","DJango","NodeJS"],"DJango"),
    new Question("Which is used for connect to database?",["PHP","HTML","JS","All"],"PHP"),
    new Question("Javascript is a ",["Language","Programming Language","Development","All"],"Programming Language")
]

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithNumber = function(answer) {
    if(quiz.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

function Question(text, choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer === choice;
}

function loadQuestions(){
    if(quiz.isEnded()){
        showScoresAndPercentage();
    }else{
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerText = question.text;

        var choices = question.choices;
        for(var i=0;i<choices.length;i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            handleOptionButton("btn"+i,choices[i]);
        }
    }
    showProgressBar();
}

function handleOptionButton(id,choice){
        let button = document.getElementById(id);
        button.onclick= function(){
            quiz.checkOptionWithNumber(choice);
            loadQuestions();
        }
}

function showScoresAndPercentage(){
    let scorePercentageHtml = "<h1> Results </h1>";
    scorePercentageHtml += "<h2 id='score'> Your score: "+quiz.score+" out of "+quiz.questions.length+"</h2>";
    scorePercentageHtml += "<h3 id='percentage'> Percentage: "+(quiz.score/quiz.questions.length)*100+"</h3";
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = scorePercentageHtml;
}

function showProgressBar(){
    if(quiz.questionIndex<quiz.questions.length) {
        let currentQuestion = quiz.questionIndex+1;
        let progressElement = document.getElementById("progress");
        progressElement.innerText = "Question "+currentQuestion+" of "+quiz.questions.length;
    }  
}

let quiz = new Quiz(questions);
loadQuestions();