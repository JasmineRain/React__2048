import {connect} from 'react-redux'
import Web from '../components/Web/Web'
import {moveUp} from '../actions/index'
import {moveDown} from '../actions/index'
import {moveLeft} from '../actions/index'
import {moveRight} from '../actions/index'
import {placeRandom} from "../actions/index";
import * as funcs from '../utils/board'

const mapStateToProps = state => ({
    board:state.board
});

const mapDispatchToProps = (dispatch) => ({
    onHand: (e,board) => {
        //console.log(e);
        //console.log(board);

        let now = board;
        //console.log("from containerWEB"+board.board);
        let future;
        switch (e.key) {
            case 'SwipeUp':
            case 'ArrowUp':
                dispatch(moveUp());
                future = funcs.doMove('UP',now).board;
                if(funcs.isBoardMoved(now.board,future))
                    dispatch(placeRandom());
                break;
            case 'SwipeDown':
            case 'ArrowDown':
                dispatch(moveDown());
                future = funcs.doMove('DOWN',now).board;
                if(funcs.isBoardMoved(now.board,future))
                    dispatch(placeRandom());
                break;
            case 'SwipeRight':
            case 'ArrowRight':
                dispatch(moveRight());
                future = funcs.doMove('RIGHT',now).board;
                if(funcs.isBoardMoved(now.board,future))
                    dispatch(placeRandom());
                break;
            case 'SwipeLeft':
            case 'ArrowLeft':
                dispatch(moveLeft());
                future = funcs.doMove('LEFT',now).board;
                if(funcs.isBoardMoved(now.board,future))
                    dispatch(placeRandom());
                break;
            default:
                break;
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Web)