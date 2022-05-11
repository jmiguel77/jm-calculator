import React from 'react';
import './CalcButton.css';

class CalcButton extends React.Component {
    render() {
        return (
            <div className="four wide column">
                <button className="ui button" value={this.props.text} onClick={this.props.handler}>{this.props.text}</button>
            </div>
        )
    }
}

export default CalcButton;
