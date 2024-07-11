import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Página não encontrada</Heading>
      <Text>A página que você está procurando não existe.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Voltar para a página inicial
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
