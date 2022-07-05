//Btn
const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');
//Containers
const leftContainer = document.querySelector('.leftContainer');
const rightContainer = document.querySelector('.rightContainer');
//считаем слайды в rightContainer
const count = rightContainer.querySelectorAll('div').length;//wtf
const container = document.querySelector('.container');

let activ = 0;

leftContainer.style.top = `-${(count-1)*100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});

downBtn.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(e) {
    if (e === 'up') {
       activ++;
       if (activ === count){
           activ = 0;
       }
    } else if (e === 'down'){
        activ--;
        if (activ < 0){
            activ = count-1;
        }
    } 


const height = container.clientHeight;

leftContainer.style.transform = `translateY(${activ * height}px)`;
rightContainer.style.transform = `translateY(-${activ * height}px)`;
};

