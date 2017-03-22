import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'

import * as actions from '../actions'

class AboutProjects extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	handleButtonTap(tabVal) {
		this.context.router.history.push(`/${tabVal}`)
		this.props.changeTab(tabVal)
	}

	render() {
		return (
			<div>
				<div style={this.styles.header}>
					My Projects
				</div>
				<div>
					<div style={this.styles.buttonContainer}>
						<RaisedButton label="Web" onTouchTap={() => this.handleButtonTap('web')} />
					</div>
					<div style={this.styles.buttonContainer}>
						<RaisedButton label="AI" onTouchTap={() => this.handleButtonTap('ai')} />
					</div>
				</div>
			</div>
		)
	}

	styles = {
		header: {
			fontSize: '30px',
			padding: '10px 0px'
		},
		buttonContainer: {
			display: 'inline-block',
			padding: '0px 15px'
		}
	}
}

export default connect(null, actions)(AboutProjects)
