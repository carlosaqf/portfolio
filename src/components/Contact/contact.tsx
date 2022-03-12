import React from 'react'
import { ContactWrapper } from '../Contact/contact.styles'
import { Header } from '../index'

const Contact:React.FC = () => {
	return(
		<>
			<ContactWrapper>
				<Header id='contact'>Contact</Header>
			</ContactWrapper>
		</>
	)
}

export default Contact