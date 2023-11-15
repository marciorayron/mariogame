const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const nuvens = document.querySelector('.nuvens')

const jump = () => {
    mario.classList.add('jump');
    document.getElementById('jump').play();
   
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval (() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvensPosition = nuvens.offsetLeft;

    console.log(marioPosition);

        if (tuboPosition <= 130 && tuboPosition > 0 &&  marioPosition <= 80) {

        
            tubo.style.animation = 'none';
            tubo.style.left = `${tuboPosition}px`;

            mario.style.animation = 'none';
            mario.style.left = `${marioPosition}px`;

            nuvens.style.animation = 'none';
            nuvens.style.left = `${nuvensPosition}px`;

            mario.src = '../jogo mario/assets/img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';


            document.getElementById('game-over').play();

            clearInterval(loop);
        }
        
}, 10);


document.addEventListener('keydown', jump);



