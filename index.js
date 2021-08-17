var readlineSync = require('readline-sync')
var chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.blue("Hello...What is your name? "));
console.log("\n");
console.log(chalk.blue("Welcome ") + chalk.blue(userName) + chalk.blue(" to how well do you know about linux"));

var highScores = [
    {
        name: "Test",
        score: 0
    },
    {
        name: "Suryansh",
        score: 6
    }
]
var highScore = 0;

var questions = [
    {
        question: "Where did Terry once live when pursuing a college education?\na: Japan \nb: Australia \nc: Sweden\n",
        answer: "a"
    },
    {
        question: "Which member of the squad likes to stay in the office rather than in the line of fire? \na: Jake \nb: Rosa \nc: Terry\n",
        answer: "c"
    },
    {
        question: "Who is the jokester of the precinct? \na: Gina \nb: Jake \nc: Raymond\n",
        answer: "b"
    },
    {
        question: "What is Jake's favorite movie? \na: The Terminator \nb: Die Hard \nc: Rocky\n",
        answer: "b"
    },
    {
        question: "Which member of the squad was almost married in Season Two? \na: Gina \nb: Amy \nc: Rosa\n",
        answer: "c"
    },
    {
        question: "What did Charles receive after being shot?\na: NYPD Medal of Valour \nb: Meritorious Police Duty \nc: Excellent Poice Duty\n",
        answer: "a"
    },
    {
        question: "What number is the precinct in the show?\na: 10th \nb: 20th \nc: 99th\n",
        answer: "c"
    },
    {
        question: "What is Gina's job in the precinct? \na: Commander \nb: Administrator \nc: Guard\n",
        answer: "b"
    },
    {
        question: "Who did Amy get married to? \na: Jake \nb: Charles \nc: Marcus\n",
        answer: "a"
    },
    {
        question: "How many brothers does Amy have?\na: Seven \nb: One \nc: Two\n",
        answer: "a"
    },

]

function quiz(question, answer) {
    var userAnswer =  readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()){
        score = score + 1;
        console.log(chalk.green("That's Right!!!"));
    }
    else {
        console.log(chalk.red("Wrong!!!"));
    }
} 

    
for (var i=0; i<questions.length; i=i+1)
{
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
    console.log("\n");
}

for(var i=0; i<highScores.length;i=i+1)
{
    if(highScore<highScores[i].score){
        highScore=highScores[i].score;
    }
}
console.log(chalk.magentaBright("---------------------------------"));
if(score>highScore){
    console.log(chalk.green("Congrats!!! You have beaten the highscore"));
    highScore=score; 
}
else if(score===highScore){
    console.log(chalk.yellow("Congrats!!! You have matched the highScore"));
}
console.log(chalk.cyan("Your Score "+ score));
console.log(chalk.magentaBright("---------------------------------"));
