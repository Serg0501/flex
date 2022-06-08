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

/*
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
        dimensions:{W:358, D:242,  H: 19}, 
    }
};

console.log(objNoteBook);
*/



//Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. 
//Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)


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
        password:'3hasBoomBera'

    };
    const user5= {
        login:'Leha classic',
        password:'smotryZlimVzgadom',

    };


let arrUsers = new Set([user1, user2, user3, user4, user5]);

console.log(Array.from(arrUsers));


//Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

const usersMap = new Map();
arrUsers.forEach(element => usersMap.set(element.login, element));
console.log(usersMap);



//Task 4* разными способами решите вопрос соедитения двух массивов без повторов
