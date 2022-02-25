import React from 'react';
import Navbar from '../components/navbar'
import { Container } from '../styles/global';

export default function Layout({ children }: any){
	return(
		<Container>
			<Navbar />
			{children}
			<a href="/">Go Back</a>
		</Container>
	)
}