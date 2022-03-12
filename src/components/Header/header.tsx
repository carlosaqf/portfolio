import React from 'react'
import { SectionHeader } from './header.styles'

interface HProps{
	children?: React.ReactNode;
	className?: string;
	id?: string;
	color?: string;
}

const Header:React.FC <HProps> = (props) => {

	const { children, className, id } = props;

	return(
		<SectionHeader className={className} id={id} {...props}>
			{children}
		</SectionHeader>
	)
}

export default Header