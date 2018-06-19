import {combineReducers} from 'redux'
import board from './board'
import rank from './rank'

export default combineReducers({
    board,
    rank
})