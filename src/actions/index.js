import * as types from './types'

export function changeTab(tabVal) {
	return {
		type: types.CHANGE_TAB,
		tabVal: tabVal
	}
}