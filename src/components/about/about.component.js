import React, { Component } from 'react'

import AboutProjects from './about-projects.component'

export class About extends Component {
	render() {
		return (
			<div style={this.styles.about}>
				<div style={this.styles.imagesContainer}>
					<img src="src/images/Cover Pic Yosemite.jpg" style={this.styles.coverImage} />
					<img src="src/images/Profile Pic Great Wall.jpg" style={this.styles.profilePic} />
				</div>
				<AboutProjects />
			</div>
		)
	}

	styles = {
		about: {
			textAlign: 'center'
		},
		imagesContainer: {
			position: 'relative'
		},
		coverImage: {
			width: '100%'
		},
		profilePic: {
			position: 'absolute',
			top: 'calc(50% - 127px)',
			left: 'calc(50% - 127px)',
			width: '250px',
			borderRadius: '127px',
			border: '4px solid white'
		}
	}
}