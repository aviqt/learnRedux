import { combineReducers } from 'redux'
import * as types from '../actions/action-type';

const curPageIndex = (state = '1', action) => {
	//console.log(action);
  switch (action.type) {
    case types.VOTE_PAGEINDEX:
      return action.index
    default:
      return state
  }
}


const Vote = combineReducers({
  curPageIndex:curPageIndex
});

export default Vote;
