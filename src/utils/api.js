const host = 'http://wx.tsy.com';
let config = {
    api:{
        host:'wx.tsy.com',
        index:host+'/indexpage/index/index',
        game:host+'/games/list/index',
        goods:{
            data:host+'/trades/list/index',
            list:host+'/trades/list/indexpager',
            area:host+'/trades/list/getarealist',
            detail:host+'/trades/list/info'
        }
    }
}


export default config ;