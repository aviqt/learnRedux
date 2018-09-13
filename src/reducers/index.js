import { combineReducers } from 'redux'
import Subreddit from './Subreddit'
import Vote from './Vote'


const rootReducer = combineReducers({
  Subreddit,
  Vote
})

export default rootReducer
