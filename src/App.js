import React, { Component } from 'react'
import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Subreddit from './containers/Subreddit'
import Login from './containers/Login'
import VoteList from './containers/VoteList'


class App extends Component {
  constructor(props) {  
    super(props);  
  }
  isNoLoginPage(){
    let noLoginPage = [
      'register',
  	  'login'
    ];
    for(var i = 0 ;i < noLoginPage.length ; i++){
      if(window.location.href.indexOf(noLoginPage[i]) !== -1) return true;
    }
    return false
  }

  render() {

	
    return (
	  <Router>
	    <Switch>
	      <Route path='/vote/list' component={VoteList}/>
		
	      <Route path='/login' component={Login}/>
	      <Route exact path='/' component={Subreddit}/>
	    </Switch>
	  </Router>
    )
  }
}

 
export default App
