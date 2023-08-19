import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text
} from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <>
      <Flex as={'nav'} p={'10px'} alignItems={'center'}>
        <Heading as={'h1'}>Dojo tasks</Heading>
        <Spacer />

        <HStack spacing={'20px'}>
          <Box bg={'gray.200'} p={'10px'}>
            M
          </Box>
          <Text>mario@netninja.dev</Text>
          <Button colorScheme={'purple'}>Logout</Button>
        </HStack>
      </Flex>
    </>
  )
}
