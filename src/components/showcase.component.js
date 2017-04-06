import React, { Component } from 'react'
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { FlatButton } from 'material-ui'

export default class Showcase extends Component {
	handleGitHubClick(url) {
		window.location.href = url
	}

	renderCardActions() {
		if(!this.props.githubUrl) return

		return (
			<CardActions>
				<FlatButton label="GitHub" onTouchTap={() => this.handleGitHubClick(this.props.githubUrl)} />
			</CardActions>
		)
	}

	render() {
		return (
			<Card style={this.styles.card}>
				<CardMedia>
					<img src={this.props.imageUrl} />
				</CardMedia>
				<CardTitle title={this.props.title} />
				<CardText>
					{this.props.children}
				</CardText>
				{this.renderCardActions()}
			</Card>
		)
	}

	styles = {
		card: {
			margin: '40px 10%'
		}
	}
}
