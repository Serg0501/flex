//Массивы

//10,120,6,320
//prod1.prod2....5
//totalSum

//1
/*
let array0=[];
let array1 = [100, 120, 6, 320, 15];
*/
/*
//2
let array2 = new Array();
*/
/*
let size = array1.length;
let i;
*/
//задание. вывести массив
//1
/*
console.log(array1);
*/
//
/*
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
*/
//2
//i - index 0...4
/*
for(i=0; i < array1.length; i++){
    console.log(array1[i]);
}
*/

//объявить массив из 5 чисел и увеличить каждое в 2 раза
/*
let array3 = [10,20,30,40,50];
for(i=0; i<array3.length; i++){
    array3[i] *= 2; //array3[i] = array3[i] * 2;
}
console.log('array 3task:', array3);
*/
//задание
//каждое число увеличить на 100
/*
for(i=0; i<array3.length; i++){
    array3[i] +=100; //array3[i] = array3[i] * 2;
}
console.log('array 3task:', array3);
*/

// Задача вывести массив наоборот (с последнего к первому)

for(i = array3.length-1; i>=0; i--){
    console.log(array3[i]);
    //console.log(i); вывод индекса

}

// Задача вывести элементы с нечетными индексами
for(i=1; i<array3.length; i = i + 2){
    console.log(array3[i]);
}
// Задача вывести элементы с четными индексами
for(i=0; i<array3.length; i = i + 2){
    console.log(array3[i]);
}
/*
////Юлия Freshcode12:30
https://github.com/pdcourses/js_pd2022/commit/4fb64a76913fdef318a1f3c9fa071c1ef1891d60
*/