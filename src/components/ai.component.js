import React, { Component } from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui'

import PageTitle from './page-title.component'
import Showcase from './showcase.component'

export default class AI extends Component {
	renderProjects() {
		return projects.map(project => <Showcase key={project.title} {...project} />)
	}

	render() {
		return (
			<div>
				<PageTitle title="Artificial Intelligence" />
				{this.renderProjects()}
			</div>
		)
	}
}

const imageUrlBase = 'src/images'
const projects = [
	{
		title: 'Lane Line Detection',
		description: `This is one of my projects I completed while learning how to develop self-driving cars
			through Udacity.

			The lines on the road show us where the lanes are and act as a constant reference for where to steer
			the vehicle. Naturally, one of the first things we would like to do in developing a self-driving car is
			to automatically detect lane lines using an algorithm.

			In this project I have created a pipeline to detect lane lines in images and videos using Python
			and OpenCV.`,
		imageUrl: `${imageUrlBase}/LaneLineDetection.png`
	},
	{
		title: 'Visual Intelligence Test Solver',
		description: `This project was for Georgia Tech's Knowledge-Based AI Masters class. The goal was to design an
			algorithm to solve visual intelligence tests - specifically Raven's Progressive Matrices
			(https://en.wikipedia.org/wiki/Raven's_Progressive_Matrices).

			While a common approach to these problems is to utilize a semantic network to identify objects in your
			image and draw relationships between them, I chose to take a computer-vision approach.`
	}
]