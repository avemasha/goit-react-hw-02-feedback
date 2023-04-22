import React, { Component } from 'react';
import {FeedbackOptions} from "./buttons/FeedbackOptions";

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
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
  StatisticGoodCounter = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  StatisticNeutralCounter = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  StatisticBadCounter = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positive = this.state.good * 100;
    if (total === 0) {
      return 0;
    }
    return Math.round(positive / total);
  };
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;

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
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={[
              this.StatisticGoodCounter,
              this.StatisticNeutralCounter,
              this.StatisticBadCounter,
            ]}
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