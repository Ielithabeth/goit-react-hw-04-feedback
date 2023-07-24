import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback = option => {
        switch (option) {
          case 'good':
            setGood(prevGood => prevGood + 1);
            break;

          case 'neutral':
            setNeutral(prevNeutral => prevNeutral + 1);
            break;
            
          case 'bad':
            setBad(prevBad => prevBad + 1);
            break;

          default:
            return;
        }
      };

    const countTotal = () => {
        return good + neutral + bad;
    };
    
    const countPercentage = () => {
        return Math.round((good / countTotal()) * 100);
    };

    return (
        <Section title="Please leave a feedbeack">
            <FeedbackOptions 
             options={["good", "neutral", "bad"]}
             onLeaveFeedback={handleFeedback}>
            </FeedbackOptions>

            <h2>Statistic</h2>
            {countTotal() === 0 ? <Notification message="There is no feedback"></Notification> :
            (<Statistic
             good={good}
             neutral={neutral}
             bad={bad}
             total={countTotal()}
             percentage={countPercentage()}> 
            </Statistic>)}
         </Section>
        )
}