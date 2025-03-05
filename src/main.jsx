import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppTemp} from './pages/AppTemp'; 

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTemp></AppTemp>
  </StrictMode>,
)
