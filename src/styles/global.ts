import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	// add @import for font here

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}

	#root{
		margin: 0 auto;
	}

	html{
		box-sizing: border-box;

	}
`

export default GlobalStyle

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 3.125rem;
	max-width: 81.25rem;
	width: 100%;
	
	@media (max-width: 25rem){
		padding: 0 0.625rem;
	}

	@media (max-width: 61.938rem){
		padding: 0 1.875rem;
	}

	@media (max-width: 93.75rem){
		max-width: 93.75rem;
	}

	@media (max-width: 112.5rem){
		max-width: 112.5rem;
		padding: 0 1.875rem;
	}
`