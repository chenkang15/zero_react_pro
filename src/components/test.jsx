import React from "react";
// import style from './index.less'
import ModuleCss from './moduleCss'
import './index.less'
class ParTest extends React.Component{
    render() {
        return (
            <div className="parent">
                <div className="child"/>
            </div>
        );
    }
}
export default class Test extends ParTest {
    render() {
        return (
            <div>
                <ModuleCss/>
                ????
                {super.render()}
                !!!!
            </div>
        );
    }
}
