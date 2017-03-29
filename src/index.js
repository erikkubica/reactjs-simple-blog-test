import React from 'react';
import ReactDOM from 'react-dom';

import Root from "./modules/base/Root";
import Home from './modules/home/Home';
import Article from "./modules/article/Article";
import Categories from "./modules/category/Categories"
import Category from "./modules/category/Category"

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

global.jQuery = require("jquery");
require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('./public/css/bootstrap-theme.css');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={Root}>

            <Route path="/categories">
                <IndexRoute component={Categories}/>
                <Route path=":categoryId" component={Category}/>
            </Route>

            /**
             * Keep down Clean "/something" paths do allow match above
             */
            <Route path="/">
                <IndexRoute component={Home}/>
                <Route path="/:articleId" component={Article}/>
            </Route>

        </Route>
    </Router>
    , document.getElementById('root'));