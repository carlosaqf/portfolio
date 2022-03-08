import React from 'react'
import { HeroWrapper } from './hero.styles'

const Hero:React.FC = () => {
	return(
		<>
			<HeroWrapper>
				<h1>From Concept to <span id='colored'>Code</span>.</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore reiciendis provident sequi sit nostrum laboriosam ipsum perspiciatis, velit, quae necessitatibus voluptatem dolorum neque accusamus expedita odit assumenda labore molestias tempora?</p>
				<div>
					<button id='primary'>Call To Action 1</button>
					<button>Call To Action 2</button>
				</div>
			</HeroWrapper>
		</>
	)
}

export default Hero