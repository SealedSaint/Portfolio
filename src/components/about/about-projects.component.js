import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'

import * as actions from '../../actions'
import aboutStyles from './styles'

class AboutProjects extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	handleButtonTap(tabVal) {
		this.context.router.history.push(`/${tabVal}`)
		this.props.changeTab(tabVal)
	}

	renderProjectButtons() {
		return (
			<div>
				{['Web', 'AI'].map(label => (
					<RaisedButton
						key={label}
						label={label}
						primary={true}
						style={this.styles.buttonListButton}
						onTouchTap={() => this.handleButtonTap(label.toLowerCase())} />
				))}
			</div>
		)
	}

	render() {
		return (
			<div>
				<div style={this.styles.sectionHeader}>
					My Projects
				</div>
				<div>
					This site showcases my past projects and current abilities. Most of my experience
					lies in two main sectors: web development and artificial intelligence.
				</div>
				<div>
					{this.renderProjectButtons()}
				</div>
			</div>
		)
	}

	styles = Object.assign({}, aboutStyles)
}

export default connect(null, actions)(AboutProjects)
