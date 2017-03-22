import React, { Component, PropTypes } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Tabs, Tab } from 'material-ui'

import About from './about.component'
import AI from './ai.component'
import Web from './web-dev.component'


export default class App extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	state = {
		tabVal: 'about'
	}

	setTabVal(value) {
		const tabVal = value || this.context.router.route.location.pathname.replace('/', '')
		this.setState({ tabVal:  tabVal})
	}

	componentDidMount() {
		this.setTabVal.call(this)
	}

	handleTabChange(value) {
		this.context.router.history.push(`/${value}`)
		this.setTabVal.call(this, value)
	}

    render() {
        return (
            <div style={this.styles.app}>
				<Tabs
					value={this.state.tabVal}
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
		    fontFamily: 'Roboto, sans-serif',
		    background: '#fdfdfd'
	    }
    }
}
