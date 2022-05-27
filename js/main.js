//Циклы. Массивы. Функции

// Все задания оформить в виде функций: 

// 1 Вывести знак * столько раз сколько задаст пользователь
/*
function task1(starsCount,n=0){
    for(n;starsCount<=n;n++){
        task1+='*'
        console.log(task1);
    }
}
task1(prompt('Введите колличество *'));
*/
/* //?????????
function repeatMsg(msg,n){
    let i;
    for(i=1;i<=msg;i++){
        console.log(n+='*');
    }
}
repeatMsg(prompt('Введите колличество *'));
*/
// 2 Вывод чисел от limit1 до limit2, которые кратны num
/*
function task2(lim1,lim2,num,n){
    for(n=lim1; n<=lim2; n=lim1++){
        if (n%num==0){
           console.log(n) 
        }
    }
}
*/
/*
function task2(lim1,lim2,num){
    for(lim1; lim1<=lim2; n=lim1++){
        if (lim1%num==0){
           console.log(lim1) 
            }
        }
}
task2(prompt('Введите начальное значение'),prompt('Введите конечное значение'),prompt('Введите значение num'));
*/

// 3 Сумма четных элементов массива
/*
let a =[4, 45, -1, -5, 3.14, 0, 25, 100, -4, 2.45, 4, 0, 88];
//console.log (a);
let count = 0;
for (i=0; i<a.length;i++){
    if(a[i]%2==0){
        count+=a[i];
        //console.log(a[i]);
    }
}
console.log(count)
*/
/*
let a =[4, 45, -1, -5, 3.14, 0, 25, 100, -4, 97, 2.45, 4, 0, 88];

function task3(a){
    let count = 0, sumEvenEl =[];
        for (i=0; i<a.length;i++){
        if(a[i]%2==0){
            sumEvenEl[count]=a[i];
            count+=a[i];
        }
    console.log (`{count} = ${count}`);
    return a;
    }
}

 
result = task3(a);
console.log(result);
console.log(a);
*/
//4 Обнулите все элементы массива меньше 10

let a =[4, 45, -1, -5, 3.14, 0, 25, 100, -4, 2.45, 4, 0, 88];
console.log(a);
    function task4(a){
        let countBelowTen=0, arrayElBelowTen=[];
            for(i=0;i<a.length;i++){
                if(a[i]<10){
                    arrayElBelowTen[countBelowTen] = a[i];
                    countBelowTen++;
                    a[i]=0;    
        }
    }
return a;
}
result = task4(a);
console.log(result);

// 5 Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004


//6 соедините два массива в один большой