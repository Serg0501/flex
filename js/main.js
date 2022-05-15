// if-else
/*
if (условие){
    действие, если условие1 выполняется
} else if(условие2){


    //если четное то *2, нечетное/2
}
let value =100;
if(value%2==0){
    value=value*2;  // value*=2;
} else{
    value/=2;
}

// если четное и больше 100 то *2, нечетное/2

if(value%2 ==0 && value <=100){
    value = value*2
}else{
    value/=2;
}
//если число меньше 10 вычесть 1 из него, если от 10 до 100 вычесть 5,
//если больше 100 поделить на 2

if (value < 10){
    value=value-1;
}else if ( value>=10 && value<100){
    value= value-5;
}else if(value >=100){
    value = value/2;
}else{
    console.log('Error');
}
// или

if (value < 10){
    value=value-1;
}else if(value >=100){
    value = value/2;
}else{
    value= value-5;
}

//for
/*
for(начальное условие; конечное условие;шаг){
    действие
}
*/
/*
let num = 1;
for(num=1; num<=100; num=num+1;){
    result1=result1+num;
}

//найти произведение чисел от 2 до 8

result1=1;
for(num=2;num<=8;num++){
    result=result*num;
}
console.log(result);

//найти сумму нечетных чисел от 10 до 50

result=0;

//1

for(num=10; num<=50; num++){
    if(num%2 ==1);{
        result=result+num;
    }
}

//2

for(num=11; num<=50; num=num+1){
        result=result+num;
}

*/
/*
while(конечное условие){
    действие
}
*/
/*
//сумма чисел от 1 до 10
//for
let n, res=0;

for(n=1; n<=10; n++){
    res=res+n;
}
console.log('FOR:',res);
//while
n=1, res=0;
while(n<=10){
    res=res+n;
    n++;
}

//вывести числа от 5 до 0

n=5;
while(n>=0){
    console.log(n);
    n=n-1;
}
*/
//вывести числа от 5 до 0 в квадрате
/*
n=5;
while(n>=0){
    n=n^2; //n=n*n
    console.log(n);
    n=n-1; //n-=n
}
*/
// задача цыклом. выйти когда сумма чисел привысит 100 и на каком числе
/*
let n = 1, sum = 0;
while(true) {
    sum +=n
    if (sum > 100) break;
    n++;
}
console.log(n);
console.log(sum);

sum=0;
for(n=1;n++;) {
    sum +=n
    if (sum > 100) break;
    
}
console.log(n);
console.log(sum);
*/
/*
//бесконечные цыклы
//while (true){}
//for( ; ; ){}
//while(false){}
*/
/*
n=10000;
let x1=1, x2=2, x3=3;
console.log('Result:',x1,x2,x3);
console.log('Result: x1,x2,x3 ');
console.log(`Result: ${x1} ${x2} ${x3}`);
*/
/*
let userValue=prompt('Введите номер месяца');
let result;
if(userValue ==1){
    result="Январь";
} else if(userValue == 2){
    result="Февраль";
} else if(userValue == 3){
    result="Март";
} else if(userValue == 4){
    result="Апрель";
} else if(userValue == 5{
    result="Май";
} else{
    result="Нет такого месяца";
}
// .....

switch(userValue){
    case 1: result = "Январь"; break;
    case 2: result = "Февраль"; break;
    case 3: result = "Март"; break;
    ///.....
    default: result="Нет такого месяца"; dreak;
}
*/

///Задача

// Попросить пользователя ответить  на вопрос 2+2
/*

let x = prompt('2+2=');
if( x==4){
    alert="Правильно"
}else{
    alert="Подумай еще"
}

*/

// Попросить пользователя ответить  на вопрос 2+2, спрашить пока не ответит правильно
/*
while(true){
    answer = prompt("2+2=");
    if(answer==result){
        alert("Bingo!");
        break;
    }
    alert('Sorry Wrong');
}
*/
/*
do{
    answer = promt(2+2=);
} while(answer == result);
*/
//3 - посчитать сумму нечетных чисел от 1 до 20 используя for / while
/*
let number = 1, limit = 20, res = 0;

for(number=1; number<= limit; number=number+2){
    res=res+number;
}

number = 1, res =0;
while(number <= limit){
    res = res + number;
    number = number + 2;
}
*/