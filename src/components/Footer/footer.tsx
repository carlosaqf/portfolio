import React from 'react'
import { Wrapper, FooterCopyRight, FooterLinks, FooterLink } from './footer.styles'

const Footer: React.FC = () => {
	return(
		<>
			<Wrapper>
				<FooterLinks>
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
				</FooterLinks>

				<FooterCopyRight>
					&copy; {new Date().getFullYear()} <span id='name'>Carlos Fegurgur</span>
				</FooterCopyRight>
			</Wrapper>
		</>
	)
}

export default Footer