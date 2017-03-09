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
    choices:['North American beaver', 'Giant Panda', 'Kiwi'],
    answer:'North American beaver'},
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
// console.log(paragraphs);
// console.log(radios.length);
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


function myFunction() {
   let answerIndex = 1;  
   for(let i = 0; i < quizArray.length; i++){
     var strongArea = document.createElement('P');
     var strongText = document.createTextNode("Answer " + (answerIndex++) + ": ");
     strongArea.appendChild(strongText);
     anP.appendChild(strongArea);

     var pArea = document.createElement('STRONG');
     var pTest = document.createTextNode(quizArray[i].answer);
     pArea.appendChild(pTest);
     anP.appendChild(pArea);
     
    }
}

let radios = document.getElementById('test').getElementsByTagName('input');
let user = new User();

function submitFunction(){
    for(let i = 0; i < radios.length; i++){
        for(j=0; j < quizArray.length;j++){
            if(radios[i].checked && radios[i].value == quizArray[j].answer){
                user.scoring += quizArray[j].point;
            }
        }      
    } 
    var pArea = document.createElement('P');
    var pText = document.createTextNode('Your score:');
    var strongArea = document.createElement('STRONG');
    var storngText = document.createTextNode(''+user.scoring);
    pArea.appendChild(pText);
    strongArea.appendChild(storngText);
    document.body.appendChild(pArea);
    document.body.appendChild(strongArea);
}

