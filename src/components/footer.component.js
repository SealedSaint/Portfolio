import React, { Component } from 'react'

import globalStyles from './styles'

export default class Footer extends Component {
	render() {
		return (
			<div style={this.styles.footer}>
				<div>Think we should work together? Just want to chat?</div>
				<div>Email me at: davidclark314@gmail.com</div>
				<div style={this.styles.paragraphSpacer} />
				<div>Created by David Clark. Last updated June, 2019.</div>
			</div>
		)
	}

	styles = Object.assign({}, globalStyles, {
		footer: {
			marginTop: '30px',
			padding: '15px',
			background: '#ddd',
			color: '#777',
			fontSize: '12px'
		}
	})
}
