import {connect} from 'react-redux'
import Score from "../components/Score/Score";

const mapStateToProps = state => ({
    score:state.board.score
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Score)