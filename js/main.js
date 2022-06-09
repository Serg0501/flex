//JS object
/*
Task 1 Создайте объект ноутбука 

1 Серийный номер 3V5E7EA
2 Модель HP 255 G8
3 Экран:
Тип экрана IPS
Разрешение 1920x1080
4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
5 Оперативная память 8 ГБ
6 Накопители данных:
Объём HDD 256 ГБ SSD
Видеокарта AMD Radeon Graphics
7 Корпус: 
Цвет Серебристый
Вес 1,7
Габариты (Ш х Г х В) 358 x 242 x 19

PS если ноут не хотите создайте обьект по любой интересующей Вас теме
*/


const objNoteBook = {
    serialNumber:'3V5E7EA', 
    model:'HP255G8',
    screen:{
        screenType: 'IPS',
        resolution: [1920,1080],
    },
    processor:{ 
        type:'AMD Ryzen 7 5700U',
        octaCore: '1.8 - 4.3 GHz',
    },
    ram:'8GB', 
    dataStorageDevices:{
        hddCapacity:'256 GB SSD', 
        type:'AMD Radeon Graphics',
},
    body:{
        color:'Silver', 
        weight:'1.7 kg', 
        dimensions:{W:358, D:242,  H:19}, 
    }
};

console.log(objNoteBook);


//Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. 
//Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)

//#1
   const user1= {
        login:'MrPhoneHolder',
        password:'CallmemayBe',

    };
    const user2= {
        login:'JavaScripter',
        password:'JSRyyyyyyLES',

    };
    const user3= {
        login:'doctorGamer',
        password:'oneMoreCut98',

    };
    const user4= {
        login:'Jeka Karas',
        password:'3hasBoomBera',

    };
    const user5= {
        login:'Leha classic',
        password:'smotryZlimVzgadom',

    };


let arrUsers = new Set([user1, user2, user3, user4, user5]);

console.log(Array.from(arrUsers));

//#2
class Users{
    constructor(login, password){
        this.login = login;
        this.pass = password;
    }
};

let user6, user7, user8, user9, user10;

const users = [
    user6 = new Users('MrPhoneHolder', 'CallmemayBe'),
    user7 = new Users('JavaScripter', 'JSRyyyyyyLES'),
    user8 = new Users('doctorGamer', 'oneMoreCut98'),
    user9 = new Users('Jeka Karas', '3hasBoomBera'),
    user10 = new Users('Leha classic', 'smotryZlimVzgadom'),
]

console.log(users);

//Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

const usersMap = new Map();
arrUsers.forEach(el => usersMap.set(el.login, el)); // для #1
users.forEach(el => usersMap.set(el.login, el)); //  для #2
console.log(usersMap);


//Task 4* разными способами решите вопрос соедитения двух массивов без повторов

const a1 = [1,2,3,4,5,6,7,8,9];
const a2 = [10,20,30,40,50,60,70,80,90];
console.log(a1,a2);

const a3 = [...a1, ...a2]; //#1
const a4 = a1.concat(a2);  //#2
console.log(a3,a4);


