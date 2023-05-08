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
  // StatisticGoodCounter = () => {
   
  // };
  // StatisticNeutralCounter = () => {
 
  // };
  // StatisticBadCounter = () => {
    // this.setState(prevState => ({
    //   bad: (prevState.bad += 1),
    // }));
  // };

  // onLeaveFeedback = (option) => {
  //    this.setState(prevState => ({
  //     {option}: (prevState.{option} += 1) }))
    
  

  // }

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };


  


  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good * 100;
    // if (total === 0) {
    //   return 0;
    // }
    return total === 0 ? 0 : Math.round(positive / total);
  };
  render() {
    const total = this.countTotalFeedback();

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
          ></FeedbackOptions>
        </Section>

        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={this.countTotalFeedback}
              feedback={this.countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <NotifyTitle></NotifyTitle>
        )}
      </div>
    );
  }
}
export default App;