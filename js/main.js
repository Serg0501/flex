//Array. String
//1 Отфильтруйте отрицательные элементы в массиве, оставив только положительные

//let arr = [ 107, 21, -0.5, 89, 5, 101, - 15, 0.64, 7, 0, -3, 99, 568, 0.1, 55];

/*
let task1 = arr.filter(el => el>=0);
console.log(task1);
*/
//2 Найдите сумму элементов массива которые меньше 100 по значению


/*
let resLessHund = arr.filter(isLessHund = (value) => value<100);
let resSum = resLessHund.reduce(sumNum = (a, b) => a + b)
console.log(resSum);
*/

/*
let task2 = arr.filter((el, i) => (el<100)).reduce((accum, val) => accum + val);
console.log(task2);
*/

//3 Уменьшите каждый элемент массива на 3%

/*
let task3 = arr.forEach((el,i,arr)=>arr[i]*=0.97);
console.log(arr);
*/

//4 Если все элементы массива меньше 100 увеличьте их на 5%

//let arr = [ 107, 21, -0.5, 89, 5, 101, - 15, 0.64, 7, 0, -3, 99, 568, 0.1, 55];

//let arr = [ 10, 21, -0.5, 89, 5, 11, - 15, 0.64, 7, 0, -3, 99, 58, 0.1, 55];
/*
let task4 = arr.every((el,i,arr)=>arr[i]<100);
console.log(task4); 

let  = arr.forEach((el,i,arr)=>arr[i]*=1.05);
console.log(arr);
*/
// как сделать чтоб отрабатывало тру/фолс????
   




//5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")


//6 Соедините две строки в одну и переверните наоборот

//let a1 = [1,2,3,4,5,6,7,8,9];
//let a2= [10,20,30,40,50,60,70,80,90];
/*
console.log(a1,a2);
let a3 = a1.concat(a2);
console.log(a3);
let a4 = a3.reverse()
console.log(a4);
*/
/*
// НЕ знаю правильно ли????
let task6 = (a1, a2) => a1.concat(a2);
console.log(task6);
*/
//7* Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.


//8* Вывести индексы минимальных элементов массива



