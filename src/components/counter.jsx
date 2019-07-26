import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }



    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    handleReset = () => {
        this.setState({ count: 0 })
    }


    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h3>Counter</h3>
                </header>
                <div className="m-2">
                    <button onClick={this.handleDecrement} style={{ fontSize: 14 }} className="btn btn-secondary btn-sm">Decrement</button>
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.handleIncrement({id: 1})} style={{ fontSize: 14 }} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={this.handleReset} style={{ fontSize: 14 }} className="btn btn-danger btn-sm m-2">Reset</button>
                </div>
            </React.Fragment>
        );
    }



}

export default Counter;


























