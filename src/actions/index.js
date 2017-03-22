import * as types from './types'

export function changeTab(tabVal) {
	console.log('changing tab to', tabVal)
	return {
		type: types.CHANGE_TAB,
		tabVal: tabVal
	}
}