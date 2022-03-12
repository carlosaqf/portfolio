import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const StyledLink = styled.a`
	margin-right: 1rem;
	padding: 0.5rem;
	border: none;
	color: ${colors.dark};
	border-radius: 0.25rem;

	text-decoration: none;
`

export const StyledButton = styled.button`
	margin-right: 1rem;
	padding: 0.5rem;
	border: none;
	color: ${colors.dark};
	border-radius: 0.25rem;
	
	background-color: ${colors.primary};
`