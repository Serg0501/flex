//alert ("Helo, Word!");

console.log("Hello, Stas!!");
console.log("Hello","JS Developer","!!!!");

/*
//переменные style camelCase

//объявление переменных
let x;
let y;
let userName;
let userColorAvatarBG;
let a,b,c;
//инифиализация переменных
x = 5;
y = -100;
a = 3.14;
b = 0.00005;
userName = "Stas";
userColorAvatarBG = "red";

console.log(x);
console.log(y,a,b);
console.log("User name is",userName);
console.log('A = ',a, 'and B = ',b);

//объявление с иницмализацией
let d = 200;
let name1 = "Tom Fox";
console.log(name1);

//Что мы можем положить в (контейнер) переменную, тип
let x2;
x2 = 100;
console.log(x2);
x2 = -3;
console.log(x2);
x2 = "hello";
console.log(x2);
x2 = 'Stas';
console.log(x2);
x2 = true; //логитесчкий тип бывает true и false 
console.log(x2);

//можем ложить контейнеры один в один
console.log('x=',x);
console.log('y=',y);
x = y;
console.log('x=',x);
console.log('y=',y);

// операции
x = 10;
console.log('x=',x);
x = x+5;
console.log('x=',x);
x = x-5;
console.log('x=',x);
x = x*5;
console.log('x=',x);
x = x/5;

y = 2;
x = 10;

console.log('x=',x);
x = x+y;
console.log('x=',x);
x = x-y;
console.log('x=',x);
x = x*y;
console.log('x=',x);
x = x/y;

let a1 = 10;
let a2 = 0, a3 = 'Stas';
let a4 = false, a5 = -2;

let result;
result = a1+a5;
console.log ('result=',result);
result = a1*a5;
console.log ('result=',result);
result = a1-a5;
console.log ('result=',result);
result = result*2;
console.log (result);

result = 500 - result;
console.log (result);
*/

//константа (постоянная) - большие буквы с нижним подчеркиванием
/*
const COLOR_RED = "#FF0000";
const COLOR_GREEN = "#00FF00";
const COLOR_BLUE = "#0000FF";
const MAX_QUERIES = 3;

let x = 100;
x = x + MAX_QUERIES;
console.log(x);
*/


//операции (+ - * /) - краткие записи
/*
let a1 = 200, a2 = 100, result;
a1 +=5; //a1 = a1 +5;
a1 -+5; //a1 = a1 -5;
a1 *=5; //a1 = a1 *5;
a1 /=5; //a1 = a1 /5;

a2 +=a1 //a2 = a2 + a1;
a2 -=a1 //a2 = a2 - a1;
a2 *=a1 //a2 = a2 * a1;
a2 /=a1 //a2 = a2 / a1;
*/

// операция инкремент / декремент 
/*
x = 10;
x++ //x = x+1; или ++x
x-- //x = x-1; или --x
*/

// возведение в степень
/*
result = 5 ** 2;
console.log (result);
result = 5 ** 3;
console.log (result);
result = 5 ** (1/2);
console.log (result);
*/

/*1 Создайте переменные a=10 и b=20. Отнимите от a переменную b и  
результат присвойте переменной c. Затем создайте переменную d,  
присвойте ей значение c. Сложите переменные c и d,  
а результат запишите в переменную result. 
 
2 Переделайте этот код так, чтобы в нем использовались операции  
+=, -=, *=, /=, ++, - - 
let num = 100; 
num = num + 7; 
num = num - 18; 
num = num * 10; 
num = num / 15; 
num = num + 1; 
num = num - 1; 
 
3 Спросите у пользователя число. Возведите это число в квадрат.
let r = prompt('Введи число');

let a = 10, b = 20; c, d, result;
c = a - b;
d = c;
result = c + d;
console.log (result);

let num = 100; 
num += 7;
num -= 18; 
num *= 10; 
num /= 15; 
num += 1; //num++
num -= 1; //num--
console.log (num);

let r = prompt('20');    // - РАЗОБРАТЬ!!!!
result = r ** 2;
console.log (result);
*/

/*
//4 Задание вычислите площадь прямоугольника по введеным данным
// S = a * b;
let a = 5, b = 7, S;
S=a*b;
console.log ('Square is',S,'m');

//5 Задание: перевести мм в см (спросить мм в ответ дать см)
let uderValueMM, userVAluemCM;
uderValueMM=1000;
userVAluemCM = uderValueMM/10;
console.log ('uderValueMM',"mm=",userVAluemCM,"cm");
*/

//Условные операторы
// >   <   >=   <=   !=   ===включая проверку типа
/*
let a,b;
a = 5;
b = 7;

console.log (a>b);
console.log (a<b);
console.log (a==b);
console.log (a!=b);
console.log (a===b);
*/

//Условные оператор if
/*
if(условие){
    //набор действий если условия выполняет
}
*/
/*
let userAge = prompt ('Введите свой возраст'); - prompt - это окно для ввода значения
if (userAge >= 18) {
    alert ('Вы-совершенолетний');
}
*/

/* IF + ELSE
if (условие){
    список действий при выполнении условия
} else {
    список действий при НЕ выполнении условия
}
let userAge = prompt ('Введите свой возраст');
if (userAge >= 18) {
    alert ('Вы-совершенолетний');
}else{
    alert ('Вы-несовершенолетний');
}

//ПРИМЕР
let userNumber = prompt ('Введите свой возраст');
if (userNumber >= 10) {
    alert ('Больше');
}else{
    alert ('Меньше');
}
*/

//проверить число положительное, отризацтельное или ноль
/*
let xCon = prompt ('Enter x');
if (xCon>0) {
    console.log('положительное')
} else if (xCon<0) {
    console.log('отрицательное')
} else {
    console.log('это ноль')
}
*/

//тернарный оператор ?
//let result = условие? значение1 : значение2;
/*
let userAge = 20;
let res = (userAge >=18) ? 'совершенолетний': 'несовершолетний';
console.log(res);
*/


//оператор остаток от деления % - используется для чисел четное или нечетное число
/*
console.log(5 % 2);

let xCon = prompt ('Четное/Нечетное');
if (xCon%2 !=0) {
    alert('нечетное')
} else {
    alert('четное')
}

let res = (xCon%2 ==0) ? 'четное' : 'нечетное';
console.log(rel);
*/


// нечколько условий
// && and - и || or - или
/*
// пример. поступаемое число положительное и больше 10
if (value>0 && value>10){}
// пример. поступаемое число положительное и равно 0
if (value>0 || value==0){}

if (weekDay == 'Sunday' && isWorkink == true {console.log ('yes');}
*/

//циклы for, while
/*
for (начальное условие; шаг; конечное условие){
    действие
}
*/

// Задача. посчитать сумму чисел от 1 до 10
/*
let start = 1, end = 10, result = 0;
for (start = 1; start <= end; start = start+1) {
    result = result + start;
}
console.log(result);
*/

//посчитать сумму чисел от 10 до 1
/*
let i;
for (i=10; i>=1; i--){
    console.log(i)
}
*/

//2 УРОК ------ ФУНКЦИИ И ЦИКЛЫ
