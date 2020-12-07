import React, { Component } from "react";
import BookSearch from "./bookSearch/bookSearch";

import "./App.css";
import BookSearchList from "./bookSearchList/bookSearchList";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrintType: "all",
      isBookType: "no-filter",
      searchEntry: "",
      searchResults: [],
      error: null
    };
  }

  // setPrintSelected = () => {
  //   console.log("a print has been selected", this);
  // };

  setPrintSelected(sel) {
    console.log("Print Selected:", sel);
    this.setState({
      isPrintType: sel
    });
  }

  setBookSelected(sel) {
    console.log(" BOOK selected:", sel);
    this.setState({
      isBookType: sel
    });
  }

  searchInput(inp) {
    console.log("Search has been activated. Search entry is: ", inp);
    this.setState({
      searchEntry: inp
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit handled!");

    //Creating a query
    const baseUrl =
      "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    let printType = `$printType=${this.state.isPrintType}`;
    let filter =
      this.state.isBookType !== "no-filter"
        ? `$filter=${this.state.isBookType}`
        : "";
    let searchEntry = `${this.state.searchEntry}`;

    const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}`;

    console.log(queryString);

    //perform search
    fetch(queryString)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(responseJSon => {
        console.log(responseJSon);
        this.setState({
          searchResults: responseJSon.items
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: e.message });
      });
  }

  render() {
    /* eUrl: "http://lorempixel.com/400/200/",
        title: "Henry I",
        author: "C. Warren Hollister",
        price: "$50.00",
        description: "lorem ipsum valahalla",
        printType: "Book",
        isEbook: true,
        viewability: "partial"
      },
      {
        imageUrl: "http://lorempixel.com/400/200/",
        title: "Henry VIII",
        author: "C. Warren Hollister",
        price: "$50.00",
        description: "lorem ipsum valahalla",
        printType: "Book",
        isEbook: false,
        viewability: "partial"
      }
    ];
*/
    const selectOptions = {
      printSelections: ["all", "books", "magazines"],
      bookSelections: [
        "no-filter",
        "partial",
        "full",
        "free-ebooks",
        "paid-ebooks",
        "ebooks"
      ]
    };

    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <div className="App">
        <BookSearch
          // searchResults={searchResults}
          selectOptions={selectOptions}
          printChangeHandler={sel => this.setPrintSelected(sel)}
          bookChangeHandler={sel => this.setBookSelected(sel)}
          handleSubmit={e => this.handleSubmit(e)}
          //bookChangeHandler={this.setBookSelected}
          handleSearchInput={inp => this.searchInput(inp)}
        />
        <BookSearchList filterBookInfo={this.state.searchResults} />
        {error}
      </div>
    );
  }
}

App.defaultProps = {
  searchResults: []
};