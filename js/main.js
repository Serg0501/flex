//JS Classes
/*
//1 Создайте класс Работника. 
У каждого объекта обязательно должно быть свойства: id, имя, категория и зарплата за месяц.
Создайте следующие методы:
- вывод информации о зарплате
- подсчитать заработок за год
- подсчитать количество работников 
- *подсчитать сколько выплатили денег всем работникам за год
*/

class Worker{
    static countWorkers = 0;
    static id = 1;
    static SalaryWorkersPerYear =0;
    constructor (name, category, salary){
        this. id = Worker.id;
        this.name = name;
        this.category = category;
        this.salary = salary;
        Worker.countWorkers++;
        Worker.id++;
        
    }
    
    outSalaryInformation(){
        console.log('Salary of worker: ', this.salary);
    }
    
    outSalaryPerYear(){
        let salaryOfWorker = this.salary;
        return salaryOfWorker*=12;
    }

    outCountWorkers(){
       console.log('Amount of workers: ', this.Worker.countWorkers); //??????
    } 
/*
    outSalaryWorkersPerYear(){
        
    }
*/

};

const worker1 = new Worker('John', 1 , 1000);
const worker2 = new Worker('Tom', 2 , 1500);
const worker3 = new Worker('Jimmy', 3 , 1800);
const worker4 = new Worker('Ted', 4 , 2000);
const worker5 = new Worker('Simba', 5 , 2500);



// не отрабатывает, если выводить через метод, строка 35 !!!!!!
//Worker.outCountWorkers();  // Uncaught TypeError: Worker.outCountWorkers is not a function at main.js:53:8

console.log('Amount of workers: ', Worker.countWorkers);

//console.log(outSalaryWorkersPerYear());

console.group('worker1');
console.log(worker1);
worker1.outSalaryInformation();
console.log('Salary per year: ', worker1.outSalaryPerYear());
console.groupEnd;

console.group('worker2');
console.log(worker2);
worker2.outSalaryInformation();
console.log('Salary per year: ',worker2.outSalaryPerYear());
console.groupEnd;

console.group('worker3');
console.log(worker3);
worker3.outSalaryInformation();
console.log('Salary per year: ',worker3.outSalaryPerYear());
console.groupEnd;

console.group('worker4');
console.log(worker4);
worker4.outSalaryInformation();
console.log('Salary per year: ',worker4.outSalaryPerYear());
console.groupEnd;

console.group('worker5');
console.log(worker5);
worker5.outSalaryInformation();
console.log('Salary per year: ',worker5.outSalaryPerYear());
console.groupEnd;



/*
//* 2 Создайте класс Совместитель, который наследует Работника. 
У него есть дополнительные свойства - количество отработанных часов в день, ставка за час. 
Создайте методы:
- подсчитайте количество денег что зарабатывает за день
- подсчитайте ему зарплату за меняц (обновив свойство потом у родителя)
- подсчитайте количество совместителей
*/


class PartTimeWorker extends Worker{
    static CountPartTimeWorker = 0;
    constructor(name, category, hoursWorked, peyHour){
        super(name, category);
        this.hoursWorked = hoursWorked;
        this.peyHour = peyHour;
        PartTimeWorker.CountPartTimeWorker++;
    }

    outSalaryPerDay(){
        let salaryOfPTWorker = this.hoursWorked;
        return salaryOfPTWorker*= this.peyHour;
    }
/*
    outSalaryPerMonth(){
        можно ли использовать уже готовый метод? например: outSalaryPerDay() и * на кол-во дней?
    }
    */
};

const partTimeWorker1 = new PartTimeWorker('StanLee', 3, 4, 7.38);
const partTimeWorker2 = new PartTimeWorker('WiIIi', 4, 5, 9.25 );
const partTimeWorker3 = new PartTimeWorker('Sara', 5, 9, 10.5 );
const partTimeWorker4 = new PartTimeWorker('Evgen', 2, 7, 6.98);

console.group('partTimeWorker1');
console.log(partTimeWorker1);
console.log('SalaryPerDay: ',partTimeWorker1.outSalaryPerDay());
console.groupEnd;

console.group('partTimeWorker2');
console.log(partTimeWorker2);
console.log('SalaryPerDay: ',partTimeWorker2.outSalaryPerDay());
console.groupEnd;

console.group('partTimeWorker3');
console.log(partTimeWorker3);
console.log('SalaryPerDay: ',partTimeWorker3.outSalaryPerDay());
console.groupEnd;

console.group('partTimeWorker4');
console.log(partTimeWorker4);
console.log('SalaryPerDay: ',partTimeWorker4.outSalaryPerDay());
console.groupEnd;

// история как в задании №1, если на прямую выводит без проблем
console.log('Amount of PartTimeWorkers: ',PartTimeWorker.CountPartTimeWorker);

//console.log(PartTimeWorker.outSalaryPerMonth);
