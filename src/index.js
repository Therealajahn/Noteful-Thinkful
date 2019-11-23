import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Routes/store.js';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
    <App store={store}/>
</BrowserRouter>,
 document.getElementById('root'));


