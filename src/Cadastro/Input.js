import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Input extends Component {
    render() {
        if(this.props.type === 'text'){
            return (
                <input type="text" name={this.props.name} />
            )
        } else {
            return (
                <NumberFormat displayType={'input'} thousandSeparator={'.'} decimalSeparator={','} name={this.props.name} />
            )
        }
    }
}

export default Input;