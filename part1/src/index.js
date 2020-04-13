import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    return (

        <div>
            <Header course={course.name} />
            <Content parts={course.parts}  />
            <Total parts={course.parts} />
            <Event />
            <ComplexEvents/>
        </div>
    )
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
};

const Content = (props) =>  {
    return(
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
};

const Part = (props) => {
    return (
        <div>
            <p> {props.name} {props.exercises} </p>
        </div>
    )
};

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
};
//------------------------------------------

const Event = (props) => {

    const [counter, setCounter] = useState(0);

    const increasedByOne = () => setCounter(counter +1);
    const decreasedByOne = () => setCounter(counter -1);
    const setToZero = () => setCounter(0);

    return (
        <div>
            <Display counter={counter}/>
            <Button handleClick={increasedByOne} text='plus'/>
            <Button handleClick={setToZero} text='zero'/>
            <Button handleClick={decreasedByOne} text='minus'/>

        </div>
    )
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
);

//------------------------------------------

const ComplexEvents = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1)
    };

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1)
    };

    return (
        <div>
            <div>
                {left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {right}
                <History allClicks={allClicks}/>
            </div>
        </div>
    )
};

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'));

