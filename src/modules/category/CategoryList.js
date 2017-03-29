import React from 'react';
import CategoryListItem from "./CategoryListItem";
import {AsyncStorage} from "react-native-web";

export default class CategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: "",
            categoryList: ""
        }
    }

    async fetchData() {
        let data = await AsyncStorage.getItem('@MySuperStore:categories_storage');

        if (data === null) {
            let response = await fetch("/static/categories.json");
            data = await response.json();
            await AsyncStorage.setItem('@MySuperStore:categories_storage', JSON.stringify(data));
        }

        try {
            data = JSON.parse(data);
        } catch (e) {

        }

        this.setState({categories: data});
        this.createCategoryList();
    }

    createCategoryList() {
        if (this.state.categories !== "") {
            let categories = this.state.categories.map(function (category) {
                return (
                    <CategoryListItem
                        key={category.id}
                        id={category.id}
                        title={category.name}
                    />
                );
            });
            this.setState({categoryList: categories});
        } else {
            console.log("CategoryList.js: No categories to render or data is corrupted.");
            console.log(this.state.categories);
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        if (this.state.categories === "") {
            return (
                <div className="articles container">
                    Loading data
                </div>
            );
        }

        return (
            <div className="articles container">
                <div>{this.state.categoryList}</div>
            </div>
        );
    }
}
