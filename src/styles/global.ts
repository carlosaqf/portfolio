import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	// add @import for font here

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 16px;
		overflow-x: hidden;
	}

	#root{
		margin: 0 auto;
	}

	html{
		box-sizing: border-box;
	}

	body{
		overflow-x: hidden;
	}
`

export default GlobalStyle

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr min(80%, 43.75rem) 1fr;
	
	@media (max-width: 25rem){
		/* padding: 0 0.625rem; */
	}

	@media (max-width: 61.938rem){
		/* padding: 0 1.875rem; */
	}
`