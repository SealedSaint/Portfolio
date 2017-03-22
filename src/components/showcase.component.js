import React, { Component } from 'react'

export default class Showcase extends Component {
	render() {
		return (
			<div style={this.styles.showcase}>
				<div style={this.styles.title}>
					{this.props.title}
				</div>
				<div>
					<img style={this.styles.image} src={this.props.imageUrl} />
				</div>
				<div style={this.styles.description}>{this.props.description}</div>
			</div>
		)
	}

	styles = {
		showcase: {
			textAlign: 'center',
			paddingBottom: '25px'
		},
		title: {
			fontSize: '30px',
			padding: '10px 0px'
		},
		image: {
			width: '80%'
		},
		description: {
			width: '90%',
			margin: 'auto'
		}
	}
}
