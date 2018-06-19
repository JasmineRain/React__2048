import {connect} from 'react-redux'
import Rank from "../components/Rank/Rank";
import {fetchRank} from "../actions";

const mapStateToProps = state => ({
    data:state.rank
});

const mapDispatchToProps = dispatch => ({
    getRank: ()=>{
        dispatch(fetchRank())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rank)