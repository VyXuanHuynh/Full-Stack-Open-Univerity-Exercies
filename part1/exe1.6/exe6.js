import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h1>{props.text}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  
    return (
      <div>
        <Heading text="Statistics" />
        <table>
          <tbody>
            <Statistic name="good" value={props.good} />
  
            <Statistic name="neutral" value={props.neutral} />
  
            <Statistic name="bad" value={props.bad} />
  
          </tbody>
        </table>
      </div>
    );
  };

  const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [hasFeedback, setHasFeedback] = useState(false);
  
    
  
    const handleButtonClick = (type) => {
      setHasFeedback(true);
  
      switch (type) {
        case "good":
          setGood(good + 1);
          break;
        case "neutral":
          setNeutral(neutral + 1);
          break;
        case "bad":
          setBad(bad + 1);
          break;
        default:
          break;
      }
    };
  
    const statisticsProps = {
      hasFeedback: hasFeedback,
      good: good,
      neutral: neutral,
      bad: bad,
    };
  
    return (
      <div>
        <Heading text="Give Feedback" />
        <Button onClick={() => handleButtonClick("good")} text="good" />
        <Button onClick={() => handleButtonClick("neutral")} text="neutral" />
        <Button onClick={() => handleButtonClick("bad")} text="bad" />
        <Statistics {...statisticsProps} />
      </div>
    );
  };

ReactDOM.render(<App />, 
  document.getElementById('root')
)