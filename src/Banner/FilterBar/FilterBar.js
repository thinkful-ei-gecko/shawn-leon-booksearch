import React, { Component } from "react";

export default class FilterBar extends Component {
  render() {
    return (
      <div>
        <div className="print-type">
          <label HTMLfor="print-type">Print Type:</label>
          <select id="printtype">
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        </div>
        <div className="book-type">
          <label HTMLfor="book-type">Book Type:</label>
          <select id="book-type">
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="full">full</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
          </select>
        </div>
      </div>
    );
  }
}
