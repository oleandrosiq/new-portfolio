import { 
  Container,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
  ContentTab,
} from './styles';

export function Experience() {
  return (
    <Container>
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
            <p>Junho 2021 - Atual</p>
          </TabsHeader>
          <ContentTab>
            <strong>Adbat - Workfy</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.
            </p>
          </ContentTab>
        </TabsContent>
        <TabsContent value='freela'>
          <TabsHeader>
              <h1>Desenvolvedor Full-stack</h1>
              <p>Janeiro 2022 - Atual</p>
            </TabsHeader>
            <ContentTab>
              <strong>Freelancer</strong>
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