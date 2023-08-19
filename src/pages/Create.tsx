import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

export const Create = () => (
  <Box maxW={'480px'}>
    <Form method={'post'} action={'/create'}>
      <FormControl isRequired mb={'40px'}>
        <FormLabel>Task name:</FormLabel>
        <Input type={'text'} name={'title'} />
        <FormHelperText>Enter a descriptive task name.</FormHelperText>
      </FormControl>

      <FormControl mb={'40px'}>
        <FormLabel>Task description:</FormLabel>
        <Textarea
          placeholder={'Enter a detailed description for the task...'}
          name={'description'}
        />
      </FormControl>
      <FormControl mb={'40px'} display={'flex'} alignItems={'center'}>
        <Checkbox colorScheme={'purple'} name={'isPriority'} size={'lg'} />
        <FormLabel mb={0} ml={'10px'}>
          Make this a priority task.
        </FormLabel>
      </FormControl>

      <Button type={'submit'}>Submit</Button>
    </Form>
  </Box>
)

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority')
  }

  console.info(task)

  return redirect('/')
}
