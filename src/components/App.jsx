import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleFeedback = event => {
        const {name} = event.target;
        this.setState(state => ({ [name]: state[name] + 1 }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };
    
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();

        return (
            <Section title="Please leave a feedbeack">
              <FeedbackOptions 
                options={this.state}
                onLeaveFeedback={this.handleFeedback}>
              </FeedbackOptions>

              <h2>Statistic</h2>
              {total === 0 ? <Notification message="There is no feedback"></Notification> :
              (<Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percentage={percentage}> 
              </Statistic>)}
            </Section>
        )
    }
}