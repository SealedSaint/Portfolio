import React, { Component } from 'react'

import AboutProjects from './about-projects.component'
import AboutSocialMedia from './about-social-media.component'
import aboutStyles from './styles'

export class About extends Component {
	render() {
		return (
			<div style={this.styles.about}>
				<div style={this.styles.imagesContainer}>
					<img src="src/images/Cover Pic Yosemite.jpg" style={this.styles.coverImage} />
					<img src="src/images/Profile Pic Great Wall.jpg" style={this.styles.profilePic} />
				</div>
				<div style={this.styles.textSection}>
					<AboutSocialMedia />
					<AboutProjects />
				</div>
			</div>
		)
	}

	styles = Object.assign({}, aboutStyles, {
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
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			height: '75%',
			border: '4px solid white',
			borderRadius: '100%'
		}
	})
}