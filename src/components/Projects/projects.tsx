import React from 'react'
import { ProjectWrapper } from './projects.styles'
import { Header } from '../index'

const Projects:React.FC = () => {
	return(
		<>
			<ProjectWrapper>
				<Header id='projects'>Projects</Header>
			</ProjectWrapper>
		</>
	)
}

export default Projects