/** @format */

import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="logo" />
      </div>
    );
  }
}

export default ImageComponent;
