// 面向对象之 7 大基本原则（JS版）

// 面向对象编程有自己的特性与原则，如果对于面向对象有一些了解的话，面向对象三大特征，封装、继承、多态，如果对面向对这三个概念不太了解，
// 请参考面向对象之三个基本特征（javaScript）。


// 单一职责

// 如果我们在编写程序的时候，一类或者一个方法里面包含了太多方法，对于代码的可读性来说，无非是一场灾难，对于我们来说。
// 所以为了解决这个问题，出现了单一职责。

// 什么是单一职责
// 单一职责：又称单一功能原则，面向对象五个基本原则（SOLID）之一。它规定一个类应该只有一个发生变化的原因。(节选自百度百科)

// 按照上面说的，就是对一个类而言，应该仅有一个引起它变化的原因。换句话说，一个类的功能要单一，只做与它相关的事情。
// 在类的设计过程中要按职责进行设计，彼此保持正交，互不干涉。
// 单一职责的好处


// 类的复杂性降低，实现什么职责都有清晰明确的定义

// 可读性提高，复杂性降低，那当然可读性提高了

// 可维护性提高，可读性提高，那当然更容易维护了

// 变更引起的风险降低，变更是必不可少的，如果接口的单一职责做得好，一个接口修改只对相应的实现类有影响，对其他的接口无影响，
// 这对系统的扩展性、维护性都有非常大的帮助。


// 实例


class ShoppinCar {
    constructor() {
        this.goods = [];
    }

    addGoods(good) {
        this.goods = [good];
    }

    getGoodsList() {
        return this.goods;
    }
}

class Settlement {
    constructor() {
        this.result = 0;
    }

    calculatePrice(list, key) {
        let allPrice = 0;
        list.forEach((el) => {
            allPrice += el[key];
        });
        this.result = allPrice;
    }

    getAllPrice() {
        return this.result;
    }
}


// 用上面的代码来说 ShoppinCar 类存在两个方法 addGoods 和 getGoodsList,分别是添加商品和获取商品列表。

// Settlement 类中存在两个方法 calculatePrice 和 getAllPrice 分别做的事情是计算价钱与获取总价钱。

// ShoppinCar 与 Settlement 都是在做自己的事情。添加商品与计算价格，虽然在业务上是相互依赖的，
// 但是在代码中分别用两个类，他们自己做自己的事情。其中任何一个类更改不会对另一个类进行更改。

// 开闭原则
// 在一个类中暴露出去的方法，若这个方法变更了，则会产生很大的后果，可能导致其他依赖于这个方法且有不需要变更的业务造成大面积瘫痪。
// 为了解决这个问题，可以单独再写一个方法，若这个方法与这个类中的其他方法相互依赖。

// 解决办法：


// 把其中依赖的代码copy一份到新的类中。
// 在新类中引用旧类中的方法。


// 两种方法都不是最好的解决方案。

// 第一种方法会导致代码大量的重复，第二种方法会导致类与类之间互相依赖。

// 什么是开闭原则

// 开闭原则：“软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的”，
// 这意味着一个实体是允许在不改变它的源代码的前提下变更它的行为。(节选自百度百科)

// 开闭原则对扩展开放，对修改关闭,并不意味着不做任何修改，底层模块的变更,必然要有高层模块进行耦合，否则就是一个孤立无意义的代码片段。
// 开闭原则是一个最基本的原则，另外六个原则都是开闭原则的具体形态，是指导设计的工具和方法，而开闭原则才是精神领袖。

// 开闭原则好处


// 开闭原则有利于进行单元测试
// 开闭原则可以提高复用性
// 开闭原则可以提高可维护性
// 面向对象开发的要求


// 实例;

class Drag {
    down() {
        //  ...
    }

    move() {
        //  ...
        // 对拖拽没有做任何限制可以随意拖拽
    }

    up() {
        //  ...
    }
}

class LimitDrag extends Drag {
    move() {
        //  ...
        //  重写该方法对拖拽进行限制处理
    }
}


// 在 LimitDrag 中重写了 move 方法，若修改了可以满足两种需求，一种是限制型拖拽，一种是不限制型拖拽，任何一个更改了另外一个还是可以正常运行。
// 里氏替换

// 每个开发人员在使用别人的组件时，只需知道组件的对外裸露的接口，那就是它全部行为的集合，至于内部到底是怎么实现的，无法知道，也无须知道。

// 所以，对于使用者而言，它只能通过接口实现自己的预期，如果组件接口提供的行为与使用者的预期不符，错误便产生了。
// 里氏替换原则就是在设计时避免出现派生类与基类不一致的行为。

// 什么是里氏替换

