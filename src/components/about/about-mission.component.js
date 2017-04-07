import React, { Component } from 'react'

export default class AboutMission extends Component {
	render() {
		return (
			<div>
				<div>
					<div style={this.styles.sectionHeader}>The Mission</div>
					<div>
						<div>
							I hate labels. Instead of categorizing myself by job title, let me just tell you about my
							mission. I think that's more important.
						</div>
						<div style={this.styles.emphasizedText}>
							Bring Heaven to Earth
						</div>
						<div>
							Every human on Earth is stuck between two facts:
						</div>
						<div>
							<ol>
								<li>Sometimes the world is an amazingly wonderful place.</li>
								<li>Sometimes the world really sucks.</li>
							</ol>
						</div>
						<div>
							My goal is to reduce world-suck, to bring Heaven to Earth in every way as quickly
							as possible.
						</div>
					</div>
				</div>
				<div>
					<div style={this.styles.sectionHeader}>How it Happens</div>
					<div>
						It happens step by step, but not all steps are equal. Steps have a magnitude and a direction.
						I want to take big steps in the right direction.
					</div>
					<div style={this.styles.emphasizedText}>Fix Our Failing Bodies</div>
					<div style={this.styles.emphasizedText}>Solve Renewable Energy</div>
					<div style={this.styles.emphasizedText}>Accelerate Growth with General Artificial Intelligence</div>
					<div>
						I thrive on dreaming big &mdash; that's who I am. But I don't want my dreams to stay dreams.
						I want to see them realized.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						I want to say up-front that my current projects fall WAY short of the goals above. They aren't
						in the same league by any stretch of the imagination. Unfortunately, we aren't born with the
						ability to take big steps. It's my imperative goal to grow and learn every day so I can
						begin to take big steps as soon as possible.
					</div>
					<div style={this.styles.paragraphSpacer} />
					<div>
						My projects listed on this site represent bodies of work I have completed for various purposes
						and showcase my current abilities.
					</div>
				</div>
			</div>
		)
	}
}