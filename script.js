
const sonic = document.querySelector('.sonic');
const spiny = document.querySelector('.spiny');

const jump=() => {
    sonic.classList.add('jump');

    setTimeout(() => {
        
        sonic.classList.remove('jump');

    }, 500);

}


const loop = setInterval(() =>{

const spinyPosition = spiny.offsetLeft;
const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (spinyPosition <= 98 && spinyPosition > 0 && sonicPosition <= 80 ) {

    spiny.style.animation = 'none';
    spiny.style.left = `${spinyPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src ='./images/sonicmorto.png';

    clearInterval(loop);
}

}, 10);


document.addEventListener('keydown', jump);