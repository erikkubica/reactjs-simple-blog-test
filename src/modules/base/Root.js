import React from 'react'
import Navigation from "../base/Navigation";

export default class Root extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Navigation/>
                {this.props.children}
            </div>
        );
    }
}