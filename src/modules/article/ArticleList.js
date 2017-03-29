import React from 'react';
import ArticleListItem from "./ArticleListItem";
import ArticleListItemPlaceholder from "./ArticleListItemPlaceholder";

export default class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            category: this.props.category ? this.props.category : 0
        };
    }

    async fetchData() {

        const response = await fetch("https://www.netlime.eu/wp-json/get-posts/v2/all/");
        const data = await response.json();

        this.setState({articles: data});
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const articles = this.state.articles.map(function (article) {
            return (
                <ArticleListItem
                    key={article.ID}
                    article={article}
                />
            );
        });

        return (
            <div>{articles.length > 0 ? articles : <ArticleListItemPlaceholder/>}</div>
        );
    }
}
