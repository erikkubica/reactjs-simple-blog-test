import React from 'react';

import {Link} from 'react-router'

export default class ArticleListItem extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            article: this.props.article
        }

    }

    render() {
        const defaultHeaderImage = "https://www.netlime.eu/wp-content/uploads/2015/12/Wallpaper-Nature-8B71-845x300.jpg";
        const headerImage = this.props.article.post_thumbnail !== 0 ? this.props.article.post_thumbnail : defaultHeaderImage;
        return (
            <article>
                <header
                    style={{"backgroundImage": "url('" + headerImage + "')"}}>
                    <div className="heading-bg">
                        <h1 dangerouslySetInnerHTML={{__html: this.state.article.post_title}}/>
                    </div>
                </header>
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.article.post_excerpt}}/>
                <footer>
                    <Link to={"/" + this.state.article.post_name} className="btn btn-lime pull-right">Read More »</Link>
                </footer>
            </article>
        );
    }
}
