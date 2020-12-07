import React, { Component } from "react";
import DisplaySelection from "../displaySelection/displaySelection";

export default class GetPrintType extends Component {
  render() {
    // console.log(this.props.selectOptions.printSelections, "get **PRINT**");

    const selectOptions = this.props.selectOptions.printSelections;

    //const bookOptions = [];
    const printOptions = selectOptions.map((options, i) => (
      // console.log(`<option value=${options}>${options}</option>`)
      <option value={options} key={i}>
        {options}
      </option>
    ));

    //console.log(printOptions, "PRINT!!!option");
    return (
      <div>
        <DisplaySelection
          bookOptions={printOptions}
          printChangeHandler={this.props.printChangeHandler}
        />
      </div>
    );
  }
}