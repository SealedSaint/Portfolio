import React, { Component } from 'react'

import PageTitle from './page-title.component'
import Showcase from './showcase.component'
import globalStyles from './styles'

const imageUrlBase = 'src/images/projects'

export default class WebDev extends Component {
	renderProjects() {
		return this.projects.map(project => (
			<Showcase key={project.title} {...project}>
				{project.description}
			</Showcase>
		))
	}

	render() {
		return (
			<div>
				<PageTitle title="Web Development">
					<div style={this.styles.textSection}>
						The bulk of my professional career thus far has been web development. Below are some examples
						of my web dev projects.
					</div>
				</PageTitle>
				<div>
					{this.renderProjects()}
				</div>
			</div>
		)
	}

	styles = Object.assign({}, globalStyles)

	projects = [
		{
			title: 'Right Here',
			description: (
				<div>
					You're looking at it. This site itself is an example of my work!
				</div>
			),
			tags: ['Javascript', 'React', 'Redux', 'Webpack', 'HTML', 'CSS']
		},
		{
			title: 'PunchClock',
			description: (
				<div>
					<div>
						PunchClock is an application born out of my frustration with the difficulties of tracking
						time to different clients throughout the day. I built PunchClock to make it easy to switch your time to
						various projects. At the end of the day your totals per project are already displayed.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						PunchClock is built with Angular 1.5 in Electron and has desktop builds for Mac, Windows, and Linux.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/PunchClock-New.png`,
			links: [
				// {
				// 	label: 'GitHub',
				// 	url: 'https://github.com/SealedSaint/PunchClock-Desktop'
				// }
			],
			tags: ['Javascript', 'Angular', 'Electron', 'HTML', 'CSS']
		},
		{
			title: 'EventTracker',
			description: (
				<div>
					<div>
						The EventTracker is a web application designed to communicate with OSIsoft's PI System.
						The PI System lets users in manufacturing settings set up "EventFrames"​ to capture sensor data over
						time periods based on specific start and end triggers.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						The EventTracker hooks up to a PI System and reads all EventFrame data. This data is organized and
						displayed in an intuitive format for the user, giving them valuable insight into their production process.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/EventTracker Types.png`,
			tags: ['Javascript', 'NodeJS', 'Angular 2', 'OSIsoft PI', 'Gulp', 'HTML', 'CSS']
		},
		{
			title: 'Liquor Balance',
			description: (
				<div>
					<div>
						Liquor Balance is a web application I built for International Paper to transform the way they
						track and predict key values in their production process. ("Liquor"​ is what they call a few of
						their dissolving compounds.)
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						I transformed their original tool (a large, unwieldy Excel spreadsheet) into a web application
						that is easier to use and more visually appealing. Viewing their process data in beautiful
						graphs for any date range is now only a few clicks away. The graphs even show predicted future
						values.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						One of the neatest features about the Liquor Balance application is the ability to set up
						"Scenarios."​ Users can model scenarios for when a particular asset might need to be down for
						maintenance. Since active scenarios are reflected on the data graphs, they can adjust and plan
						accordingly to keep production up and running.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/Liquor Balance.png`,
			tags: ['Javascript', 'NodeJS', 'Angular 2', 'OSIsoft PI', 'Gulp', 'HTML', 'CSS']
		},
		{
			title: 'MEL Transfers',
			description: (
				<div>
					<div>
						MEL Transfers is a web application I built for Miller Coors in Golden, CO. They had a need to
						track the liquid transfers that happened in their plant and see the information in real time.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						MEL Transfers accomplished this transfer-tracking by hooking into their OSIsoft PI System data
						and organizing and displaying the data in an intuitive manner for the user.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/MEL Transfers.png`,
			tags: ['Javascript', 'NodeJS', 'Angular 2', 'OSIsoft PI', 'Gulp', 'HTML', 'CSS']
		},
		{
			title: 'Barge Unloads',
			description: (
				<div>
					<div>
						Barge Unloads is a web application I developed for Cargill. At one of their sites they
						regularly unload grain commodities from barges. Cargill wanted more insight into this
						unloading process:
						<ol>
							<li>Which parts of the unload process are slow?</li>
							<li>Are the current unloads on-time?</li>
							<li>What are our recent totals?</li>
						</ol>
					</div>
					<div>
						The Barge Unload application helps answer these questions by:
						<ol>
							<li>Displaying unload histories with on-time indications broken down by process sections.</li>
							<li>Displaying gauges representing the progress of current unloads.</li>
							<li>Displaying totals for the previous day alongside target values.</li>
						</ol>
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/Barge Unloads.png`,
			tags: ['Javascript', 'NodeJS', 'Angular 2', 'OSIsoft PI', 'Gulp', 'HTML', 'CSS']
		}
	]
}
