import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import { Home as HomeContent } from '../contents/Home';
import { Socials } from '../contents/Home/styles';

export default function Home() {
	useEffect(() => {
		alert('Portfolio is under development.');
	}, []);

	return (
		<React.Fragment>
			<HomeContent />
			<Socials>
				<p>Sociais</p>

				<Link href="https://www.instagram.com/oleandrosiq/?hl=pt-br" passHref>
					<a target="_blank" style={{ background: '#000e7e' }}>
						<FaInstagram size={22} color="var(--blue)" />
						Instagram
					</a>
				</Link>

				<Link href="https://www.linkedin.com/in/leandrosiq1/" passHref>
					<a target="_blank" style={{ background: '#00084e' }}>
						<FaLinkedin size={22} color="var(--blue)" />
						Linkedin
					</a>
				</Link>

				<Link href="https://github.com/oleandrosiq" passHref>
					<a target="_blank" style={{ background: '#00021f' }}>
						<FaGithub size={22} color="var(--blue)" />
						Github
					</a>
				</Link>
			</Socials>
		</React.Fragment>
	);
}
