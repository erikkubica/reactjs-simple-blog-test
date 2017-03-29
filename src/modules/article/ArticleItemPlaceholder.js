import React from 'react';

export default class ArticleItemPlaceholder extends React.Component {

    render() {
        return (
            <article>
                <header>
                    <div className="heading-bg">
                        <h1 style={{color: "white"}}>Loading data</h1>
                    </div>
                </header>
                <div className="content noafter" style={{color: "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </article>
        );
    }
}