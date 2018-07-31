import React,{Component} from 'react';
import axios from '../../../utils/axios';
import '../../../static/css/game/list/index.less'

export default class Gamelist extends Component {
    constructor() {
        super();
        this.state = {
            letterArr : [] ,
            gameArr : [] ,
            letter : 'hot' ,
            goodsid : 1
        }
        this.init();
    }

    init() {
        this.getData()
    }

    getData() {
        const that = this ;
        const goodsid = this.state.goodsid;
        const letter = this.state.letter ;
        axios.get('/api/games/list/index',{
            goodsid : goodsid ,
            letter :letter
        })
        .then(function(res) {
            const letterArr = res.data.data.firstLetterList ;
            const gameArr = res.data.data.gameList ;
            that.setState({
                letterArr : letterArr ,
                gameArr : gameArr 
            },()=> {
                
            })
        })
    }

    render() {
        return (
            <div className="container">
                <section className="search">this is search</section>
                <section className="list">

                </section>
            </div>
        )
    }
}