import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Tabs, Tab } from 'material-ui'

import About from './about.component'
import AI from './ai.component'
import WebDev from './web-dev.component'

injectTapEventPlugin()

export default class App extends Component {
    render() {
        return (
            <div style={this.styles.app}>
	            <MuiThemeProvider>
		            <Tabs>
			            {/*<Tab label="About"> <About /> </Tab>*/}
			            <Tab label="Web"> <WebDev /> </Tab>
			            <Tab label="AI"> <AI /> </Tab>
		            </Tabs>
	            </MuiThemeProvider>
            </div>
        )
    }

    styles = {
    	app: {
    		position: 'absolute',
		    top: '0px',
		    left: '0px',
		    fontFamily: 'Roboto, sans-serif'
	    }
    }
}
