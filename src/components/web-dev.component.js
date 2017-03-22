import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui'

import PageTitle from './page-title.component'
import Showcase from './showcase.component'

export default class WebDev extends Component {
	renderProjects() {
		return projects.map(project => <Showcase key={project.title} {...project} />)
	}

	render() {
		const pageTitle = 'Web Development'
		const pageDescription = `
			The bulk of my professional career thus far has been web development.
			Below are some examples of my web dev projects.
		`
		return (
			<div>
				<PageTitle title={pageTitle} description={pageDescription} />
				{this.renderProjects()}
			</div>
		)
	}
}

const imageUrlBase = 'src/images/project'
const projects = [
	{
		title: 'PunchClock',
		description: `PunchClock is an application born out of my frustration with the difficulties of tracking
			time to different clients throughout the day. I built PunchClock to make it easy to switch your time to
			various projects. At the end of the day your totals per project are already displayed.

			PunchClock is built with Angular 1.5 in Electron and has desktop builds for Mac, Windows, and Linux.`,
		imageUrl: `${imageUrlBase}/PunchClock.png`
	},
	{
		title: 'EventTracker',
		description: `The EventTracker is a web application designed to communicate with OSIsoft's PI System.
			The PI System lets users in manufacturing settings set up "EventFrames"​ to capture sensor data over
			time periods based on specific start and end triggers.

			The EventTracker hooks up to a PI System and reads all EventFrame data. This data is organized and
			displayed in an intuitive format for the user, giving them valuable insight into their production process.`,
		imageUrl: `${imageUrlBase}/EventTracker Types.png`
	},
	{
		title: 'Liquor Balance',
		description: `PunchClock was born out of my frustration with the difficulties of tracking my time to
			different clients throughout the day. I built PunchClock to make it easy to switch your time to
			various projects. At the end of the day your totals per project are already displayed.`,
		imageUrl: `${imageUrlBase}/Liquor Balance.png`
	},
	{
		title: 'MEL Transfers',
		description: `MEL Transfers is a web application I built for Miller Coors in Golden, CO. They had a need
			to track the liquid transfers that happened in their plant and see the information in real time.

			MEL Transfers accomplished this transfer-tracking by hooking into their OSIsoft PI System data and
			organizing and displaying the data in an intuitive manner for the user.`,
		imageUrl: `${imageUrlBase}/MEL Transfers.png`
	},
	{
		title: 'Barge Unloads',
		description: `Barge Unloads is a web application I developed for Cargill. At one of their sites they
			regularly unload grain commodities from barges. Cargill wanted more insight into this unloading process:
			1. Which parts of the unload process are slow?
			2. Are the current unloads on-time?
			3. What are our recent totals?

			The Barge Unload application helps answer these questions by:
			1. Displaying unload histories with on-time indications broken down by process sections.
			2. Displaying gauges representing the progress of current unloads.
			3. Displaying totals for the previous day alongside target values.`,
		imageUrl: `${imageUrlBase}/Barge Unloads.png`
	}
]