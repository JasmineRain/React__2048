import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../TableCell/TableCell';

// Game board row, contain 4 cell
export default class TableRow extends React.Component {

    static propTypes = {
        row: PropTypes.arrayOf(PropTypes.number).isRequired
    };

    render() {
        const { props: { row } } = this;

        return (
            <tr>
                {/* eslint-disable react/no-array-index-key */}
                {row.map((num, idx) => <Cell value={num} key={idx} />)}
            </tr>
        );
    }
}
