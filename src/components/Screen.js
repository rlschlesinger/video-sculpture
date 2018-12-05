import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';
import playlists from '../playlist';
import './Screen.css';

class Screen extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				playlist: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}
	
	constructor(props) {
		super(props);
		this.state = { greeting: 'Hello' };
		this.frenchify = this.frenchify.bind(this);
	}
	
	frenchify() {
		this.setState({ greeting: 'Bonjour' });
	}
	
	render() {
		return (
			<div className="Screen">
				<VideoPlayer videos={playlists[this.props.match.params.playlist]} />
			</div>
		);
	}
}

export default Screen;
