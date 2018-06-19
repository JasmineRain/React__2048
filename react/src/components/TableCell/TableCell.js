import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
require('./tableCell.css') ;


export default class TableCell extends React.Component{

    static propTypes= {
        value:PropTypes.number.isRequired
    };


    render(){
        const {props: {value} } =this;
        const color = `color-${value}`;
        return (
            <td>
                <div
                    className={classnames(['cell',color])}
                >
                    <div className={'number'}>{value || null}</div>
                </div>
            </td>
        );
    }

}