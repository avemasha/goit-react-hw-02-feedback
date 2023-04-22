import PropTypes from 'prop-types';
import React from "react";

import './FeedbackOptions.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={chooseMethod(option, onLeaveFeedback)}
            key={option}
          >
            {option}
          </button>
        );
      })}{' '}
    </div>
  );
  };



  function chooseMethod(option, onLeaveFeedback) {
    if (option === 'good') {
      return onLeaveFeedback[0];
    }
    if (option === 'neutral') {
      return onLeaveFeedback[1];
    }
    if (option === 'bad') {
      return onLeaveFeedback[2];
    }
  }

  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
   
  }