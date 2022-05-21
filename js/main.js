//вывести числа от 5 до1

/*
let num1 = 5, num2 = 1;
for(num1; num1>=num2; num1--){
    console.log(num1);
}
*/
/*
let num1 = 5, num2 = 1;
while(num1>=num2){
    console.log(num1);
    num1--;
}
*/
/*
let num1 = 5, num2 = 1;
while(true){
    console.log(num1);
    num1--;
    if (num1<num2){
        break
    }
}
*/
/*
while(true){
    console.log(num1);
    num1--;
    if (num1>=num2) continue;
    break;
}
*/
//сделать бесконечный вызов меню, пока пользователь сам не решит выйти(exit 0)

//Юрка Кр
/*
function dropMenu(menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4')){
    switch(menu){
        case '0':console.log('Exit'); break;
        case '1':console.log('Hello'); dropMenu(); break;
        case '2':console.log('Hello'); dropMenu();break;
        case '3':console.log('Hello'); dropMenu();break;
        case '4':console.log('Hello'); dropMenu();break;
        default:alert('Нет такого значения:-/');dropMenu();
    }
}
dropMenu();
*/
//Юлия ФК

/*
let ch = +prompt('task?');  //1-4
let flag = true, r =0;

while(flag){

switch(ch){
case 1: {f1(); break;}
case 2: {f2(1,10); break;}
case 3: {f3(5); break;}
case 4: {f4(1,10,12); break;}
default: {alert('Error number'); break;}
}
repeat = promt('Continue? (1-yes, 0 - no)');
if(r == 0) flag=false;

}
true 1
false 0
*/