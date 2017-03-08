
class User{
     public scoring : number = 0;
     addScoring(point):number{
        return this.scoring += point;
     }
}

class Quiz{
    public 
    constructor(
        public point ,
        public title,
        public choices, 
        public answer,       
    ){

    }
}

let quizArray= [
    {point:5,
    title:' 1. What is the national animal of Canada?',
    choices:['North American beaver', 'Giant Panda', 'Kiwi'],answer:'North American beaver'},
    {point:5,
     title:' 2. What kind of animal is the largest living creature on Earth? ', 
    choices:['Elephantwhale','whale','Dinosaur'],
    answer:'whale'},
    {point:5, 
    title:'3. What is the noisiest city in the world?',
    choices:['New York', 'Tokyo','Hong Kong'],
    answer:'Hong Kong'
    },
    {point:5, 
    title:'4. What is the organ that is affected when one is suffering from hepatitis?',
    choices:['Stomach','Liver','Heart', ],
    answer:'Liver'
    },
    {point:5,
    title:'5. Which planet is nearest the sun?',
    choices:['Mercury','Venus','Pluto'],
    answer:'Mercury'
    }
]

let paragraphs = document.getElementById('test').getElementsByTagName('p');
let labels = document.getElementById('test').getElementsByTagName('label');
let j = 0;
for(let i = 0; i < paragraphs.length; i++){ 
    let index = 0; 
    for( ; j < labels.length; j++){
        labels[j].innerHTML = quizArray[i].choices[index++];            
        if(index == 3){
            j++;
            break;  
        }         
    }
    paragraphs[i].innerText = quizArray[i].title + " (5 points)";
}

let answerSentence = `Question {i}: The correct answer is the :`;
let an = document.getElementById('answers');
let anP = document.getElementById('plain');

// an[0].innerText = '123';
console.log(an);

function myFunction() {
   for(let i = 1; i <= quizArray.length; i++){
     var strongArea = document.createElement('P');
     var strongText = document.createTextNode("Answer " + i + ": ");
     strongArea.appendChild(strongText);
     anP.appendChild(strongArea);

     var pArea = document.createElement('STRONG');
     var pTest = document.createTextNode(quizArray[i].answer);
     pArea.appendChild(pTest);
     anP.appendChild(pArea);
    }
}
