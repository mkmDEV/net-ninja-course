import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../components'
import { Grid, GridItem } from '@chakra-ui/react'

export const RootLayout = () => (
  <>
    <Grid templateColumns={'repeat(6, 1fr)'} bg={'gray.100'}>
      <GridItem
        as={'aside'}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg={'brand.500'}
        minH={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as={'main'} colSpan={{ base: 6, lg: 4, xl: 5 }} p={'40px'}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  </>
)
