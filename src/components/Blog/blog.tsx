import React from 'react'
import { BlogWrapper } from './blog.styles'
import { Header } from '../index'

const Blog:React.FC = () => {
	return(
		<>
			<BlogWrapper>
				<Header id='blog'>Blog</Header>
			</BlogWrapper>
		</>
	)
}

export default Blog