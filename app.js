
const start = document.querySelector('.game-start');
const mario = document.querySelector('.mario-run')
const grib =document.querySelector('.mario-grib')
const block1 = document.querySelector('.game-block1')
const block2 = document.querySelector('.game-block2')
const monet = document.querySelector('.game-monet')
const audio = document.querySelector('.game-audio')
const pipe = document.querySelector('.game-pipe')
const coin = document.querySelector('.game-coin')
const gribUp = document.querySelector('.game-up')

// ************************************

function money () {
    monet.style.display = 'block'
}

function moneyOff () {
    monet.style.display = 'none'
}

function firstBlock () {
    block1.style.display = 'block'
}

function firstBlockOff () {
    block1.style.display = 'none'
}

function secondBlock () {
    block2.style.display = 'block'
}

function secondBlockOff () {
    block2.style.display = 'none'
}

function playOff () {
    start.style.display = 'none'
}

function playOn () {
    start.style.display = 'block'
}

function gribs () {
    grib.style.display = 'block'
    grib.style.animationName = 'grib'
}

function gribsOff () {
    grib.style.display = 'none'
    grib.style.animationName = 'none'

}

function mario2 () {
    mario.style.animationName = 'mario2'
}

function mario3 () {
    mario.style.animationName = 'mario3'
}

function mario4 () {
    mario.style.animationName = 'mario4'
}

function mario5 () {
    mario.style.animationName = 'mario5'
}

function pipeAudio () {
    pipe.play()
}

function coinAudio () {
    coin.play()
}

function gribsUp () {
    gribUp.play()
}

start.addEventListener('click', (e) => {
    e.preventDefault();
    audio.play()
    mario.style.animationName = 'mario';
    setTimeout(playOff, 0)
    setTimeout(firstBlock, 2000)
    setTimeout(money, 2000)
    setTimeout(coinAudio, 1900)
    setTimeout(moneyOff, 2110)
    setTimeout(secondBlock, 4300)
    setTimeout(gribsUp, 3900)
    setTimeout(mario2, 4000)
    setTimeout(mario3, 8000)
    setTimeout(gribs, 4370)
    setTimeout(mario4, 12000)
    setTimeout(mario5, 16000)
    setTimeout(playOn, 21000)
    setTimeout(firstBlockOff, 21000)
    setTimeout(secondBlockOff, 21000)
    setTimeout(gribsOff, 21000)
    setTimeout(pipeAudio, 19000)
})





