import React, { Component } from 'react'

export default class PageTitle extends Component {
	render() {
		return (
			<div style={this.styles.pageTitle}>
				<div style={this.styles.title}>
					{this.props.title}
				</div>
				<div style={this.styles.description}>
					This is some text about this section
				</div>
			</div>
		)
	}

	styles = {
		pageTitle: {
			textAlign: 'center'
		},
		title: {
			fontSize: '45px',
			padding: '10px 0px'
		},
		description: {
			padding: '10px 0px'
		}
	}
}