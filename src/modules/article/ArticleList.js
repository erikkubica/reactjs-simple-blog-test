import React from 'react';
import ArticleListItem from "./ArticleListItem";
import ArticleListItemPlaceholder from "./ArticleListItemPlaceholder";
import {AsyncStorage} from "react-native-web";


export default class ArticleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: "",
            articleList: "",
            category: this.props.category ? this.props.category : 0
        };
    }

    async fetchData() {

        //const response = await fetch("/static/articles.json");

        let data = null; //await AsyncStorage.getItem('@MySuperStore:articles_storage_' + this.state.category);

        if (data === null) {
            const response = await fetch("https://www.netlime.eu/wp-json/get-posts/v2/all/");
            data = await response.json();
            await AsyncStorage.setItem('@MySuperStore:articles_storage_' + this.state.category, JSON.stringify(data));
        }

        try {
            data = JSON.parse(data);
        } catch (e) {

        }

        this.setState({articles: data});

        this.createArticleList();
    }

    createArticleList() {
        if (this.state.articles !== "") {
            let articles = this.state.articles.map(function (article) {
                return (
                    <ArticleListItem
                        key={article.ID}
                        article={article}
                    />
                );
            });
            this.setState({articleList: articles});
        } else {
            console.log("ArticleList.js: No articles to render or data is corrupted.");
            console.log(this.state.articles);
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.state.articleList === "") {
            return (
                <div>
                    <ArticleListItemPlaceholder/>
                </div>
            );
        }

        return (
            <div>{this.state.articleList}</div>
        );
    }
}
