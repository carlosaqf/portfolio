import styled from 'styled-components'
import NavLogoSVG from '../../images/nav-logo.svg'
import NavMenuSVG from '../../images/nav-menu.svg'
import NavExitSVG from '../../images/nav-exit.svg'
import { colors } from '../../styles/colors'

/**
 * Nav Wrapper
 */
export const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	margin-bottom: 5rem;
	background-color: ${colors.dark};
	padding: 1rem 3.125rem 1rem 3.125rem;
	box-shadow: ${colors.boxShadow};

	@media(max-width: 768px){
		padding: 1rem 1.5rem 1rem 1.5rem;
	}
`

export const NavLink = styled.a`
	border-radius: 2rem;
	color: ${colors.light};
	padding: 0.5rem 1rem;
	text-decoration: none;

	@media(max-width: 768px){
		display: none;
	}

	&:hover{
		color: ${colors.primary};
		transition: 300ms;
	}
`

export const Logo = styled.a`
	margin-right: auto;
	padding-top: 0.313rem;
`

/**
 * Mobile Menu Styling
 */
export const MenuWrapper = styled.nav.attrs(props => ({
	className: props.className,
}))`
	position: absolute;
	width: 100%;
	top: 4.813rem;
	left: 0;
	height: 50vh;
	background-color: ${colors.dark};
	display: none;
	padding: 1.5rem;

	&.hidden{
		display: none;
	}
	
	@media(max-width: 768px){
		display: block;
	}
`
export const MenuLink = styled.a`
	color: ${colors.light};
	text-decoration: none;
	display: none;

	&:hover{
		color: ${colors.primary};
		transition: 300ms;
	}

	@media(max-width: 768px){
		display: block;
	}
`

export const MenuButton = styled.button`
	border: none;
	background: none;
	z-index: 1;
	cursor: pointer;

	display: none;
	
	@media(max-width: 768px){
		display: block;
	}

	#Capa_1{
		&:hover{
			#menu{
				transform: rotate(90deg);
				transition: all 1s ease;
				/* #first-menu-line{
					transform: translateX(50px);
					transition: all 1s ease;
				} */
			}
		}
	}
`

/**
 * SVG Icons
 */
// export const CancelIcon = styled(CancelIconSVG)`
// 	height: 1.75rem;
// 	width: 1.75rem;
// 	color: ${colors.light};
// `

// export const MenuIcon = styled(MenuIconSVG)`
// 	height: 1.75rem;
// 	width: 1.75rem;
// 	fill: ${colors.light};
// `

export const NavMenu = styled(NavMenuSVG)`
	height: 2rem;
	width: 2rem;
`

export const NavExit = styled(NavExitSVG)`
	height: 2rem;
	width: 2rem;
`

export const NavLogo = styled(NavLogoSVG)`
	height: 2.25rem;
	width: 4.5rem;
	fill: ${colors.light};

	&:hover{
		fill: ${colors.primary};
		transition: 300ms;
	}
`