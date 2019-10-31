import React from 'react';
import ReactDom from 'react-dom';
import './index.less';
import { Hello } from './test';
import Hock from './components/hock'
import Test from './components/test'
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('????');
//     }, 5000);
// }).then((res) => {
//     console.log(res);
// });

ReactDom.render(<Test/>, document.getElementById('root'));
