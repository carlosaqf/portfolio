import React from 'react'
import { SectionHeader, Wrapper } from './about.styles'

const About:React.FC = () => {
	return(
		<>
			<Wrapper>
				<SectionHeader>Ab<span id='underline'>out</span></SectionHeader>
			</Wrapper>
		</>
	)
}

export default About