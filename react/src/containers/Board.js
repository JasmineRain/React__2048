import {connect} from 'react-redux'
import Board from "../components/Board/Board";

const mapStateToProps = state => ({
    board:state.board.board
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)