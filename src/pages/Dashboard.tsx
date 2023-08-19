import { Box, SimpleGrid, Text } from '@chakra-ui/react'

export const Dashboard = () => {
  const boxStyles = {
    bg: 'white',
    h: '200px',
    border: '1px solid'
  }

  return (
    <SimpleGrid p={'10px'} spacing={10} minChildWidth={'250px'}>
      <Box sx={boxStyles}>
        <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
      </Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>

      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>

      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
      <Box sx={boxStyles}></Box>
    </SimpleGrid>
  )
}
