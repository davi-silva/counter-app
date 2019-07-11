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

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.renderTags()}
                </ul>
            </React.Fragment>
        );
    }


}
 
export default Counter;