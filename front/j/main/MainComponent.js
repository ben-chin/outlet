import React, { Component, PropTypes } from 'react';

export default class MainComponent extends Component {

    static propTypes = {
        name: PropTypes.string,
        description: PropTypes.string,
    }

    render() {
        return (
            <div className="MainComponent">
                <p><strong>{this.props.name}</strong></p>
                <p><em>{this.props.description}</em></p>
            </div>
        );
    }

}
