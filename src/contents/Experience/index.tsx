import { forwardRef } from 'react';
import { 
  Container,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
  ContentTab,
} from './styles';

function ExperienceBase({}, ref) {
  return (
    <Container ref={ref}>
      <h1>Experiência</h1>

      <TabsRoot defaultValue='Workfy'>
        <TabsList>
          <TabsTrigger value='Workfy'>Workfy</TabsTrigger>
          <TabsTrigger value='freela'>Freelancer</TabsTrigger>
          <TabsTrigger value='tab3' variant='loading'>Em breve</TabsTrigger>
        </TabsList>
        <TabsContent value='Workfy'>
          <TabsHeader>
            <h1>Desenvolvedor Front-End</h1>
            <p className='desktop'>Junho 2021 - Atual</p>
          </TabsHeader>
          <ContentTab>
            <span>
              <strong>Adbat - Workfy</strong>
              <p className='mobile'>Junho 2021 - Atual</p>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.
            </p>
          </ContentTab>
        </TabsContent>
        <TabsContent value='freela'>
          <TabsHeader>
              <h1>Desenvolvedor Full-stack</h1>
              <p className='desktop'>Janeiro 2022 - Atual</p>
            </TabsHeader>
            <ContentTab>
              <span>
                <strong>Freelancer</strong>
                <p className='mobile'>Janeiro 2022 - Atual</p>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.
              </p>
            </ContentTab>
        </TabsContent>
        <TabsContent value='tab3'>Em breve</TabsContent>
      </TabsRoot>
    </Container>
  );
}

export const Experience = forwardRef(ExperienceBase);