import React,{Component} from 'react';

import './header.less';

export default class Header extends Component {
    constructor() {
        super();
    }

    goBack() {
        console.log(1);
    }

    goHome() {
        console.log(2);
    }

    render() {
        return (
            <div className="header">
                <div className="header-left icon" onClick={this.goBack.bind(this)}>

                </div>
                <div className="header-center">
                    {this.props.title}
                </div>
                <div className="header-right icon" onClick={this.goHome.bind(this)}>

                </div>
            </div>
        )
    }
}