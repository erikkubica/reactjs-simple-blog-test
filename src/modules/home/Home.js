import React from 'react';

import ArticleList from "../article/ArticleList";
import Navigation from "../base/Navigation";

export default class Home extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Navigation/>
                <div id="main">
                    <main role="main" className="container">
                        <div className="row">
                            <div className="col-sm-offset-0 col-sm-12 col-md-offset-2 col-md-9">
                                <ArticleList/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}