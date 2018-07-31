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
            goodsid : 1 ,
            scrollHeight : 600
        }
        this.init();
    }

    init() {
        this.getData();
        
    }

    componentDidMount() {
        this.setHeight();
    }

    setHeight() {
        let height = window.screen.height - 30 ;
        this.setState({
            scrollHeight: height
        })
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
        let letterDom = this.state.letterArr.length > 0 && this.state.letterArr.map((value)=>
        <div key={value} className='letter-items'>{value}</div>
    );
        let gameDom = this.state.gameArr.length > 0 && this.state.gameArr.map((value)=>
        <div key={value.id} className='game-items'>{value.name}</div>);

        let height = this.state.scrollHeight;
        console.log(height)
        return (
            <div className="container">
                <section className="search">this is search</section>
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