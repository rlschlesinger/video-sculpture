import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';
import './Screen.css';

class Screen extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
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
				<VideoPlayer
					videos={[
						'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
						'http://html5doctor.com/demos/video-canvas-magic/video.mp4',
					]}
				/>
			</div>
		);
	}
}

export default Screen;
