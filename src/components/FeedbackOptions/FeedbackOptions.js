
import React from "react";

import './FeedbackOptions.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

  // static defaultProps = {
  //   options: [],
  // };

  // FeedbackOptions.defaultProps = {
  //  options: [],
  // }
  
  
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
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
  ;


// export default FeedbackOptions;
  