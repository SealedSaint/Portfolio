import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui'

import { About } from './about'
import AI from './ai.component'
import Footer from './footer.component'
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
	            <Switch>
					<Route path="/:tab(about|web|ai)" render={({ match }) => (
						<Tabs
							value={match.params.tab}
							onChange={this.handleTabChange.bind(this)}
						>
							<Tab label="About" value="about"> <About /> </Tab>
							<Tab label="Web" value="web"> <Web /> </Tab>
							<Tab label="AI" value="ai"> <AI /> </Tab>
						</Tabs>
					)} />
					<Redirect to="/about" />
				</Switch>
	            <Footer />
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

export default connect(mapStateToProps, actions, null, { pure: false })(App)
