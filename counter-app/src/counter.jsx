import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    }

    handleDecrement = () => {
        if(this.state.count !== 0){
            this.setState({ count: this.state.count - 1});
        }
    }

    render() {
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button>
        </React.Fragment>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;