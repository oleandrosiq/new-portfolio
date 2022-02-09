import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

import { FiDownloadCloud } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

import { Container, WrapperImage, Image, Techs, Content, Socials, Buttons } from './styles';

export function About() {
  return (
    <Container>
      <div className='circle'></div>

      <WrapperImage>
        <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' />
        <Techs>
          <FaReact size={27} color='var(--blue)' />
          <SiTypescript size={27} color='var(--blue)' />
          <DiJavascript1 size={27} color='var(--blue)' />
          <FaFigma size={27} color='var(--blue)' />
          <FaNodeJs size={27} color='var(--blue)' />
        </Techs>
      </WrapperImage>

      <Content>
        <h1>Sobre mim</h1>
        <strong>São carlos, SP</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.
        </p>

        <Socials>
          <Link href='https://github.com/oleandrosiq'>
            <a target='_blank'>
              <FaGithub size={28} color='var(--blue)' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/leandrosiq1/'>
            <a target='_blank'>
              <FaLinkedin size={28} color='var(--blue)' />
            </a>
          </Link>
          <Link href='https://www.instagram.com/oleandrosiq/'>
            <a target='_blank'>
              <FaInstagram size={28} color='var(--blue)' />
            </a>
          </Link>
        </Socials>

        <Buttons>
          <button type='button'>
            <FiDownloadCloud size={25} color='var(--white)' />
            Curriculo
          </button>
          <button type='button'>
            <MdOutlineMailOutline size={25} color='var(--white)' />
            Email
          </button>
        </Buttons>
      </Content>
    </Container>
  );
}