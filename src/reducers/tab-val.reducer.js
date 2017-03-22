import * as types from '../actions/types'

export default function(state = 'about', action) {
	switch(action.type) {
		case types.CHANGE_TAB:
			return action.tabVal
		default:
			return state
	}
}