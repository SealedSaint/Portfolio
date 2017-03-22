import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui'

import About from './about.component'
import AI from './ai.component'
import Web from './web-dev.component'
import * as actions from '../actions/index'

function mapStateToProps({ tabVal }) {
	return {
		tabVal
	}
}

class App extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	setTabVal(tabVal) {
		this.props.changeTab(tabVal)
	}

	componentDidMount() {
		this.setTabVal.call(this, this.context.router.route.location.pathname.replace('/', ''))
	}

	handleTabChange(value) {
		this.context.router.history.push(`/${value}`)
		this.setTabVal.call(this, value)
	}

    render() {
        return (
            <div style={this.styles.app}>
				<Tabs
					value={this.props.tabVal}
					onChange={this.handleTabChange.bind(this)}
				>
					<Tab label="About" value="about" />
					<Tab label="Web" value="web" />
					<Tab label="AI" value="ai" />
				</Tabs>
				<Switch>
					<Route exact path="/about" component={About} />
					<Route exact path="/web" component={Web} />
					<Route exact path="/ai" component={AI} />
					<Redirect to="/about" />
				</Switch>
            </div>
        )
    }

    styles = {
    	app: {
    		position: 'absolute',
		    top: '0px',
		    left: '0px',
		    width: '100%',
		    height: '100%',
		    overflowY: 'scroll',
		    fontFamily: 'Roboto, sans-serif',
		    background: '#fdfdfd'
	    }
    }
}

export default connect(mapStateToProps, actions)(App)
