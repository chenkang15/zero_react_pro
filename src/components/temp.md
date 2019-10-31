var new2 = function (func) {
    var o = Object.create(func.prototype);//创建对象
    var k = func.call(o);//改变this指向，把结果付给k
    if (typeof k === 'object') {//判断k的类型是不是对象
        return k;&emsp;//是，返回k
    } else {
        return o;//不是返回返回构造函数的执行结果
    }
}
1.创了一个新对象;
2.this指向构造函数;
3.构造函数有返回,会替换new出来的对象,如果没有就是new出来的对象
4.手动封装一个new运算符



原型链


__proto__ 串联起来的链

实例c 是他通过构造函数new出来的

new 构造函数 出来的  实例有一个 __proto__ 属性，指向自己的构造函数的原型对象，构造函数的原型对象可以是别的构造函数new出来的实例
也就是 new FunA.__proto__ == FunA.prototype == new FunB
 new FunB.__proto__ == FunB.prototype == new FunC
...
 == Object.prototype (Object.prototype.__proto__ == null)

 构造函数 构造函数.prototype == 原型对象
 实例 1、new 构造函数 2、 实例.__proto__ == 构造函数.prototype
 原型对象 构造函数.constructor = 构造函数



function deepClone(source){
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for(let keys in source){ // 遍历目标
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      }else{ // 如果不是，就直接赋值
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}


let obj = {name:'',age:'',sex:''  },
    defaultName = ["这是姓名默认值1","这是年龄默认值1","这是性别默认值1"];
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      get() {
        return defaultName;
      },
      set(value) {
        defaultName = value;
      }
    });
  });

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.sex);
  obj.name = "这是改变值1";
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.sex);

  let objOne={},defaultNameOne="这是默认值2";
  Object.defineProperty(obj, 'name', {
      get() {
        return defaultNameOne;
      },
      set(value) {
        defaultNameOne = value;
      }
  });
  console.log(objOne.name);
  objOne.name = "这是改变值2";
  console.log(objOne.name);
不能监听数组索引赋值和改变长度的变化
必须深层遍历嵌套的对象,因为defineProterty只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历，
如果属性值也是对象那么需要深度遍历,显然能劫持一个完整的对象是更好的选择
