import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/app.component'
import reducers from './reducers'

injectTapEventPlugin()
const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render (
    (
        <Provider store={createStoreWithMiddleware(reducers)}>
	        <BrowserRouter>
				<MuiThemeProvider>
					<App />
				</MuiThemeProvider>
	        </BrowserRouter>
        </Provider>
    ),
    document.querySelector('.container')
)
