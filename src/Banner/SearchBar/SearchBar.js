import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <label HTMLfor="search"></label>
                <input type="text" id="search" name="search"></input>
                <input type="submit" value="search"></input>
            </div>
        )
    }
}
