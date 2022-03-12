import React from 'react'
import { StyledLink, StyledButton } from './button.styles'

interface ButtonProps{
	link?: string;
	text?: string;
}

const Button:React.FC <ButtonProps> = ({ link, text }) => {

	return(
		<>
			{ link ? 
				<StyledLink href={link}>
					{text}
				</StyledLink> 
			: 
				<StyledButton>
					{text}
				</StyledButton>
			}
		</>
	)
}

export default Button