import React from 'react';

import {Link} from 'react-router'

export default class ArticleListItemPlaceholder extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const defaultHeaderImage = "https://www.netlime.eu/wp-content/uploads/2015/12/Wallpaper-Nature-8B71-845x300.jpg";
        return (
            <article>
                <header
                    style={{"backgroundImage": "url('" + defaultHeaderImage + "')"}}>
                    <div className="heading-bg">
                        <h1 style={{color: "white"}}>Loading data</h1>
                    </div>
                </header>
                <div className="content" style={{color: "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <footer>
                    <Link to="#" className="btn btn-lime pull-right">Read More »</Link>
                </footer>
            </article>
        );
    }
}
