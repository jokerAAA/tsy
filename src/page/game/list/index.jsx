import React,{Component} from 'react';
import axios from '../../../utils/axios';
import {imgHost} from '../../../utils/host';
import '../../../static/css/game/list/index.less';



export default class Gamelist extends Component {
    constructor() {
        super();
        this.state = {
            letterArr : [] ,
            gameArr : [] ,
            letter : 'hot' ,
            goodsid : 1 ,
            activeLetter:'hot',
            scrollHeight : 600
        }
        this.init();
    }

    init() {
        const goodsid = this.state.goodsid;
        const letter = this.state.letter ;
        this.getData(goodsid,letter);
    }

    componentDidMount() {
        this.setHeight();
    }

    setHeight() {
        let search = this.refs.search.clientHeight || 44;
        let height = window.screen.height - search ;
        this.setState({
            scrollHeight: height
        })
    }

    getData(goodsid,letter) {
        const that = this ;
        axios.get(`/api/games/list/index?goodsid=${goodsid}&letter=${letter}`)
        .then(function(res) {
            const letterArr = res.data.data.firstLetterList ;
            const gameArr = res.data.data.gameList;
            gameArr.forEach(function(value) {
                value.pic = imgHost + value.pic ;
            })
            that.setState({
                letterArr : letterArr ,
                gameArr : gameArr 
            },()=> {
                
            })
        })
    }

    changeLetter(value) {
        const letter = value ;
        const goodsid = this.state.goodsid ;
        this.setState({
            activeLetter:letter
        })
        this.getData(goodsid,letter);
    }

    goList(gameid) {
        console.log(this.props);
        this.props.history.push(`/goods/list?gameid=${gameid}&goodsid=1`)
    }

    render() {
        const that = this ;
        let letterDom = this.state.letterArr.length > 0 && this.state.letterArr.map((value)=>
        <div key={value} className={that.state.activeLetter == value ? 'active-letter letter-items' : 'letter-items'} onClick={this.changeLetter.bind(this,value)}>{value == 'hot' ? '热' : value}</div>
    );
        let gameDom = this.state.gameArr.length > 0 && this.state.gameArr.map((value)=>
            <div className='game-items' key={value.id} onClick={this.goList.bind(this,value.id)}>
                <img className="game-items-img" src={value.pic} alt=""/>
                <div className="game-items-text">{value.name}</div>
            </div>);

        let height = this.state.scrollHeight;
        return (
            <div className="container">
                <section className="search" ref='search'>this is search</section>
                <section className="list" style={{height:height}}>
                    <aside className="letter">
                    {letterDom}
                    </aside>
                    <main className="game">
                    {gameDom}
                    </main>
                </section>
            </div>
        )
    }
}