import React from 'react';
import ArticleItemPlaceholder from "./ArticleItemPlaceholder";

export default class ArticleItem extends React.Component {

    render() {

        const defaultHeaderImage = "https://www.netlime.eu/wp-content/uploads/2015/12/Wallpaper-Nature-8B71-845x300.jpg";
        const headerImage = this.props.article.post_thumbnail !== 0 ? this.props.article.post_thumbnail : defaultHeaderImage;

        if (this.props.article === null || this.props.article === "") {
            return (
                <ArticleItemPlaceholder/>
            )
        }

        return (
            <article>
                <header
                    style={{"backgroundImage": "url('" + headerImage + "')"}}>
                    <div className="heading-bg">
                        <h1 dangerouslySetInnerHTML={{__html: this.props.article.post_title}}/>
                    </div>
                </header>
                <div className="content noafter"
                     dangerouslySetInnerHTML={{__html: this.props.article.post_content}}/>
            </article>
        );
    }
}