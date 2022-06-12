
/*
Систему классов ошибок
SystemError - filed : msgError, codeError

child classes:

404 Not found
401 Unauthorized
500 Internal Server Error
*/

//13.03 на ее часах 



//Перехват ошибок, "try..catch"
//https://learn.javascript.ru/exception

try{
    COLOR;
    // your  code
} catch(error){
    //console.log('Your error: ',error);
    console.log(error.name);
    console.log(error.message);
}
console.log('hello');
COLOR;
// your  code
console.log('hello');

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error

/*
class Animal {	try{
    constructor(name) {	    COLOR;
      this.speed = 0;	    // your  code
      this.name = name;	} catch(error){
    }	    console.error('Your error: ',error);
    run(speed) {	    //console.log(error.name);
      this.speed = speed;	    //console.log(error.message);
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);	}
    }	console.log('hello');
    stop() {	
      this.speed = 0;	
      console.log(`${this.name} стоит.`);	
    }	
  }	
  // child class узконаправленная	
 class Rabbit extends Animal {	
    constructor(name) {	
      super(name);	
      this.name = name;	
    }	
    hide() {	
      console.log(`${this.name} прячется!`);	
    }	
  };	

  let Rex = new Animal("Rex");	
  Rex.run(10);	
  Rex.stop();	

  let krolik = new Rabbit('Krolik');	
  krolik.hide();  // личный метод свой	
  krolik.run(2); // возможность от родителя	
  krolik.stop()  // возможность от родителя	

  /*	*/
  User - класс родитель login, password	/*
  Buyer - класс ребенок (наследник) tel, address	COLOR;
  Worker - дочерний класс  exp, salary, category	// your  code
  */ 	console.log('hello');
*/


  class User {	
    constructor(login, password){	
        this.login = login;	
        this.password = password;	
    }	
    updatePassword(value){	
        this.password = value;	
    }	
  }	


  class Buyer extends User {	function divTwoNumber(a,b){
    constructor(login, password, telephone, address) {	    try{
      super(login, password); // contructor User	        if(b == 0){
      this._telephone = telephone;	            throw new Error('Second number must be not zero');
      this._address = address;	        }
    }	    } catch(e){
    set telephone(value){	        return 0;
        this._telephone = value;	
    }	
    get telephone(){	
        return this._telephone;	
    }	
    set address(value){	
        this._address = value;	
    }	
    get address(){	
        return this._address;	
    }	
    diliAddress() {	
        return this.address+','+this.telephone;	
    }	
  }	

  class Worker extends User{	
    constructor(login, password, exp, salary, category){	
        super(login, password);	
        this.exp=exp;	
        this.salary=salary;	
        this.category=category;	
    }	
    infoWorder(){	
        console.log(this.category, ':', this.salary);	
    }	    }
    return a/b;
}	}


const worker1 = new Worker('workerlogin', '12345', 5, 1000, 'category1');	console.log(divTwoNumber(20,10));
worker1.infoWorder();	
worker1.updatePassword('admin');	console.log(divTwoNumber(-120,10));
console.log(worker1);	


const buyer1 = new Buyer('buylogin', '12345', 'NY av New 64/15', '0951234578');	console.log(divTwoNumber(20,0));
console.log(buyer1);	
console.log(buyer1.diliAddress());	


console.log('Hello');


/*	/*
User - login, pswd	class RangeValidator
Worder - 	fileds : from , to
Student , 	methods: 
1. range - вернет массив стартовый limit и конечный limit  [5,12]
2. validate - проверяет входит ли число в єтот диапазон
 RangeValidator(5,12);
 validate(8)
 RangeValidator(12,5);   --- > RangeValidator(5,12);
*/	*/



class RangeValidator {
    constructor(from, to) {
        if(Number.isNaN(from) || !Number.isFinite(from)){
            throw new Error('Error. Number TO is wrong');
        }
        if(Number.isNaN(to) || !Number.isFinite(to)){
            throw new Error('Error. Number FROM is wrong');
        }
        this.from = from;
        this.to = to;
    }
    range() {
        if(this.from > this.to) {
            let copy_from = from;
            this.from = this.to;
            this.to = copy_from;
        }
        return [this.from. this.to];
    }
    validate(value){
        if(value >= this.from && value <= this.to) return true;
        return false;
    }
}



function f(value){
    if(!Number.isNaN(value) && Number.isFinite(value) && value != 0){
        // some code
    } else {
        throw new Error('Wrong value');
    }
}
