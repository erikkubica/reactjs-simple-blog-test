import React from 'react';

import ArticleList from "../article/ArticleList";
import Navigation from "../base/Navigation";

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category_id: this.props.params.categoryId,
            category: ""
        };
    }

    async fetchData() {
        let response = await fetch("/static/category.json");
        let data = await response.json();
        this.setState({category: data});
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        if (this.state.category === "") {
            return (
                <div className="App">
                    <div className="container">
                        Loading data
                    </div>
                </div>
            );
        }

        return (
            <div className="App">
                <Navigation/>
                <ArticleList category={this.state.category.id}/>
            </div>
        );
    }
}