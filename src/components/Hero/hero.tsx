import React from 'react'
import { HeroWrapper, LayersContainer } from './hero.styles'
import Layers from '../../images/layers.svg';
import { Button } from '../index'

const Hero:React.FC = () => {
	return(
		<>
			<HeroWrapper>
				<h1>From Concept to <span id='colored'>Code</span>.</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore reiciendis provident sequi sit nostrum laboriosam ipsum perspiciatis, velit, quae necessitatibus voluptatem dolorum neque accusamus expedita odit assumenda labore molestias tempora?</p>
				<div>
					<Button text='Call To Action 1'/>
					<Button link='www.google.com' text='Call To Action 2'/>
				</div>
			</HeroWrapper>

			<LayersContainer>
				<Layers />
			</LayersContainer>
		</>
	)
}

export default Hero