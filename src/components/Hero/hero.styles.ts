import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeroWrapper = styled.div`
	height: 50rem;

	#colored{
		color: ${colors.primary};
		font-size: 72px;
	}

	h1{
		font-size: 72px;
		margin-bottom: 2rem;
	}

	p{
		font-size: 20px;
		margin-bottom: 2rem;
	}

	div > button{
		margin-right: 1rem;
		padding: 0.5rem;
		border: none;
		color: ${colors.dark};
	}

	div > #primary{
		background-color: ${colors.primary};
	}
`
