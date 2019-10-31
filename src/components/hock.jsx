import React, { useState, useEffect, useRef } from "react";

class ParTest extends React.Component {
    render() {
        return (
            <div>123</div>
        );
    }
}

export default class Hock extends ParTest {
    render() {
        return (
            <div>
                <FunComp/>
                {super.render()}
                !!!!
            </div>
        );
    }
}
const FunComp = (props) => {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState([{name: 'abc', age: 18}]);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        console.log('useEffect');
        document.title = `You clicked ${count} times`;
    }, [count]);
    return (
        <div>
            {count}
            <button onClick={() => {
                setCount(count + 1);
            }}>+
            </button>
            <button onClick={() => setCount(preCount => {return preCount - 1})}>-</button>
            {info.map((it) => (<div key={it.name}>{it.name} - {it.age}</div>))}
            <button onClick={() => setInfo([{name: 'cba', age: 818}])}>更新</button>
            <div>
                <TextInputWithFocusButton/>
            </div>
        </div>
    );
};
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        console.log(inputEl.current.value);
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
