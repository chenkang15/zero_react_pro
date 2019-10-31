// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};
function Cat(){
}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//&emsp;Test Code
var cat = new Cat();


// console.log(cat.name);//cat
// console.log(cat.eat('fish'));//cat正在吃：fish  undefined
// console.log(cat.sleep());//cat正在睡觉！ undefined
// console.log(cat instanceof Animal); //true
// console.log(cat instanceof Cat); //true
// console.log(cat.__proto__.constructor);



//父类
class Person {
    //constructor是构造方法
    constructor(skin, language) {
        this.skin = skin;
        this.language = language;
    }
    say() {
        console.log('我是父类')
    }
}

//子类
class Chinese extends Person {
    constructor(skin, language, positon) {
        // console.log(this);//报错
        super(skin, language);
        //super();相当于父类的构造函数
        // console.log(this); // 调用super后得到了this，不报错，this指向子类，相当于调用了父类.prototype.constructor.call(this)
        this.positon = positon;
    }
    aboutMe() {
        super.say()
        console.log(`${this.skin} ${this.language}  ${this.positon}`);
    }
}


//调用只能通过new的方法得到实例,再调用里面的方法
let obj = new Chinese('红色', '中文', '香港');
obj.aboutMe();
obj.say();
