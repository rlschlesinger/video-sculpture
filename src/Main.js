import React from 'react';
import { Link } from 'react-router-dom';
import ScreenList from './ScreenList';
import Screen from './Screen';
import './Main.css';

const Main = () => {
	return (
		<div className="App">
			<Link to="/screen" component={Screen}>Test</Link>
		</div>);
};

export default Main;
