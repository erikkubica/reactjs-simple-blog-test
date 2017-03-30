import React from 'react';
import Navigation from "../base/Navigation";
//import {AsyncStorage} from "react-native-web";
import ArticleItem from "./ArticleItem";

export default class Article extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            article_id: this.props.params.articleId,
            article: ""
        };
    }

    async fetchData() {

        let response = null;

        if (!isNaN(parseFloat(this.state.article_id)) && isFinite(this.state.article_id)) {
            response = await fetch("https://www.netlime.eu/wp-json/wp/v2/posts/" + this.state.article_id);
        } else {
            response = await fetch("https://www.netlime.eu/wp-json/get-post-by/v2/slug/" + this.state.article_id);
        }

        let data = await response.json();

        this.setState({article: data});
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <div id="main">
                <main role="main" className="container">
                    <div className="row">
                        <div className="col-sm-offset-0 col-sm-12 col-md-offset-2 col-md-9">
                            <ArticleItem article={this.state.article}/>
                        </div>
                    </div>
                </main>
            </div>
        );

    }
}
