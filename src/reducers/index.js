import { combineReducers } from 'redux'

import TabValReducer from './tab-val.reducer'

const RootReducer = combineReducers({
	tabVal: TabValReducer
})

export default RootReducer