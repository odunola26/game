
let startButton=document.querySelector(".start")
let question=document.querySelector(".question");
let option1=document.querySelector(".option1");
let option2=document.querySelector(".option2");
let option3=document.querySelector(".option3");
let questionIndex=0
let index=0
let questionNumberSpan=document.querySelector(".question-num")
let options=document.querySelector(".options").children;
console.log(options)
let quiz=document.querySelector(".quiz-space")
let yourScore=document.querySelector(".scores")
let score=0;
let restart=document.querySelector(".tryAgain")
//store question,optionsand answers in an array
let questions=[
    {
      Q:"what is a group of lion called?",
      options:["A pack",
              "A herd",
              "A pride"],
      answer:2
    },
    {
        Q:" when was WHO formed?",
        options:[ "May 13,1924",
                  "April 17,1948",
                 "January 21,1930"],
        answer:1
    },
    {
        Q:" the virus that causes covid-19 is called?",
        options:["sar virus",
                "coronavirus",
                "all of the above"],
        answer:2
    },
    {
       Q:"A group of baboons is called what",
       options:["A congress of baboons",
                "A troop of baboons",
                "A"],
       answer:0
    },
    
    {
        Q:"what is fibbonacci sequence?",
        options:["0, 0+x,0+0+x,0+x+0+0+x...",
                 "x, x+0,2x,x+0+2x...", 
                 "0,x,x+1,x+2..."],
        answer:0
    }
]
//set the questions
function play() {
    questionNumberSpan.innerHTML=index+1
     startButton.style.display="none";
    quiz.style.display="block"
    question.innerHTML=questions[questionIndex].Q;
    option1.innerHTML=questions[questionIndex].options[0];
    option2.innerHTML=questions[questionIndex].options[1];
    option3.innerHTML=questions[questionIndex].options[2];
     index++;}
     questions.length
     //make the quiz show random question
     let array=[]
     let arr=[]
     let duplicate=0
  function randomQuestion() {
         let randomNumber=Math.floor(Math.random()*questions.length);
         let duplicate=0
         if(index==questions.length){
             gameOver()
         }
         else{
             if (array.length>0){
                 for (let i=0;i<array.length;i++)
                 { if (array[i]==randomNumber){
                     duplicate=1;
                     break;
                 }

                 }
                 if (duplicate==1){

                    randomQuestion();
                 }
                 else{ 
                     questionIndex=randomNumber;
                    play();
                 }
             }
             if(array.length==0){
                questionIndex=randomNumber;
                play();
                arr.push(questionIndex);
                
             }
             console.log("arr:"+arr);
         array.push(randomNumber);
         

          }
     }
     // moving to the next question
     let Next =document.querySelector(".button")
     Next.addEventListener("click",next)


     function  Validate(){
         if(!options[0].classList.contains("disabled")){
             alert("pick an option")
         }
         else{
             enabled()
            randomQuestion()
         }
     }

     function next(){
         Validate()
     }
//option set
     
function check(element) {
    if (element.id==questions[questionIndex].answer){
      element.classList.add("correct")
      updateScoreTracker("correct")
      score++;
      
    }
    else{
        element.classList.add("wrong")
        updateScoreTracker("wrong")
    }
    disabled()
   
}
//dsabled other button after one has been selected to prevent multiple selections
function disabled(){
    for ( let i=0; i<options.length; i++){
    options[i].classList.add ("disabled")
    if (options[i].id==questions[questionIndex].answer) {
        options[i].classList.add("correct") 
    }
    
  }

}
// enable options for the next question
function enabled(){
    for ( let i=0; i<options.length; i++){
    options[i].classList.remove ("disabled", "correct","wrong")
    }

}

let scoreTracker=document.querySelector(".score-tracker")
function tracker(){
    for(let i=0;i<questions.length;i++){
        let div=document.createElement("div")
        scoreTracker.appendChild(div);
    }
    
}
// update scoretracker
function updateScoreTracker(name){
            scoreTracker.children[index-1].classList.add(name)
   }

startButton.addEventListener("click",firstPage)
window.onload=function(){
    startButton;
}
    
function firstPage(){
    randomQuestion();
    tracker();
    
}

function gameOver(){
    let over=document.querySelector(".game-over")
    over.classList.add("show")
    yourScore.innerHTML=score;
}
restart.addEventListener("click",tryAgain)
function tryAgain(){
    window.location.reload();
}












