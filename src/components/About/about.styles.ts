import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Wrapper = styled.div`
	background-color: ${colors.dark};
	height: 20rem;
`

export const SectionHeader = styled.h2`
	color: ${colors.light};
	font-weight: 400;
	font-family: 'Noto Serif';
	font-size: 36px;

	#underline{
		font-weight: 400;
		font-family: 'Noto Serif';
		font-size: 36px;
		border-bottom: 1px solid ${colors.primary};
	}
`

