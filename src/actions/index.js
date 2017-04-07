import * as types from './types'

export function changeTab(tabVal) {
	console.log('changing tab and scrolling to top')
	window.scrollTo(0, 0)
	return {
		type: types.CHANGE_TAB,
		tabVal: tabVal
	}
}