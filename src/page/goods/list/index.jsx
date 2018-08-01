import React,{Component} from 'react';

export default class Goodslist extends Component {
    constructor() {
        super()
        this.init()
    }

    init() {
        
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div className="contaner">
                <h1>this is goodslist</h1>
            </div>
        )
    }
}