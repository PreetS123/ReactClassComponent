import React, { Component, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override:CSSProperties={
//     display:"block",
//     margin:"0 auto",
//     borderColor:"red"
// };

export default class Loader extends Component {
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          color={this.props.color}
          loading={this.props.loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}
