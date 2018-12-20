'use strict';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    browserHistory,
    Redirect
} from 'react-router-dom';

import PrivateRoute from '../modules/PrivateRoute.jsx';

import HomePage from './home.jsx';
import TechPage from './technology.jsx';

import './app.scss';

const App = () => {
    return <Router history={browserHistory} >
        <div className="main_frame">
            <Route exact path="/" component={HomePage} />
            <Route path="/technology" component={TechPage} />
        </div>
    </Router>
}

export default App;