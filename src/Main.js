import React from 'react';
import { Link } from 'react-router-dom';
import Screen from './components/Screen';
import './Main.css';

const Main = () => {
	return (
		<div className="App">
			<Link to="/screen/0" component={Screen}>0</Link>
			<br/>
			<Link to="/screen/1" component={Screen}>1</Link>
		</div>);
};

export default Main;
