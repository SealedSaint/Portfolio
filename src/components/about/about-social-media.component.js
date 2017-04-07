import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

import aboutStyles from './styles'

export default class AboutSocialMedia extends Component {
	handleButtonTap(url) {
		window.location.href = url
	}

	renderButtons() {
		return this.links.map(link => (
			<RaisedButton
				key={link.label}
				label={link.label}
				primary={true}
				style={this.styles.buttonListButton}
				onTouchTap={() => this.handleButtonTap(link.url)}
			/>
		))
	}

	render() {
		return (
			<div style={this.styles.buttonListContainer}>
				{this.renderButtons()}
			</div>
		)
	}

	styles = Object.assign({}, aboutStyles, {
		buttonListContainer: {
			marginTop: '15px'
		}
	})

	links = [
		{
			label: 'GitHub',
			url: 'https://github.com/SealedSaint'
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/davidedwardclark/'
		},
		{
			label: 'Medium',
			url: 'https://medium.com/@SealedSaint'
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/SealedSaint'
		},
		{
			label: 'Facebook',
			url: 'http://facebook.com/david.clark314'
		}
	]
}