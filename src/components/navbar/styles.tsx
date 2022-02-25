import styled from 'styled-components'
import { PageItemWrapper as NavItemWrapper } from '../../helpers/PageItemWrapper'

export const Wrapper = styled(NavItemWrapper)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5rem;
	margin-top: 1rem;
`

export const LogoWrapper = styled(NavItemWrapper)`

`

export const NavLinkWrapper = styled(NavItemWrapper)`
	display: flex;
	flex-direction: row;

	a{
		padding: 0 1rem 0 1rem;
	}

	a:last-child{
		padding-right: 0;
	}

	@media(max-width: 425px){
		flex-direction: column;
		a{
			padding: 0;
		}
	}
	

`

export const Logo = styled.div`
	width: 3rem;
	padding: .2rem .1rem;
`


export const NavLink = styled.a`
	color: red;
	text-decoration: none;
`