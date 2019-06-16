import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
    return (
        <div>
            Greetings app created by Joni =)
        </div>
    )
}

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} and you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const name1 = "Noora"
    const age1 = 22
    return (
        <>
            <h1>Greetings!</h1>
            <Hello name={name1} age={age1} />
            <Footer/>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

