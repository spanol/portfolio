import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container mt={4}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Olá! eu sou um desenvolvedor de software situado no Brasil.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vinicius Spanol
          </Heading>
          <p>Desenvolvedor De Software Fullstack</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/spanol.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Trabalhos
        </Heading>
        <Paragraph>
          Vinicius é um desenvolvedor de software que trabalha com tecnologias
          web e móveis. Ele é um desenvolvedor de software independente e
          trabalha em projetos de código aberto e comerciais, possui experiência
          em desenvolvimento de aplicativos móveis, web e backend.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Meu portfólio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Nasceu em Santos, São Paulo, Brasil
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completou o curso de desenvolvimento fullstack da Blue EdTech.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Inicia a carreira de desenvolvedor de software fullstack de forma home office trabalhando para a VSA SOFTWARE, empresa situada no Rio de Janeiro.
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Iniciou o desenolvimento de um projeto pessoal chamado Daichi uma rede social para geeks e nerds.
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          Iniciou o desenvolvimento de um projeto pessoal chamado Alô Freela uma plataforma de freelancers para contratação de serviços, divulgação de trabalhos e networking.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Onde me encontrar
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/spanol" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @spanol
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/spanol" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @spanol
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
