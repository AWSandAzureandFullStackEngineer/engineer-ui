import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx';
import React from 'react';
import Authentication from './authentication/authentication.tsx';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Authentication />
    </ChakraProvider>
  </React.StrictMode>,
)