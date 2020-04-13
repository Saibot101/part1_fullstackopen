import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0,0,0,0,0,0]);
    const [mostVotes, setMostVotes] = useState([0,0]);

    const nextRandom = () => {
        let random = Math.floor(Math.random() * Math.floor(6)) ;
        //console.log(random);
        setSelected(random);
    };

    const updateVote = () => {
        let ary = votes.slice();
        ary[selected] += 1;
        setVotes(ary);

        let ary2 = mostVotes.slice();

        if(ary2[0] < ary[selected]){
            ary2[0] = ary[selected];
            ary2[1] = selected;
        }

        setMostVotes(ary2);
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes.join(' ')} votes</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={() => updateVote()}>vote</button>
            <button onClick={() => nextRandom()} >next anecdote</button>
            <h1>Anecdote with the most votes</h1>
            <p>{props.anecdotes[mostVotes[1]]}</p>
            <p>has {mostVotes[0]} votes</p>
        </div>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);
