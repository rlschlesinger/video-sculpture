import React, { Component } from 'react';
import './ScreenList.css';
import Screen from './Screen';

class ScreenList extends Component {
	constructor(props) {
		super(props);
		this.state = { greetings: [ 'Robby', 'Kaitlyn', 'Chanelle', 'Poe' ] };
	}
	
	renderGreetings() {
		return this.state.greetings.map(name => (
			<Screen key={name} name={name}/>
		));
	}
	
	render() {
		return (
			<div className="HelloWorldList">
				{this.renderGreetings()}
			</div>
		);
	}
}
export default ScreenList;
