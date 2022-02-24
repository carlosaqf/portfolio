import React from 'react';
import '../scss/styles.scss'

export default function Layout({ children }: any){
	return(
		<div className="layout-container">
			<nav className="navbar-container">
				<ul>
					<li><a href='/about'>About</a></li>
					<li><a href='/projects'>Projects</a></li>
					<li><a href='/blog'>Blog</a></li>
					<li><a href='/contact'>Contact</a></li>
				</ul>
			</nav>
			{children}
			<a href="/">Go Home</a>
		</div>
	)
}