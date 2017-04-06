import React, { Component } from 'react'

import PageTitle from './page-title.component'
import Showcase from './showcase.component'

const imageUrlBase = 'src/images/projects'

export default class AI extends Component {
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
				<PageTitle title="Artificial Intelligence" />
				{this.renderProjects()}
			</div>
		)
	}

	styles = {
		paragraphSpacer: {
			padding: '10px 0px'
		}
	}

	projects = [
		{
			title: 'Lane Line Detection',
			description: (
				<div>
					<div>
						This is one of my projects I completed while learning how to develop self-driving cars through
						Udacity.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						The lines on the road show us where the lanes are and act as a constant reference for where
						to steer the vehicle. Naturally, one of the first things we would like to do in developing a
						self-driving car is to automatically detect lane lines using an algorithm.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						In this project I have created a pipeline to detect lane lines in images and videos using
						Python and OpenCV.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/LaneLineDetection.png`,
			githubUrl: 'https://github.com/SealedSaint/CarND-Term1-P1'
		},
		{
			title: 'Visual Intelligence Test Solver',
			description: (
				<div>
					<div>
						This project was for Georgia Tech's Knowledge-Based AI Masters class. The goal was to design an
						algorithm to solve visual intelligence tests - specifically Raven's Progressive Matrices
						(https://en.wikipedia.org/wiki/Raven's_Progressive_Matrices).
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						While a common approach to these problems is to utilize a semantic network to identify objects
						in your image and draw relationships between them, I chose to take a computer-vision approach.
					</div>
				</div>
			),
			imageUrl: `${imageUrlBase}/RPM-Example.png`,
			githubUrl: 'https://github.com/SealedSaint/KBAI-Ravens-Project'
		}
	]
}
