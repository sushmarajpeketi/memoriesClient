import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.js'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider
import './index.css';
import './index.css'
const el = document.getElementById('root')
const root = ReactDom.createRoot(el)
const theme = createTheme();
root.render(
 <Provider store={store}>
     <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
      <App />
    </ThemeProvider></Provider>
)