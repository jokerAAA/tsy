import React,{Component} from "react";
import axios from '../../utils/axios';

import config from '../../utils/api';

const indexApi = config.api.index;

export default class Index extends Component {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.getData();
    }

    getData() {
        axios({
            url:indexApi,
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