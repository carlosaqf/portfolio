import React from 'react';
import { Navbar, Footer } from './index'
import GlobalStyle, { Container } from '../styles/global';

export default function Layout({ children }: any){
	return(
		<>
			<Navbar />
			<Container>
				{children}
			</Container>
			<Footer />
			<GlobalStyle />
		</>
	)
}