import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'

import * as actions from '../../actions'

class AboutProjects extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	handleButtonTap(tabVal) {
		this.context.router.history.push(`/${tabVal}`)
		this.props.changeTab(tabVal)
	}

	renderProjectButtons() {
		return ['Web', 'AI'].map(label =>
			<div key={label} style={this.styles.buttonContainer}>
				<RaisedButton label={label} primary={true} onTouchTap={() => this.handleButtonTap(label.toLowerCase())} />
			</div>
		)
	}

	render() {
		return (
			<div>
				<div style={this.styles.header}>
					My Projects
				</div>
				<div>
					{this.renderProjectButtons.apply(this)}
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
