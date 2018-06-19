import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'antd'


class GameOver extends React.Component{

    static propTypes = {
        visible:PropTypes.bool.isRequired,
        onOk:PropTypes.func.isRequired,
        onCancel:PropTypes.func.isRequired
    };


    render(){

        return(
            <Modal
                title="Game Over"
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
            >
                <p>Play again?</p>
            </Modal>
        )
    }


}


export default GameOver