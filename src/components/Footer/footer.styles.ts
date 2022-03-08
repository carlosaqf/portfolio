import styled from 'styled-components'
import { PageItemWrapper as FooterItemWrapper } from '../../helpers/PageItemWrapper'

export const Wrapper = styled(FooterItemWrapper)`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	padding: 1rem;
`

export const Top = styled.div`
	margin: 0 auto;

`
export const Bottom = styled.div`
	margin: 0 auto;

`

export const FooterLink = styled.a`
	padding: 0 0.5rem;
	text-decoration: none;

	&:hover{
		text-decoration: underline;
	}
`