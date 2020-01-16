import React, { Component } from 'react';
import NumberFormat from 'react-number-format';


class Row extends Component {
    render() {
        return (
            <li>{this.props.name} - <NumberFormat value={this.props.number} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/></li>
        )
    }
}

export default Row;