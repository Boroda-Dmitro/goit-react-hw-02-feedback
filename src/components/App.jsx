import { Component } from 'react';
import { FeedbackOptions } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  options = e => {
    const target = e.target.name;
    this.setState(prevState => {
      return { [target]: prevState[target] + 1 };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return { positivePercentage: (prevState.good / prevState.total) * 100 };
    });
  };

  onLeaveFeedback = () => {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
