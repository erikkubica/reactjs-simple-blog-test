import React from 'react';

import {Link} from 'react-router'

export default class CategoryListItem extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <div className="category">
                    <h1><Link to={"/categories/" + this.props.id}>{this.props.title}</Link></h1>
                </div>
            </article>
        );
    }
}
