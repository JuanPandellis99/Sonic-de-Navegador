
const sonic = document.querySelector('.sonic');
const spiny = document.querySelector('.spiny');
const clouds = document.querySelector('.clouds');
const clouds2 = document.querySelector('.clouds2');

const canvas = document.querySelector('.game-board');
const scoreNumber = document.querySelector('.score-value');
const finalScore = document.querySelector('.final-score > span');
const menu = document.querySelector('.menu-screen');
const buttonPlay = document.querySelector('.btn-play');


const jump=() => {
    incrementScore()
    sonic.classList.add('jump');

    setTimeout(() => {
        
        sonic.classList.remove('jump');

    }, 500);

}

const incrementScore = () => {
    scoreNumber.innerText = parseInt(+scoreNumber.innerText) + 10;

}

const score = 0;


const loop = setInterval(() =>{


const spinyPosition = spiny.offsetLeft;
const cloudsPosition = spiny.offsetLeft;
const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (spinyPosition <= 98 && cloudsPosition > 0 && spinyPosition > 0 && sonicPosition <= 80 ) {

    clouds.style.animation = 'none';
    clouds.style.left = `${spinyPosition}px`

    clouds2.style.animation = 'none';
    clouds2.style.left = `${spinyPosition}px`

        

    spiny.style.animation = 'none';
    spiny.style.left = `${spinyPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src ='./images/sonicmorto.png';

    clearInterval(loop);

    if(sonicPosition || spinyPosition){
        gameOver()
    }
}

}, 10);

        const gameOver = () => {
            direction = undefined

        menu.style.display = 'flex'
        finalScore.innerText = scoreNumber.innerText
        canvas.style.filter = 'blur(4px)'

        }



       buttonPlay.addEventListener('click', () => {

        scoreNumber.innerText='0'
        menu.style.display = 'none'
        canvas.style.filter='none'

        
        


       }) 







document.addEventListener('keydown', jump);
