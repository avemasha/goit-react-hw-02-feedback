import PropTypes from 'prop-types';
import React, {Component} from "react";

import './FeedbackOptions.css'

class FeedbackOptions extends Component {

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
            onClick={e => this.props.onLeaveFeedback(e)}
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


export default FeedbackOptions;
  