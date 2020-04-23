import React from "react";

export default class Question extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div>
        <span>{this.props.data.question}</span>
      </div>
    );
  }
}