// 里氏替换原则：OCP 作为OO的高层原则，主张使用“抽象(Abstraction)”和“多态(Polymorphism)”将设计中的静态结构改为动态结构，
// 维持设计的封闭性。

// “抽象”是语言提供的功能。“多态”由继承语义实现。(节选自百度百科)

// 里氏替换好处


// 代码共享，减少创建类的工作量，每个子类都拥有父类的方法和属性
// 提高代码的重用性
// 子类可以形似父类，但是又异于父类。
// 提高代码的可扩展性，实现父类的方法就可以了。许多开源框架的扩展接口都是通过继承父类来完成。
// 提高产品或项目的开放性


// 实例
//  抽象枪类
class AbstractGun {
    shoot() {
        throw "Abstract methods cannot be called";
    }
}

//  步枪
class Rifle extends AbstractGun {
    shoot() {
        console.log("步枪射击...");
    }
}

//  狙击枪
class AUG extends Rifle {
    zoomOut() {
        console.log("通过放大镜观察");
    }

    shoot() {
        console.log("AUG射击...");
    }
}

//  士兵
class Soldier {
    constructor() {
        this.gun = null;
    }

    setGun(gun) {
        this.gun = gun;
    }

    killEnemy() {
        if (!this.gun) {
            throw "需要给我一把枪";
            return;
        }
        console.log("士兵开始射击...");
        this.gun.shoot();
    }
}

//  狙击手
class Snipper extends Soldier {
    killEnemy(aug) {
        if (!this.gun) {
            throw "需要给我一把枪";
            return;
        }
        this.gun.zoomOut();
        this.gun.shoot();
    }
}

let soldier = new Soldier();
soldier.setGun(new Rifle());
soldier.killEnemy();

let snipper = new Snipper();
//  分配狙击枪
snipper.setGun(new AUG());
snipper.killEnemy();

snipper.setGun(new Rifle());
// snipper.killEnemy();  //  this.gun.zoomOut is not a function


// 从上述代码中可以看出，子类和父类之间关系，子类方法一定是等于或大于父类的方法。子类能够出现的父类不一定能出现，但是父类出现的地方子类一定能够出现。

// 依赖倒置

// 如果方法与方法之间或类与类之间，存在太多的依赖关系会导致代码可读性以及可维护性很差。依赖倒置原则能够很好的解决这些问题。

// 什么是依赖倒置

// 依赖倒置原则：程序要依赖于抽象接口，不要依赖于具体实现。简单的说就是要求对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合。(节选自百度百科)


// 高层模块不应该依赖低层模块，两者都应该依赖其抽象
// 抽象不应该依赖细节
// 细节应该依赖抽象


// 依赖倒置好处


// 通过依赖于接口，隔离了具体实现类
// 低一层的变动并不会导致高一层的变动
// 提高了代码的容错性、扩展性和易于维护


// 实例


//  抽象枪类
class AbstractGun {
    shoot() {
        throw "Abstract methods cannot be called";
    }
}

//  步枪
class Rifle extends AbstractGun {
    shoot() {
        console.log("步枪射击...");
    }
}

//  狙击枪
class AUG extends AbstractGun {
    shoot() {
        console.log("AUG射击...");
    }
}


// 从上面的代码可以看出，步枪与狙击枪的 shoot 全部都是依赖于 AbstractGun 抽象的枪类，上述编程满足了依赖倒置原则。


// 接口隔离

// 什么是接口隔离

// 接口隔离：客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。(节选自百度百科)

// 接口隔离原则与单一职责原则的审视角度不相同。单一职责原则要求是类和接口的职责单一，注重的职责，这是业务逻辑上的划分。接口隔离原则要求接口的方法尽量少。

// 接口隔离好处


// 避免接口污染
// 提高灵活性
// 提供定制服务
// 实现高内聚


// 实例


