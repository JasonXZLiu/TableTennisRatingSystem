import React from "react";
import CardView from "./CardView";

const LIMIT = 2;

const ButtonRowStyle = {
  margin: "auto"
};

const ButtonStyle = {
  margin: "1rem 1rem 1rem 1rem"
};

class Board extends React.Component {
  constructor(props) {
    super(props);

    let idx = 0;
    let min = LIMIT > props.persons.length ? props.persons.length : LIMIT;
    let sublist = props.persons.slice(0, min);
    this.state = { idx, min, sublist };
  }

  onBack = () => {
    if (this.state.idx - this.state.min >= 0) {
      let idx = this.state.idx - this.state.min;
      this.setState((state, props) => ({
        idx,
        sublist: this.props.persons.slice(idx, this.state.idx)
      }));
    }
  };

  onNext = () => {
    if (this.state.idx + this.state.min < this.props.persons.length) {
      let idx = this.state.idx + this.state.min;
      this.setState((state, props) => ({
        idx,
        sublist: this.props.persons.slice(idx, idx + this.state.min)
      }));
    }
  };

  render = () => {
    return (
      <div>
        <CardView list={this.state.sublist} />
        <div className="row">
          <div style={ButtonRowStyle}>
            <button
              type="button"
              className="btn btn-light"
              style={ButtonStyle}
              onClick={this.onBack}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={ButtonStyle}
              onClick={this.onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default Board;
