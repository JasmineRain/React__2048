import React from 'react'
import PropTypes from 'prop-types'
require('./score.css');

class Score extends React.Component{

    static propTypes = {
        score:PropTypes.number.isRequired
    };

    render(){

        return(
            <div className={'score'}>
                Score: {this.props.score}
            </div>
        )
    }

}

export default Score