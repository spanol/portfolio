import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import aloFreelaLogo from '../public/images/works/alofreela_logo.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Portfólio
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="alofreela" title="Alô Freela" thumbnail={aloFreelaLogo}>
            Uma plataforma de freelancers para contratação de serviços, divulgação de trabalhos e networking.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={aloFreelaLogo}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={aloFreelaLogo}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={aloFreelaLogo}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
