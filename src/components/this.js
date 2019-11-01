
const a = {val: 'aaa_val', aFn: () => {console.log(this)}};
const b = {val: 'bbb_val', fn: function () {
        const temp = () => {console.log(this)}
        temp();
    }};
b.fn();
const fn = b.fn;
fn();
b.fn.apply(a);
a.aFn()
console.log(this);
