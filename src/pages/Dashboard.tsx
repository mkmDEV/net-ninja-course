import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'
import { TaskType } from '../types.ts'
import { EditIcon, ViewIcon } from '@chakra-ui/icons'

export const Dashboard = () => {
  const { tasks } = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth={'300px'}>
      {tasks &&
        tasks.map((task: TaskType) => (
          <Card
            as={'article'}
            key={task.id}
            borderTop={'8px'}
            borderColor={'brand.400'}
          >
            <CardHeader as={'hgroup'}>
              <Flex gap={5}>
                <Avatar src={task.img.toString()} />
                <Box>
                  <Heading as={'h3'} size={'sm'}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={'gray.500'}>
              <Text>{task.description}</Text>
            </CardBody>

            <Divider color={'gray.200'} />

            <CardFooter>
              <HStack>
                <Button variant={'ghost'} leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant={'ghost'} leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async (): Promise<Array<TaskType>> => {
  const res: Response = await fetch('data/db.json')
  return res.json()
}
