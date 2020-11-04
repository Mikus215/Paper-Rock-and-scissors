const startBtn=document.querySelector('.start'); // button to start game
const introWindwow=document.querySelector('.intro'); // first window 
const gameWindwow=document.querySelector('.game'); // second window with game
const pcScoreBoard=document.querySelector('.computer-score p'); // pc score
const playerScoreBoard=document.querySelector('.player-score p'); // player score
const optionsPlayer=document.querySelectorAll('.options button'); // option player
const optionsComputer=['rock','paper','scissors']; // option computer
const winner=document.querySelector('.winner'); // who is winner
const playerHand=document.querySelector('.player-img'); // img option 
const computerHand=document.querySelector('.computer-img'); // img option
const hands=document.querySelectorAll('.for-animation'); // to animation hands, shake
let pcScore=0;
let playerScore=0;

// reste animation

hands.forEach(hand=>{
    hand.addEventListener('animationend', ()=>{
        hand.style.animation='';
    })
})

// show game // delete intro

const showGameWindow=()=>
{
    gameWindwow.classList.add('fade-in');
    gameWindwow.classList.remove('fade-out');
    introWindwow.classList.add('fade-out');
}

// main game

const playGame=()=>
{
    //player option
    optionsPlayer.forEach(option=> {
        option.addEventListener('click', function(){

            optionsPlayer.forEach(option=>{
                option.classList.add('n-click');
            })
            // computer option
            let randomIndex=Math.floor(Math.random()*3);
            let optionComputer=optionsComputer[randomIndex];
            winner.textContent='';
            // timeout for animation 
            setTimeout(()=>{
            optionsPlayer.forEach(option=>{
                option.classList.remove('n-click');
            })
            playerHand.src=`img/${option.textContent}.png`;
            computerHand.src=`img/${optionComputer}.png`;
            resultWin(option.textContent,optionComputer)
                            },2000)
            playerHand.style.animation="shakePlayer 2s ease";
            computerHand.style.animation="shakeComputer 2s ease";
            
                })
            })
}

// result who is winner

const resultWin=(optionPlayer,optionComputer)=>
{
    if(optionPlayer===optionComputer)
            {
                        winner.textContent="It is a tie!";
                        return;
            }
            if(optionPlayer==='rock')
            {
                if(optionComputer==='scissors')
                {
                    playerWon();
                    return;
                }
                else
                {
                    computerWon();
                    return;
                }
            }
            if(optionPlayer==='paper')
            {
                if(optionComputer==='rock')
                {
                    playerWon();
                    return;
                }
                else
                {
                    computerWon();
                    return;
                }
            }
            if(optionPlayer==='scissors')
            {
                if(optionComputer==='rock')
                {
                    computerWon();
                    return;
                }
                else
                {
                    playerWon();
                    return;
                }
            }
}

//player win

const playerWon=()=>
{
    winner.textContent='Player WINS!!!'
    playerScore++;
    playerScoreBoard.innerHTML=playerScore;
}
//computer win

const computerWon =()=>
{
    winner.textContent='Computer WINS!!!'
    pcScore++;
    pcScoreBoard.innerHTML=pcScore;
}

//liseners

playGame();
startBtn.addEventListener('click', showGameWindow);