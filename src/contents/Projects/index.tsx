import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLink } from 'react-icons/fi';

import { 
  Container, 
  Projects as ProjectsList, 
  Project,
  BannerImage,
  Content,
  Buttons
} from './styles';

export function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>

      <ProjectsList>
        <Project>
          <BannerImage>
            <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' layout='fill' />
          </BannerImage>
          <Content>
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <strong>ReactJs, NextJs, Typescript, NodeJs</strong>
            <Buttons>
              <Link href='' passHref>
                <a target='_blank'>
                  <FiLink size={24} color='var(--blue)' />
                  Visualizar
                </a>
              </Link>

              <Link href='https://github.com/oleandrosiq' passHref>
                <a target='_blank'>
                  <FiGithub size={24} color='var(--blue)' />
                  Código
                </a>
              </Link>
            </Buttons>
          </Content>
        </Project>
        <Project>
          <BannerImage>
            <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' layout='fill' />
          </BannerImage>
          <Content>
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <strong>ReactJs, NextJs, Typescript, NodeJs</strong>
            <Buttons>
              <Link href='' passHref>
                <a target='_blank'>
                  <FiLink size={24} color='var(--blue)' />
                  Visualizar
                </a>
              </Link>

              <Link href='https://github.com/oleandrosiq' passHref>
                <a target='_blank'>
                  <FiGithub size={24} color='var(--blue)' />
                  Código
                </a>
              </Link>
            </Buttons>
          </Content>
        </Project>
        <Project>
          <BannerImage>
            <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' layout='fill' />
          </BannerImage>
          <Content>
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <strong>ReactJs, NextJs, Typescript, NodeJs</strong>
            <Buttons>
              <Link href='' passHref>
                <a target='_blank'>
                  <FiLink size={24} color='var(--blue)' />
                  Visualizar
                </a>
              </Link>

              <Link href='https://github.com/oleandrosiq' passHref>
                <a target='_blank'>
                  <FiGithub size={24} color='var(--blue)' />
                  Código
                </a>
              </Link>
            </Buttons>
          </Content>
        </Project>
        <Project>
          <BannerImage>
            <Image src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' layout='fill' />
          </BannerImage>
          <Content>
            <h1>Nome do projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <strong>ReactJs, NextJs, Typescript, NodeJs</strong>
            <Buttons>
              <Link href='' passHref>
                <a target='_blank'>
                  <FiLink size={24} color='var(--blue)' />
                  Visualizar
                </a>
              </Link>

              <Link href='https://github.com/oleandrosiq' passHref>
                <a target='_blank'>
                  <FiGithub size={24} color='var(--blue)' />
                  Código
                </a>
              </Link>
            </Buttons>
          </Content>
        </Project>
      </ProjectsList>
    </Container>
  );
}