function mix(...mixins) {
    class Mix {}

    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor" && key !== "prototype" && key !== "name") {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

class Behavior {
    eat() {
        throw "Abstract methods cannot be used";
    }

    call() {
        throw "Abstract methods cannot be used";
    }
}

class Action {
    climbTree() {
        throw "Abstract methods cannot be used";
    }
}

class Dog extends Behavior {
    eat(food) {
        console.log(`狗正在吃${food}`);
    }

    hungry() {
        console.log("汪汪汪,我饿了");
    }
}

const CatMin = mix(Behavior, Action);

class Cat extends CatMin {
    eat(food) {
        console.log(`猫正在吃${food}`);
    }

    hungry() {
        console.log("喵喵喵,我饿了");
    }

    climbTree() {
        console.log("爬树很开心哦~");
    }
}

let dog = new Dog();
dog.eat("骨头");
dog.hungry();
let cat = new Cat();
cat.eat("鱼");
cat.hungry();
cat.climbTree();

// 大家一定要好好分析一下上面的代码，共有两个抽象类，分别对应不同的行为，Cat 与 Dog 类拥有共同的行为，但是 Cat 又拥有其自己单独的行为，使用抽象(即接口)继承其方法，使用接口隔离使其完成各自的工作，各司其职。


// 迪米特法则


// 什么是迪米特法则

// 迪米特法则：最少知识原则（Least Knowledge Principle 简写LKP），就是说一个对象应当对其他对象有尽可能少的了解,不和陌生人说话。英文简写为: LoD.(节选自百度百科)

// 迪米特法则的做法观念就是类间解耦，弱耦合，只有弱耦合了以后，类的复用率才可以提高。一个类应该对其他对象保持最少的了解。通俗来讲，就是一个类对自己依赖的类知道的越少越好。因为类与类之间的关系越密切，耦合度越大，当一个类发生改变时，对另一个类的影响也越大

// 迪米特法则好处


// 减少对象之间的耦合性


// 实例


class ISystem {
    close() {
        throw "Abstract methods cannot be used";
    }
}

class System extends ISystem {
    saveCurrentTask() {
        console.log("saveCurrentTask");
    }

    closeService() {
        console.log("closeService");
    }

    closeScreen() {
        console.log("closeScreen");
    }

    closePower() {
        console.log("closePower");
    }

    close() {
        this.saveCurrentTask();
        this.closeService();
        this.closeScreen();
        this.closePower();
    }
}

class IContainer {
    sendCloseCommand() {
        throw "Abstract methods cannot be used";
    }
}

class Container extends IContainer {
    constructor() {
        super();
        this.system = new System();
    }

    sendCloseCommand() {
        this.system.close();
    }
}

class Person extends IContainer {
    constructor() {
        super();
        this.container = new Container();
    }

    clickCloseButton() {
        this.container.sendCloseCommand();
    }
}

let person = new Person();
person.clickCloseButton();


// 上面代码中 Container 作为媒介，其调用类不知道其内部是如何实现，用户去触发按钮，Container 把消息通知给计算机，计算机去执行相对应的命令。

// 01组合/聚合复用原则

// 聚合（Aggregation）表示一种弱的‘拥有’关系，体现的是A对象可以包含B对象但B对象不是A对象的一部分。

// 合成（Composition）则是一种强的'拥有'关系，体现了严格的部分和整体关系，部分和整体的生命周期一样。

// 组合/聚合：是通过获得其他对象的引用，在运行时刻动态定义的，也就是在一个对象中保存其他对象的属性，这种方式要求对象有良好定义的接口，并且这个接口也不经常发生改变，而且对象只能通过接口来访问，这样我们并不破坏封装性，所以只要类型一致，运行时还可以通过一个对象替换另外一个对象。

// 优先使用对象的合成/聚合将有助于你保持每个类被封装，并被集中在单个任务上，这样类和类继承层次会保持较小规模，而且不太可能增长为不可控制的庞然大物。

// 组合/聚合复用原则好处


// 新的实现较为容易，因为超类的大部分功能可通过继承关系自动进入子类；
// 修改或扩展继承而来的实现较为容易。


// 实例

function mix(...mixins) {
    class Mix {}

    for (let mixin of mixins) {
        copyProperties(Mix, mixin);
        copyProperties(Mix.prototype, mixin.prototype);
    }
    return Mix;
}

function copyProperties(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== "constructor" && key !== "prototype" && key !== "name") {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

class Savings {
    saveMoney() {
        console.log("存钱");
    }

    withdrawMoney() {
        console.log("取钱");
    }
}

class Credit {
    overdraft() {
        console.log("透支");
    }
}

const CarMin = mix(Savings, Credit);

class UserCar extends CarMin {
    constructor(num, carUserName) {
        super();
        console.log();
        this.carNum = num;
        this.carUserName = carUserName;
    }

    getCarNum() {
        return this.carNum;
    }

    getCarUserName() {
        return this.carUserName;
    }
}

let myCar = new UserCar(123456798, "Aaron");
console.log(myCar.getCarNum());
console.log(myCar.getCarUserName());
myCar.saveMoney();
myCar.withdrawMoney();
myCar.overdraft();


// 总结

// 这些原则在设计模式中体现的淋淋尽致，设计模式就是实现了这些原则，从而达到了代码复用、增强了系统的扩展性。所以设计模式被很多人奉为经典。我们可以通过好好的研究设计模式，来慢慢的体会这些设计原则。
