import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title ? this.props.title : "Reactive Blog"
        }
    }

    render() {
        return (
            <div className="App-header">
                <img src="" className="App-logo" alt="logo"/>
                <h2 dangerouslySetInnerHTML={{__html: this.state.title}}/>
            </div>
        );
    }
}



