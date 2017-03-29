import React from 'react';

import {Link} from 'react-router'

export default class ArticleListItemPlaceholder extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <header>
                    <div className="heading-bg">
                        <h1 style={{color: "white", fontFamily: "Arial"}}>Loading data</h1>
                    </div>
                </header>
                <div className="content" style={{color: "black", fontFamily: "Arial"}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <footer>
                    <Link to="#" className="btn btn-lime pull-right" style={{fontFamily: "Arial"}}>Read More »</Link>
                </footer>
            </article>
        );
    }
}
