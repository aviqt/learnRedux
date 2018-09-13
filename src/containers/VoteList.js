import React, { Component } from 'react';
import { 
	SearchBar
 } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import TopNavBar from '../components/TopNavBar';
import ListView from '../components/ListView';
import {get} from '../utils/request';
import {loginToSetToken} from '../utils/func';

import { selectedIndex,fetchPosts } from '../actions/Vote'


class VoteList extends Component {
  constructor(props) {  
    super(props);  
    this.state = { 
	  keyWords:'',
	  rows:10,
	  showVoted:1,
	  hasToken:!(!sessionStorage.Authorization || sessionStorage.Authorization === 'null' )
	}
  }
  setShowVoted = (value) =>{
    this.setState({
  	  showVoted:value,
    })
  }
  formatDate(timeStamp,str){
	timeStamp = timeStamp === null?Date.now():timeStamp;
	let date = new Date(timeStamp);
	return [
	  date.getFullYear(),
	  (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
	  date.getDate() > 9 ? date.getDate() :'0' + date.getDate()
	].join(str);
  }
  renderHeightlightKeyWords(text,keyWords){
	if(!text) return <font>&nbsp;</font>;
	return keyWords === '' ? text : text.split(keyWords).map((item,index) => {
	  return index === 0 ? item : <font key={'HeightlightKeyWords' + index}><font style={{color:'red'}}>{keyWords}</font>{item}</font>;
    })
  }
  back(){
	window.postMessage('back');
  }
  curPageAdd = () =>{
	const { dispatch,curPageIndex } = this.props
	let index = parseInt(curPageIndex) + 1;
	dispatch(fetchPosts(index))
  }
  render() {
	  
    const {keyWords,rows,showVoted} = this.state;
    const {curPageIndex} = this.props;
	let url = sessionStorage.apiUrl + '/api/Vote/ParticipationVoteProjectList?isvoted=' + showVoted + '&keyword=' + keyWords + '&pagination.rows=' + rows +'&pagination.page=pageIndex&pagination.sidx=CREATOR_TIME&pagination.sord=DESC';
	const tabList = [
	  {value:1,title:'待投表决'},
	  {value:2,title:'已投表决'},
	];
    return (
	  <div>
		<TopNavBar title='投票表决' showRC />
		<div className='mainBox' style={{bottom:0}}>
		  <div className='tabMenu'>
		    {tabList.map(item =>
			  <div key={item.value} onClick={this.setShowVoted.bind(this,item.value)}>
			    <span className={item.value === this.state.showVoted?'tabActive':''}>
				  {item.title}
				</span>
			  </div>
			)}
		  </div>
		  <SearchBar
		    clear={false}
			placeholder='投票标题、发起人'
			onSubmit={keyWords => {this.setState({keyWords})}}
			onClear={keyWords => {this.setState({keyWords})}}
		  />
		  <div onClick={()=>this.curPageAdd()}>{curPageIndex}</div>
		  <i 
		    className="fa fa-address-book" 
			style={{color:'red',fontSize:'50px'}} 
			aria-hidden="true"
			onClick={()=>this.curPageAdd()}
		  ></i>
		</div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  const { Vote } = state
  const { curPageIndex } = Vote


  return {
    curPageIndex
  }
}

export default connect(mapStateToProps)(VoteList)


