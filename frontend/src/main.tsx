import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <NextUIProvider>
          <App />
          <Toaster />
      </NextUIProvider>
  </BrowserRouter>,
)
