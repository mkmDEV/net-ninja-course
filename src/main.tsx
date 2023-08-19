import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme
} from '@chakra-ui/react'

const colors = {
  brand: baseTheme.colors.red
}

const fonts = {
  body: 'HelveticaNeue, sans-serif',
  heading: 'HelveticaNeue, serif'
}

const customTheme = extendTheme(
  { colors, fonts },
  withDefaultColorScheme({ colorScheme: 'brand' })
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
