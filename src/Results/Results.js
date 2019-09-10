import React, { Component } from 'react'
import Book from './Book/Book';

export default class Results extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Book></Book>
                </ul>
            </div>
        )
    }
}
