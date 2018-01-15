	var QUESTION_TYPE_CHOICE = "choice";
    var QUESTION_TYPE_TF = "true-false";
    var QUESTION_TYPE_NUMERIC = "numeric";
    
    function Question(id, text, type, answers, correctAnswer, objectiveId){
        this.Id = id;
        this.Text = text;
        this.Type = type;
        this.Answers = answers;
        this.CorrectAnswer = correctAnswer;
        this.ObjectiveId = objectiveId;
    }

    function CrsQuest(questions){
        this.Questions = questions;
    }
    CrsQuest.prototype.AddQuestion = function(question)
    {
        this.Questions[this.Questions.length] = question;
    }
    
    var CrsQuests = new CrsQuest(new Array());
console.log(CrsQuests);
var section = document.createElement('section');
  section.id = 'section';
  section.name = 'section';
document.body.appendChild(section);
var contentSec = document.getElementById("section"); 
var titre = document.createElement('h1');
  titre.id = 'titre';
  titre.name = 'titre';
  titre.append('Exercise 1 : Articles (create radio type exercise – the correct response is marked in red)');
contentSec.appendChild(titre);
