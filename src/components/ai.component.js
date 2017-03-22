import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui'

import PageTitle from './page-title.component'
import Showcase from './showcase.component'

export default class AI extends Component {
	render() {
		return (
			<div>
				<PageTitle title="AI" />
				<Card>
					<CardTitle title="PunchClock" subtitle="Time-Tracking Made Simple" />
					<CardMedia>
						<img src="src/images/PunchClock.png" />
					</CardMedia>
					<CardText>
						PunchClock was born out of my frustration with the difficulties of tracking my time to
						different clients throughout the day. I built PunchClock to make it easy to switch your
						time to various projects. At the end of the day your totals per project are already displayed.
					</CardText>
				</Card>
			</div>
		)
	}
}