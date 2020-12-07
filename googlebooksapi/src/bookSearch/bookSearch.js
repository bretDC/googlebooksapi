import React, { Component } from "react";
//import BookSearchList from "../booksearchList/booksearchList";
import GetPrintType from "../printType/getPrintType";
import GetBookType from "../bookType/getBookType";

export default class BookSearch extends Component {
  render() {
    //console.log(this.props.searchResults);
    return (
      <div className="BookSearch">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>

        <form
          className="googleBookSearch__form"
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <label className="searchL" htmlFor="search">
            Search:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="henry"
            onChange={inp => this.props.handleSearchInput(inp.target.value)}
          />

          <input type="submit" value="Submit" />
        </form>

        <label htmlFor="printType">Print Type:</label>
        <GetPrintType
          selectOptions={this.props.selectOptions}
          printChangeHandler={this.props.printChangeHandler}
        />

        {/* **********************sdf */}
        <label htmlFor="bookType">Book Type:</label>
        <GetBookType
          selectOptions={this.props.selectOptions}
          bookChangeHandler={this.props.bookChangeHandler}
        />

        {/* **************** BOOK SEARCH RESULTS ***************/}
        {/* <BookSearchList searchResults={this.props.searchResults} /> */}
      </div>
    );
  }
}