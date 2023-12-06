import { useState } from "react";

const Statistcs = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" />
            </td>
            <td>
              <StatisticLine value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" />
            </td>
            <td>
              <StatisticLine value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" />
            </td>
            <td>
              <StatisticLine value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="all" />
            </td>
            <td>
              <StatisticLine value={good + neutral + bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="average" />
            </td>
            <td>
              <StatisticLine
                value={(good + bad * -1) / (good + neutral + bad)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="positive" />
            </td>
            <td>
              <StatisticLine value={(good / (good + neutral + bad)) * 100} />
            </td>
            <td>%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Button = (props) => {
  return (
    <button onClick={() => props.setFeedback(props.value + 1)}>
      {props.text}
    </button>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button setFeedback={setGood} value={good} text="good" />
      <Button setFeedback={setNeutral} value={neutral} text="neutral" />
      <Button setFeedback={setBad} value={bad} text="bad" />
      <h2>statistics</h2>
      <Statistcs good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
