import * as types from './types'

export function changeTab(tabVal) {
	window.scrollTo(0, 0)
	return {
		type: types.CHANGE_TAB,
		tabVal: tabVal
	}
}