
let active =0;
const images = document.querySelectorAll('img');

document.querySelector('.btnN').onclick = () =>{
    images[active].classList.remove('activImg');
    if (active+1 == images.length){
        active = 0;
    }
    else{
        active++;
    }
    images[active].classList.add('activImg');
}

document.querySelector('.btnP').onclick = () =>{
    images[active].classList.remove('activImg');
    if (active <= 0){
        active = images.length-1;
    }
    else{
        active--;
    }
    images[active].classList.add('activImg');
}






