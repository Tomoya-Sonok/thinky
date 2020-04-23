import React from "react";
import Question from "./Question";

export default class WhiesList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className="whiesList">
        {this.props.whiesData.map((data) => {
          return <Question data={data} key={data.id} />;
        })}
      </div>
    );
  }
}
