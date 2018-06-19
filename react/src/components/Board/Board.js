import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/TableRow/TableRow'
import QueueAnim from 'rc-queue-anim'
require ('./board.css');

class Board extends React.Component {

    static propTypes = {
        board: PropTypes.arrayOf(PropTypes.array).isRequired
    };

    state = {
        board:this.props.board
    };

    render() {
        //const { props: { board} } = this;
        //console.log(props);

        return (
            <QueueAnim delay={1000} className={"queue-simple"}>
                <table className={'board'}>
                    <tbody>
                        {this.props.board.map((row, idx) => <Row row={row} key={idx} />)}
                    </tbody>
                </table>
            </QueueAnim>
        );
    }
}

export default Board
