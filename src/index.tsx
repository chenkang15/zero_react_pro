import React from "react";
import ReactDom from "react-dom";
import './index.less'
import { Hello } from './test'
import  searchSvg, { ReactComponent as SearchSvg } from '../public/service.svg'
// new Promise((resolve, reject) => {setTimeout(() => {resolve('????')}, 5000)}).then((res) => {console.log(res);})

function Fn() {}
const obj = new Fn();
console.log(obj, 'obj');
console.log(obj.__proto__, 'obj.__proto__');
console.log(obj.constructor.prototype, 'obj.constructor.prototype');
ReactDom.render( (
    <div style={ {background: 'gold', fill: 'pink'} }>
        <SearchSvg fill="currentColor"/>
        <img src={ searchSvg } alt=""/>
        <img src={ searchSvg } alt=""/>
        <img src={ searchSvg } alt=""/>
        123四五六
    </div>
),document.getElementById("root"));
