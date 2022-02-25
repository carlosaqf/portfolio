import React from 'react'
import { Logo, LogoWrapper, NavLink, NavLinkWrapper, Wrapper } from './styles'
import { Container } from '../../styles/global'

const Navbar:React.FC = () => {
	return(

		<>
			<Wrapper>
				<LogoWrapper>
					<a href="/">
						<Logo>CF</Logo>
					</a>
				</LogoWrapper>
		
				<NavLinkWrapper>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/blog">Blog</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</NavLinkWrapper>
			</Wrapper>
		</>
	)
}

export default Navbar