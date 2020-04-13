import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
        setGood(good+1)
    };
    const handleNeutral = () => {
        setNeutral(neutral+1)
    };
    const handleBad = () => {
        setBad(bad+1)
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGood} text='good'/>
            <Button handleClick={handleNeutral} text='neutral'/>
            <Button handleClick={handleBad} text='bad'/>

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
};

const Button = ({handleClick, text}) => (<button onClick={handleClick}> {text} </button>);

const Statistics = ({good, neutral, bad}) => {
    let all = good+neutral+bad;
    let average = (good-bad)/all;
    let positive = good/all;

    if (good === 0 && neutral === 0 && bad===0){
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h1>statistics</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <SingleStatistic value={good}/>
                    <SingleStatistic value={neutral}/>
                    <SingleStatistic value={bad}/>
                    <SingleStatistic value={all}/>
                    <SingleStatistic value={average.toString()}/>
                    <SingleStatistic value={positive.toString() + ' %'}/>
                </tbody>
            </table>
        </div>
    )
};

const SingleStatistic = ({value}) =>{
    return (
        <tr>
            <td>{value}</td>
        </tr>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);
