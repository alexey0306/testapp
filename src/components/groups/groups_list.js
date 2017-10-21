// Import section
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchGroups_Thunk} from '../../actions/groups_actions';

class GroupsList extends Component{

	componentDidMount(){
		this.props.fetchGroups_Thunk();
	}

	renderGroup(group){
		return (
			<div key={group.id}>{group.name}</div>
		);
	}

	render(){
		return (
			<div>{this.props.groups.map(this.renderGroup)}</div>
		);
	}
}

function mapStateToProps(state){
	return { groups: state.groups.all };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchGroups_Thunk},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupsList);