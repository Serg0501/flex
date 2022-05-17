//1. Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль
/*
let a,b,c,d 
a = 11
b = true
c = "java script"
d = "100"
console.log (a,b,c,d)
 */

//2. Создайте переменные greeting со значением'Hello, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

/*
let greeting = 'Hello, '
let userName = prompt('Введи Ваше имя:')
result=greeting+userName
console.log (result)
*/

//3. Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)

/*
let userValue=prompt('Введите количество минут');
let result;
if(userValue >0 && userValue<=15){
    result="1я четверть часа";
} else if(userValue >15 && userValue<=30){
    result="2я четверть часа";
} else if(userValue >30 && userValue<=45){
    result="3я четверть часа";
} else if(userValue >45 && userValue<=60){
    result="4я четверть часа";
} else if(userValue >60){
    result="такого значения НЕТ!";
}
console.log (result)
*/

//4. Вывод чисел от 10 до 50, которые кратны 5

/*
let n=10;
while(n<=50){
    console.log(n);
    n=n+5;
}
*/

//5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).

let lim1=prompt('Введите начальное значение'); lim2=prompt('Введите конечное значение'); res=0
for(n=lim1; n<=lim2; n=n+n){
    res=res*n;
}
console.log('res')


