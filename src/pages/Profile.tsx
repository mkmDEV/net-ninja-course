import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon
} from '@chakra-ui/icons'

export const Profile = () => {
  const tabStyles = {
    _selected: { color: 'white', bg: 'brand.400' }
  }

  return (
    <Tabs mt={'40px'} p={'20px'} variant={'enclosed'}>
      <TabList>
        <Tab sx={tabStyles}>Account Info</Tab>
        <Tab sx={tabStyles}>Task history</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet, consectetur.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
              mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
              Lorem ipsum dolor sit
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color={'red.400'} />
              Lorem ipsum dolor sit amet, consectetur.
            </ListItem>{' '}
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={'teal.400'} />
              Lorem ipsum dolor sit amet, consectetur.
            </ListItem>{' '}
            <ListItem>
              <ListIcon as={WarningIcon} color={'red.400'} />
              Lorem ipsum dolor sit amet, consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
