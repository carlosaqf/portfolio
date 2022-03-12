import React from 'react'
import { AboutWrapper } from './about.styles'
import { Header } from '../index'

const About:React.FC = () => {

	return(
		<>
			<AboutWrapper>
				<Header id='about'>About</Header>
			</AboutWrapper>
		</>
	)
}

export default About