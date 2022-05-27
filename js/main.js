//Циклы. Массивы. Функции

// Все задания оформить в виде функций: 

// 1 Вывести знак * столько раз сколько задаст пользователь

/*
function task1(symbolStr, countMax){
    let i, str="";
    for(i=1; i<=countMax; i++){
        str = str + symbolStr;
    }
    return str;
}

result = task1("*", prompt('Введите звёзды'));
console.log(result);
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
let a =[4, 45, -1, -5, 3.14, 0, 25, 100, -4, 97, 2.45, 4, 0, 88];
console.log(a);
    function task3(a){
            let sumEvenEl = 0, arrayEvenEl=[];
                for (i=0; i<a.length;i++){
                    if(a[i]%2==0){
                        arrayEvenEl[sumEvenEl]=a[i];
                        sumEvenEl +=a[i];
                    }
                }
console.log(arrayEvenEl); // В консоли выводит(105) [4, пусто × 3, 100, пусто × 95, 4, пусто × 3, 88])????           
return sumEvenEl;
    }
result = task3(a);
console.log('Сумма четных элементов ',result);
*/

//4 Обнулите все элементы массива меньше 10
/*
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
*/

// 5 Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004


//6 соедините два массива в один большой