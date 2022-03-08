import styled from 'styled-components'
import { PageItemWrapper as FooterItemWrapper } from '../../helpers/PageItemWrapper'
import { colors } from '../../styles/colors'

export const Wrapper = styled(FooterItemWrapper)`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	padding: 1rem;
	background-color: ${colors.dark};
	height: 5rem;
`

export const FooterCopyRight = styled.div`
	margin: 0 auto;
	color: ${colors.light};

	#name{
		color: ${colors.primary};
	}
`
export const FooterLinks = styled.div`
	margin: 0 auto;
	margin-top: auto;
	
	@media(max-width: 768px){
		
	}

`

export const FooterLink = styled.a`
	padding: 0 0.5rem;
	text-decoration: none;
	color: ${colors.light};
	font-family: 'Montserrat';

	&:hover{
		color: ${colors.primary};
		transition: 300ms;
	}
`