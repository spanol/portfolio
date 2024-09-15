import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="alofreela">
    <Container>
      <Title>
        Alô Freela <Badge>2024-Presente</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/alofreela_logo.jpg" alt="icon" />
      </Center>
      <P>
        Platforma de freelancers para contratação de serviços, divulgação de
        trabalhos e networking.
      </P>
      <P>
        A plataforma tem como objetivo conectar freelancers com empresas e
        pessoas que buscam por serviços de qualidade.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Desenvolvimento de front-end e back-end</ListItem>
        <ListItem>Integração com serviços de pagamento</ListItem>
        <ListItem>Desenvolvimento de aplicativo mobile</ListItem>
        <ListItem>Desenvolvimento de API</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NestJS, Postgres, Next.js </span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2008/03/23</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Mídia</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html">
            <Badge mr={2}>窓の杜</Badge>
            「MSN
            Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
        <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
      <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
