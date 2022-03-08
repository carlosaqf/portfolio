import React, { useState } from 'react'
import { NavExit, NavMenu, Logo, NavLink, Wrapper, MenuButton, MenuWrapper, MenuLink, NavLogo } from './navbar.styles'

const Navbar:React.FC = () => {

	const [open, setOpen] = useState(false);

	const handleMenuButton = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setOpen(!open);	
		
		const menu = document.getElementById('menu');

		if (menu){
			menu.classList.toggle('hidden');
		}
	}

	const handleMenuLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
		setOpen(!open);	
		
		const menu = document.getElementById('menu');

		if (menu){
			menu.classList.toggle('hidden');
		}
	}

	return(

		<>
			<Wrapper className='navbar'>
				<Logo href="/"><NavLogo /></Logo>
				<NavLink href="#projects">Projects</NavLink>
				<NavLink href="#blog">Blog</NavLink>
				<NavLink href="#about">About</NavLink>
				<NavLink href="#contact">Contact</NavLink>
				
				<MenuButton onClick={handleMenuButton}>
					{open ? <NavExit /> : <NavMenu /> }
				</MenuButton>
				
				 
				<MenuWrapper id='menu' className='hidden'>
					<ul>
						<li><MenuLink href="#projects" onClick={handleMenuLink}>Projects</MenuLink></li>
						<li><MenuLink href="#blog" onClick={handleMenuLink}>Blog</MenuLink></li>
						<li><MenuLink href="#about" onClick={handleMenuLink}>About</MenuLink></li>
						<li><MenuLink href="#contact" onClick={handleMenuLink}>Contact</MenuLink></li>
					</ul>
				</MenuWrapper>

			</Wrapper>
		</>
	)
}

export default Navbar