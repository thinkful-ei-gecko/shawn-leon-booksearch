import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div>
                <div className="left-side">
                <img src="https://via.placeholder.com/150" alt="book cover" height="100"/>

                </div>

                <div className="right-side">
                <h2>Title...</h2>
                <p>Author:</p>
                <p>Price:</p>
                <p>Blub</p>
                </div>
            </div>
        )
    }
}
