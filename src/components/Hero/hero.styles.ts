import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeroWrapper = styled.div`
	width: 100%;
	grid-column: 1 / 4;
	padding: 1rem;

	#colored{
		color: ${colors.primary};
		font-size: 4rem;
	}

	h1{
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	p{
		font-size: 20px;
		margin-bottom: 2rem;
	}
`

export const LayersContainer = styled.div`
	width: 100%;
	grid-column: 1 / 4;

	#visual{
		width: 100%;
		display: block;
	}
`