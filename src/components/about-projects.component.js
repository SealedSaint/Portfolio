import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

export default class AboutProjects extends Component {
	render() {
		return (
			<div>
				<RaisedButton label="Web Dev"/>
				<RaisedButton label="AI"/>
				<RaisedButton label="Other"/>
			</div>
		)
	}
}