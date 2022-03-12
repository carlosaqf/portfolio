import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const SectionHeader = styled.h3`
	color: ${colors.light};
	font-weight: 400;
	font-family: 'Noto Serif';
	font-size: 36px;

	&:after{
		border-bottom: 1px solid ${colors.primary};
	}
`