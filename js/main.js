/*
const divArr = document.querySelectorAll('.sliderImg');

const l = document.querySelectorAll('sliderImg');
const b = document.querySelectorAll('sliderBigImg');

function bigImg (e) {
    
    this.style.
    this.removeEventListener('click', bigImg);
    this.addEventListener('clik', littleImg);
}

function littleImg (e) {

    this.style.background = 'white';
    this.removeEventListener('click', littleImg);
    this.addEventListener('click', bigImg);

}

divArr.forEach( el => el.addEventListener('click', bigImg));
*/


/*
const r = /[a-z]+/g;
const s = 'Hello Java script regExp 123 !';

console.log(r.test(s));
// test вернет true/false

//поиск
//1 match / matchAll
//2 search

console.log(s.search(r));

console.log(s.match(r));
*/
/*
const regColor = /#[0-9A-F]{6}/g;
const arr = ['#112233', '#FA34B2', 'BB1122', '#ab1122', '112233'];

for(let i=0; i<arr.length; i++){
    console.log(regColor.test(arr[i]));
}
*/
/*
let container = document.getElementById('container');
const count = 8;
for(let i=1; i<=count; i++){
    const slide = document.createElement('div');
    slide.classList.add('image');
    container.append(slide);
    function clickOn() {
      slide.style.width = '250px';
   };
    slide.addEventListener('click', clickOn);

    slide.addEventListener('mouseleave', () => {
        slide.style.width = '50px';
    } )
}
*/

let box = document.querySelector('.container');
let sides = document.querySelectorAll('.box');

sides.forEach((side, i) => {
    side.addEventListener('click', () => {
        box.style.transform = `rotateX(-15deg) rotateY(-${i*60}deg)`;
    })
});
