import React, { Component } from 'react'

import AboutProjects from './about-projects.component'

export default class About extends Component {
	render() {
		return (
			<div style={this.styles.about}>
				<AboutProjects />
			</div>
		)
	}

	styles = {
		about: {
			textAlign: 'center'
		}
	}
}