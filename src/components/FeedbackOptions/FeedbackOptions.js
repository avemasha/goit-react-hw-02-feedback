
import React, {Component} from "react";

import './FeedbackOptions.css'

export class FeedbackOptions extends Component {

  static defaultProps = {
    options: [],
  };

 render() {
  return (
    <div>
      {this.props.options.map(option => {
        return (
          <button
            type="button"
            onClick={() => this.props.onLeaveFeedback(option)}
            key={option}
            value={option}
          >
            {option}
          </button>
        );
      })}{' '}
    </div>
  );
    }
  };


// export default FeedbackOptions;
  