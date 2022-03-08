import React from 'react'
import { Wrapper, Top, Bottom, FooterLink } from './footer.styles'

const Footer: React.FC = () => {
	return(
		<>
			<Wrapper>
				<Top>
					&copy; {new Date().getFullYear()} Carlos Fegurgur
				</Top>

				<Bottom>
					<FooterLink href="https://www.github.com/carlosaqf" target="_blank">
						Github
					</FooterLink>
					<FooterLink href="https://www.linkedin.com/in/cfegurgur" target="_blank">
						LinkedIn
					</FooterLink>
					<FooterLink href="https://www.twitter.com/carlosaqf_" target="_blank">
						Twitter
					</FooterLink>
					<FooterLink href="/contact">
						Contact
					</FooterLink>
				</Bottom>
			</Wrapper>
		</>
	)
}

export default Footer