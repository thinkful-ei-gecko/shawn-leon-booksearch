import React, { Component } from "react";

export default class FilterBar extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.APIcall(e.target.search.value, e.target.printtype.value, e.target.filter.value );
  }
  render() {
    return (
      <div>
          <form id="bookSearchForm" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label htmlFor="search"></label>
              <input type="text" id="search" name="search" required></input>
              <button type="submit" value="search">Submit</button>
          </div>
          <div className="print-type">
            <label htmlFor="print-type">Print Type:</label>
            <select id="printtype" name="printtype">
              <option value="all">all</option>
              <option value="books">books</option>
              <option value="magazines">magazines</option>
            </select>
          </div>
          <div className="book-type">
            <label htmlFor="filter">Book Type:</label>
            <select id="filter" name="filter">
              <option value="all">all</option>
              <option value="ebooks">ebooks</option>
              <option value="free-ebooks">free-ebooks</option>
              <option value="full">full</option>
              <option value="paid-ebooks">paid-ebooks</option>
              <option value="partial">partial</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
