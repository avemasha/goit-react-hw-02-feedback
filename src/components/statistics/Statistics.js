import PropTypes from 'prop-types';
import React from 'react';
import './Statistics.css'

export const Statistics = ({ state, total, feedback}) => {
  return (
  <div>
    <p>
        good:<span>{state.good}</span>
      </p>
      <p>
        neutral:<span>{state.neutral}</span>
      </p>
      <p>
        bad:<span>{state.bad}</span>
      </p>
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{feedback}%</span>
      </p>
  </div>

  )
};

Statistics.propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };