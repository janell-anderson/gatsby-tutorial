import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button 
                    onClick={() =>
                        this.setState(prevState => ({
                            count: prevState.count + 5,
                        }))
                    }>
                    plus </button>
                <button 
                    onClick={() =>
                        this.setState(prevState => ({
                            count:prevState.count - 5,
                        }))
                     }>
                    minus</button>
            </div>
        )
    }
}

export default Counter;

// Made a component that is a counter
// Made two buttons that will add and minus from the counter
// Then made a constructor with a state of counter: 0
// Then change the count in the p tag to this.state.count
