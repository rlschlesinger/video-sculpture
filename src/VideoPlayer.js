import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends Component {
	static propTypes = {
		videos: PropTypes.array.isRequired,
	}
	
	constructor(props) {
		super(props);
		this.video = React.createRef();
		
		this.index = -1;
	}
	
	componentDidMount() {
		const video = this.video.current;
		video.addEventListener('ended', () => this.playNext(), false);
		this.playNext();
	}

	playNext() {
		this.index = (this.index + 1) % this.props.videos.length;

		const video = this.video.current;
		video.setAttribute('src', this.props.videos[this.index]);
		video.load();
		video.play();
	}
	
	render() {
		return (
			<video controls autoPlay ref={this.video} />
		);
	}
}
