import React from 'react';

import CategoryList from "./CategoryList";
import Navigation from "../base/Navigation";
import Header from "../base/Header";

export default class Categories extends React.Component {
    render() {
        return (
            <div className="App">
                <Header title="Kategórie"/>
                <Navigation/>
                <CategoryList/>
            </div>
        );
    }
}



