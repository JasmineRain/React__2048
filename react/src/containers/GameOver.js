import {connect} from 'react-redux'
import GameOver from "../components/GameOver/GameOver"
import {resetGame} from "../actions";

const mapStateToProps = state => ({
    visible:state.board.gameOver,
    onCancel:()=>{console.log("cancel")}
});

const mapDispatchToProps = dispatch => ({
    onOk:()=>dispatch(resetGame())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameOver)