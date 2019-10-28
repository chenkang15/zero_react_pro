//模拟call
Function.prototype.myCall = function (obj) {
    if (obj === null || obj === undefined) {
        obj = window;
    } else {
        obj = Object(obj);
    }
    let arg = [];
    let val;
    for (let i = 1; i < arguments.length; i++) {
        arg.push('arguments[' + i + ']');
        // 这里要push 这行字符串  而不是直接push 值
        // 因为直接push值会导致一些问题
        // 例如: push一个数组 [1,2,3]
        // 在下面👇 eval调用时,进行字符串拼接,JS为了将数组转换为字符串 ，
        // 会去调用数组的toString()方法,变为 '1,2,3' 就不是一个数组了，相当于是3个参数.
        // 而push这行字符串，eval方法，运行代码会自动去arguments里获取值
    }
    obj._fn_ = this;
    val = eval('obj._fn_(' + arg + ')');// 字符串拼接，JS会调用arg数组的toString()方法，这样就传入了所有参数
    delete obj._fn_;
    return val;
};
//模拟apply
Function.prototype.myApply = function (obj, arr) {
    if (obj === null || obj === undefined) {
        obj = window;
    } else {
        obj = Object(obj);
    }
    let args = [];
    let val;
    for (let i = 0; i < arr.length; i++) {
        args.push('arr[' + i + ']');
    }
    obj._fn_ = this;
    val = eval('obj._fn_(' + args + ')');
    delete obj._fn_;
    return val;
};
//模拟bind
Function.prototype.myFind = function (obj) {
    if (obj === null || obj === undefined) {
        obj = window;
    } else {
        obj = Object(obj);
    }
    let _this = this;
    let argArr = [];
    let arg1 = [];
    for (let i = 1; i < arguments.length; i++) {
        arg1.push(arguments[i]);
        argArr.push('arg1[' + (i - 1) + ']');
    }
    return function () {
        let val;
        for (let i = 0; i < arguments.length; i++) {
            argArr.push('arguments[' + i + ']');
        }
        obj._fn_ = _this;
        console.log(argArr);
        val = eval('obj._fn_(' + argArr + ')');
        delete obj._fn_;
        return val;
    };
};
