import React, { Component } from 'react';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';

import {Section} from "./section/Section";

import { Statistics } from "./statistics/Statistics";
import { NotifyTitle } from "./notification/Notificaton";

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = option => {
   
    this.setState(prevState => ({
     
      [option]: prevState[option] + 1,
    }));
  };


  


  countTotalFeedback = () => {
  
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((total, val) => {
      total += val;
      return total;
    });
  
  };

  


  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good * 100;
   
    return total === 0 ? 0 : Math.round(positive / total);
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage()

    const btnNames = Object.keys(this.state);
    return (
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={total}
              feedback={positivePercentage}
            />
          </Section>
        ) : (
          <NotifyTitle/>
        )}
      </div>
    );
  }
}
export default App;