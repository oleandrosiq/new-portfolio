import { forwardRef } from 'react';
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
import { MdOutlineMailOutline } from 'react-icons/md';

import { HoverCard } from '../../components/HoverCard';
import { Container, WrapperImage, Image, Techs, Content, Socials, Buttons } from './styles';

function AboutBase({}, ref) {
  return (
    <Container ref={ref}>
      <div className='circle'></div>

      <WrapperImage>
        <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' />
        <Techs>
          <HoverCard trigger={<FaReact size={27} color='var(--blue)' />}>
            <p>ReactJs</p>
          </HoverCard>
          <HoverCard trigger={<SiTypescript size={27} color='var(--blue)' />}>
            <p>Typescript</p>
          </HoverCard>
          <HoverCard trigger={<DiJavascript1 size={27} color='var(--blue)' />}>
            <p>Javascript</p>
          </HoverCard>
          <HoverCard trigger={<FaFigma size={27} color='var(--blue)' />}>
            <p>Figma</p>
          </HoverCard>
          <HoverCard trigger={<FaNodeJs size={27} color='var(--blue)' />}>
            <p>NodeJs</p>
          </HoverCard>
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
          <a href='mailto:le_kts12@hotmail.com'>
            <MdOutlineMailOutline size={25} color='var(--white)' />
            Email
          </a>
        </Buttons>
      </Content>
    </Container>
  );
}

export const About = forwardRef(AboutBase);