import React from "react";
import ReactDom from "react-dom";
import './index.less'
import { Hello } from './test'
new Promise((resolve, reject) => {setTimeout(() => {resolve('????')}, 5000)}).then((res) => {console.log(res);})
ReactDom.render( <Hello str={'????'}/>,document.getElementById("root"));
