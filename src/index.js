import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './static/css/common/reset.css'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
    <HashRouter >
        <App />
    </HashRouter>
),document.getElementById('root'))
registerServiceWorker();
