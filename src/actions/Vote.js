import * as types from './action-type';
import {get} from '../utils/request';

export const selectedIndex = index => ({
  type: types.VOTE_PAGEINDEX,
  index
})
export const changeVoteType = type => ({
  type: types.VOTE_CHANGE_TYPE,
  type
})

export const fetchPosts = index => (dispatch, getState) => {
	console.log(getState());
	let url = sessionStorage.apiUrl + '/api/Vote/ParticipationVoteProjectList?isvoted=&keyword=&pagination.rows=10&pagination.page=' + index + '&pagination.sidx=CREATOR_TIME&pagination.sord=DESC';
	
	//get(url).then((res) => {
	//  console.log(res.Data);
	//})
	dispatch(selectedIndex(index));
}

export const getDetailById = id => ({
	
})