import React, { Component } from "react";
import DisplaySelection from "../displaySelection/displaySelection";

export default class GetBookType extends Component {
  render() {
    //console.log(this.props.selectOptions.bookSelections, "get book");

    const selectOptions = this.props.selectOptions.bookSelections;

    //const bookOptions = [];
    const bookOptions = selectOptions.map((options, i) => (
      // console.log(`<option value=${options}>${options}</option>`)
      <option value={options} key={i}>
        {options}
      </option>
    ));

    //console.log(bookOptions, "bookoption");
    return (
      <div>
        <DisplaySelection
          bookOptions={bookOptions}
          printChangeHandler={this.props.bookChangeHandler}
        />
      </div>
    );
  }
}

