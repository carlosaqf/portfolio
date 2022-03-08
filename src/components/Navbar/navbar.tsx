import React, { useState } from 'react'
import { NavExit, NavMenu, Logo, NavLink, Wrapper, MenuButton, MenuWrapper, MenuLink, NavLogo } from './navbar.styles'

const Navbar:React.FC = () => {

	const [open, setOpen] = useState(false);

	const openHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setOpen(!open);	
		
		const menu = document.getElementById('menu');
		// document.getElementById('menu').classList.toggle('hidden');

		if (menu){
			menu.classList.toggle('hidden');
		}
	}

	return(

		<>
			<Wrapper className='navbar'>
				<Logo href="/"><NavLogo /></Logo>
				<NavLink href="/projects">Projects</NavLink>
				<NavLink href="/blog">Blog</NavLink>
				<NavLink href="/about">About</NavLink>
				<NavLink href="/contact">Contact</NavLink>
				
				<MenuButton onClick={openHandler}>
					{open ? <NavExit /> : <NavMenu /> }
				</MenuButton>
				
				 
				<MenuWrapper id='menu' className='hidden'>
					<MenuLink href="/projects">Projects</MenuLink>
					<MenuLink href="/blog">Blog</MenuLink>
					<MenuLink href="/about">About</MenuLink>
					<MenuLink href="/contact">Contact</MenuLink>
				</MenuWrapper>

			</Wrapper>
		</>
	)
}

export default Navbar