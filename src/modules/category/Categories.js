import React from 'react';

import CategoryList from "./CategoryList";
import Navigation from "../base/Navigation";

export default class Categories extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <CategoryList/>
            </div>
        );
    }
}



