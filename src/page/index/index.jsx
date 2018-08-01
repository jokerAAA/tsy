import React,{Component} from "react";
import axios from '../../utils/axios';




export default class Index extends Component {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.getData();
        // fetch('http://cdt0-wxmn.taoshouyou.com/indexpage/index/index').then(function(res) {
        //     console.log(res);
        // })
    }

    getData() {
        axios({
            url:"api/indexpage/index/index",
            method:'get',
            data:{
                a:1
            },

        })
        .then(function(res) {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                <h1>this is index!</h1>

            </div>
        )
    }
}