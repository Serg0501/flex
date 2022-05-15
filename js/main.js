///Функции
/*
function add(a,b){
    let result = Number(a)+Number(b);
    return result;
}

function sub(a,b){
    let result = a-b;
    return result;
}

function mult(a,b){
    let result = a*b;
    return result;
}

function division(a,b){
    let result = a/b;
    return result;
}

function print(value){
    console.log(value);
}

let val1,val2;
val1=Number(prompt('Enter value1'));
val2=Number(prompt('Enter value2'));
console.log('+',add(val1,val2));
console.log('-',sub(val1,val2));
console.log('*',mult(val1,val2));
console.log('/',division(val1,val2));
*/
// вывести сообщение сколько раз сколько задает пользователь
/*
function repeatMsg(msg){
    while(n>0){
        console.log(msg);
        msg--;
    }
}

*/
/*
function repeatMsg(msg,n){
    let i;
    for(i=1;i<=msg;i++){
        console.log('hello');
    }
}
repeatMsg(5);
*/
//вывести рисунок исп функцию
/*
*****
****
***
**
*
*/
/*
function printStars(symbolStr, countMax){
    let i, str="";
    for(i=1;i<=countMax;i++){
        str=str+symbolStr;
    }
    return str;
    //console.log(str); //printSymbols("*",5);
    //return str; // вызов console.log(printSymbols("*",5))
}
let result;
result=printSymbols("*",5);
console.log(result);
result=printSymbols("*",15);
console.log(result);
result=printSymbols("$",12);
console.log(result);

*/

//вывести все числа кратные 5 в указанном диапазоне пользователем
/*
function task1(minLimit,maxLimit){
    let num;
    for(num=minLimit; num<=maxLimit;num++){
        if(num %5==0){
            console.log(num);
        }
    }
}

function task1_2(minLimit,maxLimit){
    for(minLimit; minLimit<=maxLimit;minLimit++){
        if(minLimit %5==0){
            console.log(minLimit);
        }
    }
}
*/

//сделать функцию которая проверяет сумму 2х указанных чисел
//*1
/*
function task2(number1, number2, answer){
    if(number1+number2==answer){
        return true;
    }
    return false;
}

let answer = prompt('2+2=?');
let res;
res=task2(2,2,answer);
if(res==true){
    console.log('yes');
}else{
    console.log('no');
}
*/
//*2
/*
function task2_2(number1, number2, answer){
    if(number1+number2==answer){
        console.log('yes');
    }
    console.log('no');
}

answer = prompt('2+2=?');
task2_2(2,2,answer);

*/