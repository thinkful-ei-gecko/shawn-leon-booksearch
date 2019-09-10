import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';

export default class Banner extends Component {
    render() {
        return (
            <header>
                <h1>Google Book Search</h1>
                <SearchBar></SearchBar>
                <FilterBar></FilterBar>
            </header>
        )
    }
}

