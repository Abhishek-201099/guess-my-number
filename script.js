const again=document.querySelector('.again');
const number=document.querySelector('.number');
const guess=document.querySelector('.guess');
const check=document.querySelector('.check');
const message = document.querySelector('.message');
const scoreElement=document.querySelector('.score');
const highScoreElement=document.querySelector('.highscore');

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

function setMessage(msg){
  message.textContent=msg;
}

check.addEventListener('click',()=>{
  userInput=Number(guess.value);
  if(!userInput){
    setMessage('⛔ Enter a number')
  }else if(userInput===secretNumber){
    setMessage(`🎉 You Won `)
    number.textContent=secretNumber;
    number.style.width='30rem';
    document.body.style.backgroundColor='#60b347'
    if(score>highScore) highScore=score;
    highScoreElement.textContent=highScore;
  }else if(userInput!==secretNumber){
    if(score>1){
      setMessage(userInput>secretNumber?'📈 too high':'📉 too low');
      score--;
      scoreElement.textContent=score;
    }else{
      setMessage('👎 You lost ')
      scoreElement.textContent=0
    }
  }
})

again.addEventListener('click',()=>{
  secretNumber=Math.trunc(Math.random()*20)+1
  setMessage('Start guessing...');
  number.textContent='?'
  score=20;
  scoreElement.textContent=20;
  guess.value='';
  document.body.style.backgroundColor='#222'
})