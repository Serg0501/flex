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
for(n;n<=50;n++){
    if(n%5==0){
        console.log(n) // alert(n)
    }
}
*/
/*
let n=10;
while(n<=50){
    console.log(n);
    n=n+5;
}
*/

//5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).
/*
let lim1=Number(prompt('Введите начальное значение')); 
lim2=Number(prompt('Введите конечное значение')); res=1
for(n=lim1; n<=lim2; n=1+(lim1++)){
res=res*n;
console.log(res)
}
*/

//6. Задание 5 оформите функцией
/*
function task5(lim1,lim2,res=1){
    for(n=lim1; n<=lim2; n=1+(lim1++)){
        res=res*n;
        console.log(res)
        }
}
task5(prompt('Введите начальное значение'),prompt('Введите конечное значение'));
*/


//Функции
//1. Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль
/*
function task1(a,b,c,d){
console.log (a,b,c,d)
}
task1(11, true, "java script", "100")
*/

//2. Создайте переменные greeting со значением'Hello, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
/*
function task2(greeting = 'Hello, ',userName,res){
    res=greeting+userName;
    console.log (res) // или alert (res)
}
    
task2('Hello, ',prompt('Введи Ваше имя:'));
*/

//3. Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)
/*
function task3 (userValue){
    if(userValue >0 && userValue<=15){
        console.log('1я четверть часа');
    } else if(userValue >15 && userValue<=30){
        console.log('2я четверть часа');
    } else if(userValue >30 && userValue<=45){
        console.log('3я четверть часа');
    } else if(userValue >45 && userValue<=60){
        console.log('4я четверть часа');
    } else if(userValue >60){
        console.log('такого значения НЕТ!');
    }
}          
task3(prompt('Введите количество минут'))
*/

//4. Вывод чисел от 10 до 50, которые кратны 5
/*
function task4 (n){
    while(n<=50){
        console.log(n);
        n=n+5; 
    }
}
task4 (10)
*/
/*
function task4 (n){
    for(n;n<=50;n++){
        if(n%5==0){
        console.log(n);
        }
    }
}
task4 (10)
*/
//5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).

/*
function task5(lim1,lim2,res=1){
    for(n=lim1; n<=lim2; n=1+(lim1++)){
        res=res*n;
        console.log(res)
        }
}
task5(prompt('Введите начальное значение'),prompt('Введите конечное значение'));
*/

/*
function menu (val){
    if (val==1){
        console.log('task1. Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль');
    } else if(val==2){
        console.log('task2. Создайте переменные greeting со значением Hello,  и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием.');
    } else if(val==3){
        console.log('task3. Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)');
    } else if(val==4){
        console.log('task4. Вывод чисел от 10 до 50, которые кратны 5');
    } else if(val==5){
        console.log('task5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).');
    } else if(val>=6){
        console.log('Такого нам не задавали!')
    }
}
menu(prompt('Введите номер задания!'));
*/