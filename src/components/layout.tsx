import React from 'react';
import Navbar from './Navbar/navbar'
import Footer from './Footer/footer';
import GlobalStyle, { Container } from '../styles/global';

export default function Layout({ children }: any){
	return(
		<>
			<Navbar />
			<Container>
				{children}
				<a href="/">Go Back</a>
				<div>Test</div>
			</Container>
			<Footer />
			<GlobalStyle />
		</>
	)
}